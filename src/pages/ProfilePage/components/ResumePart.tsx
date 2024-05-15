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
import { Skill } from '../../../type/dataType';

const style = classNames.bind(styles);

interface ResumePartProps {
  description?: string;
  skills: Skill[];
}

function ResumePart({ description, skills }: ResumePartProps) {
  const listOfSpecialization: string[] = [
    'Все',
    'Frontend',
    'Backend',
    'DevOps',
    'QA',
    'IOS',
  ];

  return (
    <Flex justifyContent="space-between" gap="10px">
      <Text
        className={style('profile-card__personal-info-name')}
        fontSize="md"
        w="100%"
        maxW="450px"
        h="25vh"
        display="flex"
        alignItems="center"
        border="5px var(--chakra-colors-gray) solid"
        borderRadius="20px"
        p="3"
      >
        {description}
      </Text>
      <Tabs
        className={style('resume-info__tabs')}
        maxW="450px"
        w="100%"
        isFitted
        variant="unstyled"
      >
        <TabList borderBottom="2px var(--chakra-colors-gray) solid">
          {listOfSpecialization.map((spec: string) => (
            <Tab
              fontSize="14px"
              _selected={{ color: 'black', fontWeight: '700' }}
              key={spec}
            >
              {spec}
            </Tab>
          ))}
        </TabList>
        <TabIndicator mt="-2px" height="2px" bg="darkGray" borderRadius="1px" />
        <TabPanels h="22vh" overflowY="auto" fontSize="14px" fontWeight="500">
          {listOfSpecialization.map((spec: string) => (
            <TabPanel key={spec} display="flex" flexWrap="wrap" gap="25px">
              {skills.map(
                (skill: Skill) =>
                  (spec === 'Все' && (
                    <Text
                      padding="8px"
                      key={skill.name.concat(skill.specialization)}
                      className={style('elem')}
                    >
                      {skill.name}
                    </Text>
                  )) ||
                  (skill.specialization === spec && (
                    <Text
                      padding="8px"
                      key={skill.name.concat(skill.specialization)}
                      className={style('elem')}
                    >
                      {skill.name}
                    </Text>
                  )),
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
export default ResumePart;
