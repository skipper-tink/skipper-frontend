import React from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Checkbox,
  IconButton,
  Spinner,
  FormControl,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import styles from './style.module.css';

function AuthForm() {
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
    <FormControl className={styles.formCard}>
      <h1 className={styles.header}>Авторизация</h1>
      <div className={styles.card}>
        <div className={[styles.cardItem, styles.login].join(' ')}>
          <p>Почта</p>
          <Input
            id="email"
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
              id="password"
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
          <p className={styles.link}>Проблемы со входом?</p>
        </a>
        <div className={styles.bottom}>
          <Checkbox defaultChecked borderColor="#1D1B20">
            Запомнить данные
          </Checkbox>
          <IconButton
            className={styles.cardItemDone}
            isRound={true}
            size="md"
            variant="solid"
            color="#000"
            aria-label="Done"
            fontSize="28px"
            bgColor="#ACACAC"
            icon={loading ? <Spinner /> : <ArrowForwardIcon />}
            onClick={handleSignIn}
          />
        </div>
      </div>
    </FormControl>
  );
}

export default AuthForm;
