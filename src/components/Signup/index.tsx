import styles from './style.module.css';
import classNames from 'classnames/bind';
import { Box, HStack, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import PersonalInfo from './components/PersonalInfo';
import ContactInfo from './components/ContactInfo';
import ResumeInfo from './components/ResumeInfo';
import axios from 'axios';
import { Skill, WorkInfo, Creds, Contacts } from '../../type/dataType';

const style = classNames.bind(styles);

function Signup() {
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
        const response = await axios.get('/api/skills');
        setSkills(response.data);
      } catch (error) {
        console.error('Ошибка при скиллов:', error);
      }
    };
    fetchSkills();
  }, []);

  const handleRegistration = () => {
    console.log('Выбранные скиллы:', workInfo);
    console.log('Login: ' + creds.login + ' pass: ' + creds.password);
    console.log('Контакт. данные: ', contacts);
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
