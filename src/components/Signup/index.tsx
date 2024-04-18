import styles from './style.module.css';
import classNames from 'classnames/bind';
import { Box, HStack, Button } from '@chakra-ui/react';
import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import ContactInfo from './components/ContactInfo';
import ResumeInfo from './components/ResumeInfo';

const style = classNames.bind(styles);

function Signup() {
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
            <ResumeInfo />
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
