import React from 'react';
import { Flex, Box, Text, Image, Input } from '@chakra-ui/react';
import styles from '../style.module.css';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

function PersonalInfo() {
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
      <Text fontWeight="800" fontSize="24px">
        Личные данные:
      </Text>
      {/* В дальнейшем будет кнопкой по загрузке аватарок */}
      <Image src="./Profile.svg" />
      <Flex
        alignItems="center"
        w="100%"
        maxW="300px"
        justifyContent="space-between"
      >
        <Text fontWeight="700">ФИО:</Text>
        <Input maxW="222px" borderRadius="6px" borderColor="gray" />
      </Flex>
      <Flex
        alignItems="center"
        w="100%"
        maxW="300px"
        justifyContent="space-between"
      >
        <Text fontWeight="700">Пароль:</Text>
        <Input maxW="222px" borderRadius="6px" borderColor="gray" />
      </Flex>
    </Box>
  );
}
export default PersonalInfo;