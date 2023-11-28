import styles from './style.module.css';
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Checkbox,
  IconButton,
  Spinner,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Authentication() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const handleSignIn = async () => {
    try {
      // Заглушка
      setLoading(true);

      await new Promise<void>((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
      navigate('..');
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className={styles.Authentication}>
      <div className={styles.logo}>
        <img src="./tinkoffLogo.svg" alt="TINKOFFLOGO" />
      </div>
      <div className={styles.fullcard}>
        <h1 className={styles.header}>Авторизация</h1>
        <div className={styles.card}>
          <div className={[styles.cardItem, styles.login].join(' ')}>
            <p>Почта</p>
            <Input
              placeholder="Email"
              borderColor="gray.400"
              variant="filled"
              background="#fff"
              isRequired
              size="lg"
              colorScheme="whiteAlpha"
              type="email"
              _focus={{
                bg: 'white',
              }}
            />
          </div>
          <div className={[styles.cardItem, styles.password].join(' ')}>
            <p>Пароль</p>
            <InputGroup size="lg">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                borderColor="gray.400"
                variant="filled"
                background="#fff"
                isRequired={true}
                size="lg"
                _focus={{
                  bg: 'white',
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
          <a href="" className={[styles.cardItem, styles.problems].join(' ')}>
            <p className="link">Проблемы со входом?</p>
          </a>
          <div className={styles.cardItem}>
            <Checkbox
              className={styles.cardItemRemember}
              defaultChecked
              borderColor="#1D1B20"
            >
              Запомнить данные
            </Checkbox>
          </div>
          <div className={styles.bottom}>
            {loading && <Spinner />}
            <IconButton
              className={styles.cardItemDone}
              isRound={true}
              size="md"
              variant="solid"
              color="#000"
              aria-label="Done"
              fontSize="28px"
              bgColor="#ACACAC"
              icon={<ArrowForwardIcon />}
              onClick={handleSignIn}
            />
          </div>
        </div>
        <div className={styles.linkToRegister}>
          <a href="" className="link">
            <p>Я еще не зарегистрирован в системе</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
