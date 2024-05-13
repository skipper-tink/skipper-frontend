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
import { ArrowForwardIcon } from '@chakra-ui/icons';
import styles from './style.module.css';
import classNames from 'classnames/bind';
import { Creds } from '../../type/dataType';
import validator from 'validator';

const style = classNames.bind(styles);

interface AuthFormProps {
  creds: Creds;
  onCredsChanged: (creds: Creds) => void;
  onAuth: () => Promise<void>;
  load: boolean;
}

function AuthForm({ creds, onCredsChanged, onAuth, load }: AuthFormProps) {
  const [show, setShow] = useBoolean();
  const loading = load;
  const [login, setLogin] = React.useState(creds.login);
  const [password, setPassword] = React.useState(creds.password);

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
    onCredsChanged({ ...creds, login: event.target.value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    onCredsChanged({ ...creds, password: event.target.value });
  };
  return (
    <form>
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
        <FormControl className={style('formCard')}>
          <Box className={style('cardItem', 'login')}>
            <Text fontSize="xs">Почта</Text>
            <Input
              value={login}
              onChange={handleLoginChange}
              placeholder="Email"
              borderRadius="6px"
              borderColor="gray"
              variant="filled"
              size="md"
              _focus={{
                bg: 'white',
              }}
              isInvalid={!validator.isEmail(login)}
            />
          </Box>
        </FormControl>
        <FormControl>
          <Box className={style('cardItem', 'password')}>
            <Text fontSize="xs">Пароль</Text>
            <InputGroup size="sm">
              <Input
                value={password}
                onChange={handlePasswordChange}
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Password"
                borderRadius="6px"
                borderColor="gray"
                variant="filled"
                size="md"
                _focus={{
                  bg: 'white',
                }}
              />
              <InputRightElement width="4rem" h="2.5rem">
                <Button size="xs" onClick={setShow.toggle}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </FormControl>
        <Link href="" className={style('cardItem', 'problems')}>
          <Text fontSize="xs">Проблемы со входом?</Text>
        </Link>
        <Box className={style('bottom')}>
          <Checkbox defaultChecked borderColor="borders">
            <Text fontSize="xs">Запомнить данные </Text>
          </Checkbox>
          <IconButton
            className={style('cardItemDone')}
            isRound={true}
            onClick={onAuth}
            size="md"
            variant="solid"
            color="black"
            aria-label="Done"
            fontSize="lg"
            bgColor="darkGray"
            icon={loading ? <Spinner /> : <ArrowForwardIcon />}
          />
        </Box>
      </Box>
    </form>
  );
}

export default AuthForm;
