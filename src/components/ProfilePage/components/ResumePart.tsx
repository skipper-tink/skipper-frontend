import React from 'react';
import {
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from '@chakra-ui/react';
import styles from '../style.module.css';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

function ResumePart() {
  return (
    <Flex justifyContent="space-between" gap="10px">
      <Text
        className={style('profile-card__personal-info-name')}
        fontSize="md"
        maxW="450px"
        h="25vh"
        display="flex"
        alignItems="center"
        border="5px var(--chakra-colors-gray) solid"
        borderRadius="20px"
        p="3"
      >
        {
          'Некоторая информация о сотруднике. Что успел попробовать, какие сильные стороны'
        }
      </Text>
      <Tabs maxW="450px" w="100%" isFitted variant="unstyled">
        <TabList borderBottom="2px var(--chakra-colors-gray) solid">
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
          mt="-2.5px"
          height="2px"
          bg="darkGray"
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
  );
}
export default ResumePart;
