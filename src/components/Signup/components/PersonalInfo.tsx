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

const style = classNames.bind(styles);

function PersonalInfo() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
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
        <Input maxW="222px" borderRadius="6px" borderColor="gray" />
      </Flex>
      <Flex
        alignItems="center"
        w="100%"
        maxW="300px"
        justifyContent="space-between"
      >
        <Text fontWeight="700">Пароль:</Text>
        <InputGroup maxW="222px" borderColor="gray">
          <Input borderRadius="6px" type={show ? 'text' : 'password'} />
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
