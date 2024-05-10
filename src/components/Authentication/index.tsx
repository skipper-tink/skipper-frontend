import styles from './style.module.css';
import classNames from 'classnames/bind';
import { Box, HStack, Link } from '@chakra-ui/react';
import AuthForm from './AuthForm';
import React, { useState } from 'react';
import axios from 'axios';
import { Creds } from '../../type/dataType';
import { useNavigate } from 'react-router-dom';

const style = classNames.bind(styles);

function Authentication() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [creds, setCreds] = useState<Creds>({
    login: '',
    password: '',
  });

  const handleChangedCreds = (creds: Creds) => {
    setCreds(creds);
  };

  const handleAuthentication = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/authentication', {
        login: creds.login,
        password: creds.password,
      });

      if (response.status === 200) navigate('/employees');
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={style('authentication')}>
      <Box w="96vw" h="764px">
        <HStack spacing="48px" alignItems="center" justifyContent="center">
          <Box className={style('logo')}>
            <img src="./tinkoffLogo.svg" alt="TINKOFFLOGO" />
          </Box>
          <div className={style('fullcard')}>
            <AuthForm
              creds={creds}
              onCredsChanged={handleChangedCreds}
              onAuth={handleAuthentication}
              load={loading}
            />
            <div className={style('linkToRegister')}>
              <Link href="/signup" className={style('link')}>
                <p>Я еще не зарегистрирован в системе</p>
              </Link>
            </div>
          </div>
        </HStack>
      </Box>
    </div>
  );
}

export default Authentication;
