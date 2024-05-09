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
import { Skill, WorkInfo } from '../../../type/dataType';
import classNames from 'classnames/bind';
import styles from '../style.module.css';

const style = classNames.bind(styles);

interface ResumeInfoProps {
  skills: Skill[];
  workInfo: WorkInfo;
  onWorkInfoChange: (handleChangedWorkInfo: WorkInfo) => void;
}

function ResumeInfo({ skills, workInfo, onWorkInfoChange }: ResumeInfoProps) {
  const [listOfSkills, setListOfSkills] = useState<Skill[]>([]);
  const [role, setRole] = useState<string>('');
  const [specialization, setSpecialization] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [freehours, setHours] = useState<number>(0);

  const toggleSkill = (skill: Skill) => {
    const updatedSkills = [...listOfSkills];
    const skillIndex = updatedSkills.indexOf(skill);
    if (skillIndex === -1) {
      updatedSkills.push(skill);
    } else {
      updatedSkills.splice(skillIndex, 1);
    }
    setListOfSkills(updatedSkills);
    onWorkInfoChange({ ...workInfo, skills: updatedSkills });
  };

  const handleRoleChange = (event: string) => {
    setRole(event);
    onWorkInfoChange({ ...workInfo, role: event });
  };

  const handleSpecChange = (event: string) => {
    setSpecialization(event);
    onWorkInfoChange({ ...workInfo, specialization: event });
  };

  const handleGradeChange = (event: string) => {
    setGrade(event);
    onWorkInfoChange({ ...workInfo, grade: event });
  };

  const handleHoursChange = (event: string) => {
    const hours = parseInt(event, 10);
    setHours(hours);
    onWorkInfoChange({ ...workInfo, freeHours: hours });
  };

  const listOfSpecialization: string[] = [
    'Все',
    'Frontend',
    'Backend',
    'DevOps',
    'QA',
    'IOS',
  ];

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
          value={role}
          onChange={(e) => handleRoleChange(e.target.value)}
          maxW="320px"
          borderRadius="6px"
          borderColor="gray"
          placeholder="Никто"
          color="darkGray"
          size="sm"
        >
          <option value="employee">Работник</option>
          <option value="employer">Работодатель</option>
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
          value={specialization}
          onChange={(e) => handleSpecChange(e.target.value)}
          maxW="320px"
          borderRadius="6px"
          borderColor="gray"
          placeholder="Все"
          color="darkGray"
          size="sm"
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="QA">QA</option>
          <option value="DevOps">DevOps</option>
          <option value="IOS">IOS</option>
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
          value={grade}
          onChange={(e) => handleGradeChange(e.target.value)}
          maxW="320px"
          borderRadius="6px"
          borderColor="gray"
          placeholder="Все"
          color="darkGray"
          size="sm"
        >
          <option value="Junior">Junior</option>
          <option value="Middle">Middle</option>
          <option value="Senior">Senior</option>
          <option value="TechLead">Tech Lead</option>
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
                        listOfSkills.includes(skill) ? 'selected' : 'elem',
                      )}
                      onClick={() => toggleSkill(skill)}
                    >
                      {skill.name}
                    </Text>
                  )) ||
                  (skill.specialization === spec && (
                    <Text
                      cursor="pointer"
                      key={skill.name.concat(skill.specialization)}
                      className={style({
                        selected: listOfSkills.includes(skill),
                      })}
                      onClick={() => toggleSkill(skill)}
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
          value={freehours}
          onChange={(e) => handleHoursChange(e.target.value)}
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
