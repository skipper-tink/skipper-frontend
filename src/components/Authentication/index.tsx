import styles from './style.module.css';
import classNames from 'classnames/bind';
import { Box, HStack, Link } from '@chakra-ui/react';
import AuthForm from './AuthForm';
import React from 'react';

const style = classNames.bind(styles);

function Authentication() {
  return (
    <Box w="96vw" h="764px" className={style('Authentication')}>
      <HStack spacing="48px" alignItems="center" justifyContent="center">
        <Box className={style('logo')}>
          <img src="./tinkoffLogo.svg" alt="TINKOFFLOGO" />
        </Box>
        <div className={style('fullcard')}>
          <AuthForm />
          <div className={style('linkToRegister')}>
            <Link href="" className={style('link')}>
              <p>Я еще не зарегистрирован в системе</p>
            </Link>
          </div>
        </div>
      </HStack>
    </Box>
  );
}

export default Authentication;
