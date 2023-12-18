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
  FormErrorMessage,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import styles from './style.module.css';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';

const style = classNames.bind(styles);

function AuthForm() {
  const [show, setShow] = useBoolean();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
        navigate('..');
      }, 3000);
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <FormControl className={style('formCard')} isInvalid={!!errors.email}>
          <Box className={style('cardItem', 'login')}>
            <Text fontSize="xs">Почта</Text>
            <Input
              id="email"
              placeholder="Email"
              borderColor="gray.400"
              variant="filled"
              background="white"
              size="md"
              colorScheme="whiteAlpha"
              _focus={{
                bg: 'white',
              }}
              {...register('email', {
                required: 'This is required',
                minLength: {
                  value: 6,
                  message: 'Введите почту вида: exp@gmail.com',
                },
              })}
            />
            <FormErrorMessage>
              <Text ml="6">{errors.email && errors.email.message + ''}</Text>
            </FormErrorMessage>
          </Box>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <Box className={style('cardItem', 'password')}>
            <Text fontSize="xs">Пароль</Text>
            <InputGroup size="sm">
              <Input
                id="password"
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                borderColor="gray.400"
                variant="filled"
                background="white"
                size="md"
                _focus={{
                  bg: 'white',
                }}
                {...register('password', {
                  required: 'Обязательное поле',
                  minLength: {
                    value: 8,
                    message: 'В пароле минимум 8 символов',
                  },
                })}
              />
              <InputRightElement width="4rem" h="2.5rem">
                <Button size="xs" onClick={setShow.toggle}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              <Text ml="6">
                {errors.password && errors.password.message + ''}
              </Text>
            </FormErrorMessage>
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
            size="md"
            variant="solid"
            color="black"
            aria-label="Done"
            fontSize="lg"
            bgColor="buttonColor"
            icon={isSubmitting ? <Spinner /> : <ArrowForwardIcon />}
            type="submit"
          />
        </Box>
      </Box>
    </form>
  );
}

export default AuthForm;
