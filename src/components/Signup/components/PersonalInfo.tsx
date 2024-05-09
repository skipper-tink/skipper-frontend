import React from 'react';
import {
  Flex,
  Box,
  Text,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import styles from '../style.module.css';
import classNames from 'classnames/bind';
import { Creds } from '../../../type/dataType';

const style = classNames.bind(styles);

interface PersonalInfoProps {
  creds: Creds;
  onCredsChanged: (creds: Creds) => void;
}

function PersonalInfo({ creds, onCredsChanged }: PersonalInfoProps) {
  const [show, setShow] = React.useState(false);
  const [login, setLogin] = React.useState(creds.login);
  const [password, setPassword] = React.useState(creds.password);

  const handleClick = () => setShow(!show);

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
    onCredsChanged({ ...creds, login: event.target.value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    onCredsChanged({ ...creds, password: event.target.value });
  };
  return (
    <Box
      className={style('signup__box')}
      zIndex="1"
      w="100%"
      maxH="480px"
      h="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="20px"
    >
      <Text className={style('signup__header')}>Личные данные:</Text>
      {/* В дальнейшем будет кнопкой по загрузке аватарок */}
      <Image src="./Profile.svg" />
      <Flex
        alignItems="center"
        w="100%"
        maxW="300px"
        justifyContent="space-between"
      >
        <Text fontWeight="700">Логин:</Text>
        <Input
          value={login}
          onChange={handleLoginChange}
          maxW="222px"
          borderRadius="6px"
          borderColor="gray"
        />
      </Flex>
      <Flex
        alignItems="center"
        w="100%"
        maxW="300px"
        justifyContent="space-between"
      >
        <Text fontWeight="700">Пароль:</Text>
        <InputGroup maxW="222px" borderColor="gray">
          <Input
            value={password}
            onChange={handlePasswordChange}
            borderRadius="6px"
            type={show ? 'text' : 'password'}
          />
          <InputRightElement>
            <Icon
              cursor="pointer"
              as={show ? ViewIcon : ViewOffIcon}
              h="1.75rem"
              onClick={handleClick}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}
export default PersonalInfo;
