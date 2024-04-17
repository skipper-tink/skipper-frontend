import styles from './style.module.css';
import classNames from 'classnames/bind';
import { Box, HStack, Link, Text, Image, Flex, Input } from '@chakra-ui/react';
import React from 'react';

const style = classNames.bind(styles);

function Signup() {
  return (
    <div className={style('signup')}>
      <Box w="96vw" h="764px">
        <HStack spacing="48px" alignItems="center" justifyContent="center">
          <Box className={style('signup__leftside')}>
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
            <img
              className={style('signup__logoTink')}
              src="./tinkoffLogo.svg"
              alt="TINKOFFLOGO"
            />
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
                Контактные данные:
              </Text>
              <Flex
                alignItems="center"
                w="100%"
                maxW="300px"
                justifyContent="space-between"
              >
                <Text fontWeight="700">Телефон:</Text>
                <Input maxW="222px" borderRadius="6px" borderColor="gray" />
              </Flex>
              <Flex
                alignItems="center"
                w="100%"
                maxW="300px"
                justifyContent="space-between"
              >
                <Text fontWeight="700">Почта:</Text>
                <Input maxW="222px" borderRadius="6px" borderColor="gray" />
              </Flex>
              <Flex
                alignItems="center"
                w="100%"
                maxW="300px"
                justifyContent="space-between"
              >
                <Text fontWeight="700">Telegram:</Text>
                <Input maxW="222px" borderRadius="6px" borderColor="gray" />
              </Flex>
              <Flex
                alignItems="center"
                w="100%"
                maxW="300px"
                justifyContent="space-between"
              >
                <Text fontWeight="700">Git:</Text>
                <Input maxW="222px" borderRadius="6px" borderColor="gray" />
              </Flex>
            </Box>
          </Box>
          <div className={style('signup__fullcard')}>
            <div className={style('signup__linkToRegister')}>
              <Link href="" className={style('signup__link')}>
                <p>Я еще не зарегистрирован в системе</p>
              </Link>
            </div>
          </div>
        </HStack>
      </Box>
    </div>
  );
}

export default Signup;
