import React from 'react';
import { Box, Avatar, Flex, IconButton, Text } from '@chakra-ui/react';
import {
  SettingsIcon,
  HamburgerIcon,
  CheckIcon,
  EditIcon,
} from '@chakra-ui/icons';
import styles from './style.module.css';
import classNames from 'classnames/bind';
import { useUserStore } from '../../stores/user.store';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const style = classNames.bind(styles);

function LeftBar() {
  const location = useLocation();
  const userStore = useUserStore();
  return (
    <Flex
      w="20%"
      h="85%"
      position="absolute"
      left="0"
      top="-10px"
      bg="gray"
      p={'md'}
      paddingLeft={0}
      paddingTop={'90px'}
      className={style('sidebar')}
      flexDirection={'column'}
      justify={'space-between'}
    >
      <Box>
        <Flex flexDirection={'column'}>
          <Box
            alignSelf={'center'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            marginBottom="80px"
          >
            <Avatar
              size="xl"
              name={userStore.name}
              src="https://bit.ly/broken-link"
            />
            <Text fontSize={'xs'} fontWeight={400}>
              {userStore.name}
            </Text>
          </Box>
          <Box w="200px">
            <Link to={`/employees`}>
              <Box
                h="48px"
                justifyContent={'center'}
                className={style(
                  'pages',
                  location.pathname.includes('employees') ? 'selected' : '',
                )}
              >
                <Text
                  fontWeight={700}
                  justifySelf={'center'}
                  className={style('page-name-and-icon')}
                >
                  <HamburgerIcon /> Кандидаты
                </Text>
              </Box>
            </Link>
            <Box
              h="48px"
              className={style(
                'pages',
                location.pathname.includes('pooloftasks') ? 'selected' : '',
              )}
            >
              <Text fontWeight={700} className={style('page-name-and-icon')}>
                <CheckIcon /> Пул задач
              </Text>
            </Box>
            <Box h="48px" className={style('pages')}>
              <Text fontWeight={700} className={style('page-name-and-icon')}>
                <EditIcon />
                Аналитика
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box alignSelf={'flex-end'}>
        <IconButton aria-label="Settings" icon={<SettingsIcon />} />
      </Box>
    </Flex>
  );
}
export default LeftBar;
