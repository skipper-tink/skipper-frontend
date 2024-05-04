import React from 'react';
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
  return (
    <Flex gap="15px" direction="column" w="100%" alignItems="center">
      <Text fontWeight="800" fontSize="24px">
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
          placeholder="Все"
          color="darkGray"
          size="sm"
        >
          <option value="option1">Frontend</option>
          <option value="option2">Backend</option>
          <option value="option3">DevOps</option>
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
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
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
      <Text fontWeight="800" fontSize="24px">
        Стек технологий:
      </Text>
      <Tabs maxW="450px" w="100%" isFitted variant="unstyled">
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
        <TabPanels>
          {listOfSpecialization.map((spec: string) => (
            <TabPanel key={spec} display="flex" flexWrap="wrap" gap="25px">
              {skills.map(
                (skill: Skill) =>
                  (spec === 'Все' && (
                    <Text key={skill.name.concat(skill.specialization)}>
                      {skill.name}
                    </Text>
                  )) ||
                  (skill.specialization === spec && (
                    <Text key={skill.name.concat(skill.specialization)}>
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
        <Text fontWeight="800" fontSize="24px">
          Свободные часы:
        </Text>
        <Input maxW="65px" borderRadius="6px" borderColor="gray" />
      </Flex>
    </Flex>
  );
}
export default ResumeInfo;
