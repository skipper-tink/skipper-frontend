import React from 'react';
import { Box, Flex, Text, Avatar, IconButton } from '@chakra-ui/react';
import styles from '../style.module.css';
import classNames from 'classnames/bind';
import { AddIcon } from '@chakra-ui/icons';
import { FaRegBookmark } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const style = classNames.bind(styles);

function PersonalPart() {
  return (
    <Box className={style('profile-card')}>
      <Flex className={style('profile-card__content')} justify="space-between">
        <Flex className={style('profile-card__personal')}>
          <Avatar
            size="xl"
            border="5px #d9d9d9 solid"
            name={'Иванов Иван Иванович'}
            src="https://bit.ly/broken-link"
          />
          <Flex
            className={style('profile-card__personal-info')}
            direction="column"
          >
            <Box>
              <Text
                className={style('profile-card__personal-info-name')}
                fontSize="md"
              >
                {'Иванов Иван Иванович'}
              </Text>
              <Text
                className={style('profile-card__personal-info-spec')}
                fontSize="xxs"
              >
                {'Frontend, middle'}
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Flex
          maxW="220px"
          w="100%"
          gap="20px"
          className={style('profile-card__stats')}
          color="black"
        >
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
        <Flex direction="column" justify="space-between">
          <IconButton
            aria-label="Some button"
            size="s"
            variant="unstyled"
            color="black"
            isRound={true}
            alignSelf="center"
            icon={<IoMdClose size="24px" />}
            onClick={() => console.log('123')}
          />
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
                boxSize="20px"
              />
            }
            onClick={() => console.log('123')}
          />
          <IconButton
            aria-label="Some button"
            size="m"
            variant="unstyled"
            color="black"
            isRound={true}
            alignSelf="center"
            icon={<FaRegBookmark />}
            onClick={() => console.log('123')}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
export default PersonalPart;
