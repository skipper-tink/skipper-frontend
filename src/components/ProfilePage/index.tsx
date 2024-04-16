import React from 'react';
import {
  Box,
  Flex,
  Text,
  Avatar,
  IconButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Textarea,
} from '@chakra-ui/react';
import styles from './style.module.css';
import classNames from 'classnames/bind';
import { AddIcon } from '@chakra-ui/icons';
import { FaRegBookmark } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

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
      border="20px #d9d9d9 solid"
      borderRadius="20px"
      p="3"
    >
      <div className={style('profile__wrapper')}>
        <div className={style('profile__content')}>
          <Box className={style('profile-card')}>
            <Flex
              className={style('profile-card__content')}
              justify="space-between"
            >
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
          <Flex justifyContent="space-between" gap="10px">
            <Text
              className={style('profile-card__personal-info-name')}
              fontSize="md"
              maxW="450px"
              h="25vh"
              display="flex"
              alignItems="center"
              border="1px #d9d9d9 solid"
              borderRadius="20px"
              p="3"
            >
              {
                'Некоторая информация о сотруднике. Что успел попробовать, какие сильные стороны'
              }
            </Text>
            <Tabs maxW="450px" w="100%" isFitted variant="unstyled">
              <TabList>
                <Tab
                  fontSize="14px"
                  _selected={{ color: 'black', fontWeight: '700' }}
                >
                  Все
                </Tab>
                <Tab
                  fontSize="14px"
                  _selected={{
                    color: 'black',
                    fontWeight: '700',
                  }}
                >
                  Backend
                </Tab>
                <Tab
                  fontSize="14px"
                  _selected={{ color: 'black', fontWeight: '700' }}
                >
                  Frontend
                </Tab>
                <Tab
                  fontSize="14px"
                  _selected={{ color: 'black', fontWeight: '700' }}
                >
                  Android
                </Tab>
                <Tab
                  fontSize="14px"
                  _selected={{ color: 'black', fontWeight: '700' }}
                >
                  IOS
                </Tab>
                <Tab
                  fontSize="14px"
                  _selected={{ color: 'black', fontWeight: '700' }}
                >
                  QA
                </Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="#acacac"
                borderRadius="1px"
              />
              {/* Поговорить с Сашей про навыки. Наполнить. */}
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
          <Flex direction="column" gap="20px">
            <Box display="flex" w="100%" gap="10px" alignItems="center">
              <Avatar
                size="xl"
                border="5px #d9d9d9 solid"
                name={'Иванов Иван Иванович'}
                src="https://bit.ly/broken-link"
              />
              <Textarea
                variant="outline"
                borderRadius="6px"
                borderColor="gray"
                placeholder="Оставьте свой отзыв на сотрудника здесь!"
              />
            </Box>
            {/* Позже здесь будут уже написанные отзывы. При подключении бэка - подправить */}
            <Flex justifyContent="space-between" flexWrap="wrap" gap="10px">
              {[...Array(5)].map((index) => (
                <Box
                  key={index}
                  display="flex"
                  w="28vw"
                  gap="10px"
                  alignItems="center"
                >
                  <Avatar
                    size="xl"
                    border="5px #d9d9d9 solid"
                    name={'Иванов Иван Иванович'}
                    src="https://bit.ly/broken-link"
                  />
                  <Textarea
                    variant="outline"
                    borderRadius="6px"
                    borderColor="gray"
                    placeholder="Оставьте свой отзыв на сотрудника здесь!"
                  />
                </Box>
              ))}
            </Flex>
          </Flex>
        </div>
      </div>
    </Flex>
  );
}

export default ProfilePage;
