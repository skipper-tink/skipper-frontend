import '../../css/Authentication.css';
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
    <div className="Authentication">
      <div className="Authentication__logo">
        <img
          src="./tinkoffLogo.svg"
          alt="TINKOFFLOGO"
          className="Authentication__logo-img"
        />
      </div>
      <div className="Authentication__fullcard">
        <h1 className="Authentication__header">Авторизация</h1>
        <div className="Authentication__card">
          <div className="Authentication__card-item login">
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
          <div className="Authentication__card-item password">
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
          <a href="" className="Authentication__card-item problems">
            <p className="Authentication__card-item-problems">
              Проблемы со входом?
            </p>
          </a>
          <div className="Authentication__card-item">
            <Checkbox
              className="Authentication__card-item-remember"
              defaultChecked
              borderColor="#1D1B20"
            >
              Запомнить данные
            </Checkbox>
          </div>
          <div className="Authentication__bottom">
            {loading && <Spinner />}
            <IconButton
              className="Authentication__card-item-done"
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
      </div>
    </div>
  );
}

export default Authentication;
