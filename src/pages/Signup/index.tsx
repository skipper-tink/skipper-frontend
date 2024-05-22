import styles from './style.module.css';
import classNames from 'classnames/bind';
import { Box, HStack, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import PersonalInfo from './components/PersonalInfo';
import ContactInfo from './components/ContactInfo';
import ResumeInfo from './components/ResumeInfo';
import axios from 'axios';
import { Skill, WorkInfo, Creds, Contacts } from '../../type/dataType';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../stores/user.store';
import validator from 'validator';

const style = classNames.bind(styles);

function Signup() {
  const userStore = useUserStore();
  const setName = userStore.setName;
  const navigate = useNavigate();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [workInfo, setSelectedSkills] = useState<WorkInfo>({
    role: '',
    specialization: '',
    grade: '',
    freeHours: 0,
    skills: [],
  });
  const [creds, setCreds] = useState<Creds>({
    login: '',
    password: '',
  });
  const [contacts, setContacts] = useState<Contacts>({
    fullname: '',
    mail: '',
    telegram: '',
    git: '',
  });

  const handleChangedWorkInfo = (workInfo: WorkInfo) => {
    setSelectedSkills(workInfo);
  };

  const handleChangedCreds = (creds: Creds) => {
    setCreds(creds);
  };

  const handleChangedContacts = (contacts: Contacts) => {
    setContacts(contacts);
  };

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/skills');
        setSkills(response.data);
      } catch (error) {
        console.error('Ошибка при скиллов:', error);
      }
    };
    fetchSkills();
  }, []);

  const handleRegistration = async () => {
    try {
      const userResponse = await axios.post(
        'http://localhost:8080/api/registration/user',
        {
          login: creds.login,
          password: creds.password,
        },
      );

      if (!userResponse.data) {
        throw new Error('Ошибка при создании пользователя');
      }

      let endpoint, requestBody;
      if (workInfo.role === 'employee') {
        endpoint = `http://localhost:8080/api/registration/employee/${userResponse.data}`;
        requestBody = {
          name: contacts.fullname,
          freeTimePerWeek: workInfo.freeHours,
          specialization: workInfo.specialization,
          qualification: workInfo.grade,
          email: contacts.mail,
          phoneNumber: contacts.telegram,
        };
      } else {
        endpoint = `http://localhost:8080/api/registration/employer/${userResponse.data}`;
        requestBody = {
          name: contacts.fullname,
          email: contacts.mail,
          phoneNumber: contacts.telegram,
        };
      }
      if (endpoint) {
        const response = await axios.post(endpoint, requestBody);

        if (workInfo.role === 'employee') {
          const skills: number[] = [];
          workInfo.skills.forEach(async (skill) => {
            skills.push(skill.id);
          });
          const employeeSkillsEndpoint = `http://localhost:8080/api/employee/${response.data}/skills`;

          try {
            await axios.post(employeeSkillsEndpoint, skills);
          } catch (error) {
            console.error('Произошла ошибка при отправке запроса:', error);
          }
        }

        if (!response.data) {
          throw new Error('Ошибка при создании профиля');
        }

        setName(contacts.fullname);
        navigate('/');
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };
  return (
    <div className={style('signup')}>
      <Box w="96vw" h="764px">
        <HStack spacing="48px" alignItems="center" justifyContent="center">
          <Box className={style('signup__leftside')}>
            <PersonalInfo creds={creds} onCredsChanged={handleChangedCreds} />
            <img
              className={style('signup__logoTink')}
              src="./tinkoffLogo.svg"
              alt="TINKOFFLOGO"
            />
            <ContactInfo
              contacts={contacts}
              onContactsChanged={handleChangedContacts}
            />
          </Box>
          <div className={style('signup__fullcard')}>
            <ResumeInfo
              skills={skills}
              workInfo={workInfo}
              onWorkInfoChange={handleChangedWorkInfo}
            />
            <Button
              onClick={handleRegistration}
              fontSize="16px"
              mt="40px"
              borderRadius="6px"
              p="3"
              colorScheme="blackAlpha"
              isDisabled={
                creds.password.length < 5 || !validator.isEmail(contacts.mail)
              }
            >
              Зарегистрироваться
            </Button>
          </div>
        </HStack>
      </Box>
    </div>
  );
}

export default Signup;
