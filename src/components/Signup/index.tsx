import styles from './style.module.css';
import classNames from 'classnames/bind';
import { Box, HStack, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import PersonalInfo from './components/PersonalInfo';
import ContactInfo from './components/ContactInfo';
import ResumeInfo from './components/ResumeInfo';
import axios from 'axios';
import { Skill } from '../../type/dataType';

const style = classNames.bind(styles);

function Signup() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/api/skills');
        setSkills(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке сотрудников:', error);
      }
    };
    fetchSkills();
  }, []);
  return (
    <div className={style('signup')}>
      <Box w="96vw" h="764px">
        <HStack spacing="48px" alignItems="center" justifyContent="center">
          <Box className={style('signup__leftside')}>
            <PersonalInfo />
            <img
              className={style('signup__logoTink')}
              src="./tinkoffLogo.svg"
              alt="TINKOFFLOGO"
            />
            <ContactInfo />
          </Box>
          <div className={style('signup__fullcard')}>
            <ResumeInfo skills={skills} />
            <Button
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
