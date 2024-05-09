import React, { useState } from 'react';
import {
  Text,
  Flex,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Input,
} from '@chakra-ui/react';
import { Skill } from '../../../type/dataType';
import classNames from 'classnames/bind';
import styles from '../style.module.css';

const style = classNames.bind(styles);

interface ResumeInfoProps {
  skills: Skill[];
}

function ResumeInfo({ skills }: ResumeInfoProps) {
  const listOfSpecialization: string[] = [
    'Все',
    'Frontend',
    'Backend',
    'DevOps',
    'QA',
    'IOS',
  ];
  const [listOfSkills, setListOfSkills] = useState<string[]>([]);

  const toggleSkill = (skillName: string) => {
    const updatedSkills = [...listOfSkills];
    const skillIndex = updatedSkills.indexOf(skillName);
    if (skillIndex === -1) {
      updatedSkills.push(skillName);
    } else {
      updatedSkills.splice(skillIndex, 1);
    }
    setListOfSkills(updatedSkills);
  };

  return (
    <Flex gap="15px" direction="column" w="100%" alignItems="center">
      <Text className={style('signup__header')}>
        Профессиональные полномочия:
      </Text>
      <Flex
        alignItems="center"
        w="100%"
        maxW="475px"
        justifyContent="space-between"
      >
        <Text fontWeight="700">Роль:</Text>
        <Select
          maxW="320px"
          borderRadius="6px"
          borderColor="gray"
          placeholder="Никто"
          color="darkGray"
          size="sm"
        >
          <option value="option1">Работник</option>
          <option value="option2">Работодатель</option>
        </Select>
      </Flex>
      <Flex
        alignItems="center"
        w="100%"
        maxW="475px"
        justifyContent="space-between"
      >
        <Text fontWeight="700">Специализация:</Text>
        <Select
          maxW="320px"
          borderRadius="6px"
          borderColor="gray"
          placeholder="Все"
          color="darkGray"
          size="sm"
        >
          <option value="option1">Frontend</option>
          <option value="option2">Backend</option>
          <option value="option3">QA</option>
          <option value="option4">DevOps</option>
          <option value="option5">IOS</option>
        </Select>
      </Flex>
      <Flex
        alignItems="center"
        w="100%"
        maxW="475px"
        justifyContent="space-between"
      >
        <Text fontWeight="700">Грейд:</Text>
        <Select
          maxW="320px"
          borderRadius="6px"
          borderColor="gray"
          placeholder="Все"
          color="darkGray"
          size="sm"
        >
          <option value="option1">Junior</option>
          <option value="option2">Middle</option>
          <option value="option3">Senior</option>
          <option value="option3">Tech Lead</option>
        </Select>
      </Flex>
      <Text className={style('signup__header')}>Стек технологий:</Text>
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
                      cursor="pointer"
                      padding="8px"
                      key={skill.name.concat(skill.specialization)}
                      className={style(
                        listOfSkills.includes(skill.name) ? 'selected' : 'elem',
                      )}
                      onClick={() => toggleSkill(skill.name)}
                    >
                      {skill.name}
                    </Text>
                  )) ||
                  (skill.specialization === spec && (
                    <Text
                      cursor="pointer"
                      key={skill.name.concat(skill.specialization)}
                      className={style({
                        selected: listOfSkills.includes(skill.name),
                      })}
                      onClick={() => toggleSkill(skill.name)}
                    >
                      {skill.name}
                    </Text>
                  )),
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <Flex
        alignItems="center"
        w="100%"
        maxW="350px"
        justifyContent="space-between"
      >
        <Text className={style('signup__header')}>Свободные часы:</Text>
        <Input
          type="number"
          maxW="65px"
          borderRadius="6px"
          borderColor="gray"
        />
      </Flex>
    </Flex>
  );
}
export default ResumeInfo;
