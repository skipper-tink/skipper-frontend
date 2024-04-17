import React from 'react';
import { Flex } from '@chakra-ui/react';
import styles from './style.module.css';
import classNames from 'classnames/bind';
import PersonalPart from './components/PersonalPart';
import ResumePart from './components/ResumePart';
import ReviewPart from './components/ReviewPart';

const style = classNames.bind(styles);

function ProfilePage() {
  return (
    <Flex
      direction="column"
      className={style('profile')}
      w="70vw"
      maxW="1000px"
      maxH="760px"
      h="85vh"
      background="white"
      border="20px solid"
      borderColor="gray"
      borderRadius="20px"
      p="3"
    >
      <div className={style('profile__wrapper')}>
        <div className={style('profile__content')}>
          <PersonalPart />
          <ResumePart />
          <ReviewPart />
        </div>
      </div>
    </Flex>
  );
}

export default ProfilePage;
