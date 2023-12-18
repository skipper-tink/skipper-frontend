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

const style = classNames.bind(styles);

function LeftBar() {
  return (
    <div>
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
                name="Андрей Шелягин"
                src="https://bit.ly/broken-link"
              />
              <Text fontSize={'xs'} fontWeight={400}>
                Андрей Шелягин
              </Text>
            </Box>
            <Box w="200px">
              <Box
                bg="buttonColor"
                h="48px"
                justifyContent={'center'}
                className={style('pages')}
              >
                <Text
                  fontWeight={700}
                  justifySelf={'center'}
                  className={style('page-name-and-icon')}
                >
                  <HamburgerIcon /> Кандидаты
                </Text>
              </Box>
              <Box bg="buttonColor" h="48px" className={style('pages')}>
                <Text fontWeight={700} className={style('page-name-and-icon')}>
                  <CheckIcon /> Пул задач
                </Text>
              </Box>
              <Box bg="buttonColor" h="48px" className={style('pages')}>
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
    </div>
  );
}
export default LeftBar;
