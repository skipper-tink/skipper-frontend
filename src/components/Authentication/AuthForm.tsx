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
  Link,
  Heading,
  useBoolean,
  Box,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import styles from './style.module.css';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

function AuthForm() {
  const [show, setShow] = useBoolean();
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
    <FormControl className={style('formCard')}>
      <Heading
        as="h2"
        fontWeight="Bold"
        lineHeight="7"
        fontSize="xl"
        className={style('header')}
      >
        Авторизация
      </Heading>
      <Box className={style('card')}>
        <Box className={style('cardItem', 'login')}>
          <Text fontSize="xs">Почта</Text>
          <Input
            id="email"
            placeholder="Email"
            borderColor="gray.400"
            variant="filled"
            background="white"
            isRequired
            size="lg"
            colorScheme="whiteAlpha"
            type="email"
            _focus={{
              bg: 'white',
            }}
          />
        </Box>
        <Box className={style('cardItem', 'password')}>
          <Text fontSize="xs">Пароль</Text>
          <InputGroup size="lg">
            <Input
              id="password"
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              borderColor="gray.400"
              variant="filled"
              background="white"
              isRequired={true}
              size="lg"
              _focus={{
                bg: 'white',
              }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={setShow.toggle}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Link href="" className={style('cardItem', 'problems')}>
          <Text fontSize="xs">Проблемы со входом?</Text>
        </Link>
        <Box className={style('bottom')}>
          <Checkbox defaultChecked borderColor="borders">
            Запомнить данные
          </Checkbox>
          <IconButton
            className={style('cardItemDone')}
            isRound={true}
            size="md"
            variant="solid"
            color="black"
            aria-label="Done"
            fontSize="28px"
            bgColor="buttonColor"
            icon={loading ? <Spinner /> : <ArrowForwardIcon />}
            onClick={handleSignIn}
          />
        </Box>
      </Box>
    </FormControl>
  );
}

export default AuthForm;
