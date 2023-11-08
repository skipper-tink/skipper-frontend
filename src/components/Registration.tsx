import '../css/Registration.css';
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Checkbox,
  IconButton,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';

function Registration() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="registration">
      <div className="registration__logo">
        <img
          src="/tinkoffLogo.svg"
          alt="TINKOFFLOGO"
          className="registration__logo-img"
        />
      </div>
      <div className="registration__auth">
        <h1 className="registration__auth-header">Авторизация</h1>
        <div className="registration__auth-card">
          <div className="registration__auth-card-item login">
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
          <div className="registration__auth-card-item password">
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
          <a href="" className="registration__auth-card-item problems">
            <p className="registration__auth-card-item-problems">
              Проблемы со входом?
            </p>
          </a>
          <div className="registration__auth-card-item">
            <Checkbox
              className="registration__auth-card-item-remember"
              defaultChecked
              borderColor="#1D1B20"
            >
              Запомнить данные
            </Checkbox>
          </div>
          <IconButton
            className="registration__auth-card-item-done"
            isRound={true}
            size="md"
            variant="solid"
            color="#000"
            aria-label="Done"
            fontSize="28px"
            bgColor="#ACACAC"
            icon={<ArrowForwardIcon />}
          />
        </div>
      </div>
    </div>
  );
}

export default Registration;
