import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Employee } from '../../type/dataType';
import styles from './style.module.css';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

function ProfilePage() {
  return (
    <div className={style('profile')}>
      <Box
        className={style('profile__content')}
        w="70vw"
        maxW="1000px"
        maxH="760px"
        h="100%"
        background="#D9D9D9"
      ></Box>
    </div>
  );
}

export default ProfilePage;
