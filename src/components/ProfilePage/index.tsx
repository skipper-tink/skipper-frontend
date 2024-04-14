import React from 'react';
import { Box, Flex, Text, Avatar, IconButton } from '@chakra-ui/react';
import styles from './style.module.css';
import classNames from 'classnames/bind';
import { AddIcon } from '@chakra-ui/icons';
import { FaRegBookmark } from 'react-icons/fa';

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
      >
        <div className="profile__shortinfo">
          <Flex justify="space-between" className={style('profile__personal')}>
            <Avatar
              size="xl"
              name={'Иванов Иван'}
              src="https://bit.ly/broken-link"
            />
            <Flex
              className={style('employee-card__personal-info')}
              direction="column"
            >
              <Text
                className={style('employee-card__personal-info-name')}
                fontSize="md"
                fontWeight="500"
              >
                {'Иванов Иван Иванович'}
              </Text>
              <Text
                className={style('employee-card__personal-info-spec')}
                fontSize="md"
              >
                {'Frontend, middle'}
              </Text>
            </Flex>
            <Flex
              maxW="220px"
              w="100%"
              gap="20px"
              className={style('employee-card__stats')}
              color="black"
            >
              <Box
                maxW="100px"
                maxH="100px"
                w="100%"
                display="flex"
                className={style('profile__hours')}
                justifyContent="center"
                alignItems="center"
                borderRadius="16px"
              >
                {'4.5'}
              </Box>
              <Box
                maxW="100px"
                maxH="100px"
                w="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor="white"
                borderRadius="16px"
                border="4px solid gray"
              >
                {'5' + 'ч.'}
              </Box>
            </Flex>
            <Flex direction="column" alignSelf="center" gap="40px">
              <IconButton
                aria-label="Some button"
                size="s"
                variant="unstyled"
                color="black"
                isRound={true}
                alignSelf="center"
                icon={
                  <AddIcon
                    background="white"
                    padding="4px"
                    borderRadius="50%"
                    boxSize="24px"
                  />
                }
                onClick={() => console.log('123')}
              />
              <IconButton
                aria-label="Some button"
                size="s"
                variant="unstyled"
                color="black"
                isRound={true}
                alignSelf="center"
                icon={<FaRegBookmark />}
                onClick={() => console.log('123')}
              />
            </Flex>
          </Flex>
        </div>
      </Box>
    </div>
  );
}

export default ProfilePage;
