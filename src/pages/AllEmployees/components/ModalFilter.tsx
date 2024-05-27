import React from 'react';
import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  ModalBody,
  Tabs,
  TabPanels,
  TabPanel,
  TabIndicator,
  TabList,
  Tab,
  Text,
  IconButton,
  Select,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Skill } from '../../../type/dataType';
import styles from '../style.module.css';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

interface ModalFilterProps {
  skills: Skill[];
  isOpen: boolean;
  onClose: () => void;
  grade: string;
  setGrade: (grade: string) => void;
  freeHours: number;
  setFreeHours: (hours: number) => void;
  listOfSkills: Skill[];
  setListOfSkills: (skills: Skill[]) => void;
}

function ModalFilter({
  skills,
  isOpen,
  onClose,
  grade,
  setGrade,
  freeHours,
  setFreeHours,
  listOfSkills,
  setListOfSkills,
}: ModalFilterProps) {
  const toggleSkill = (skill: Skill) => {
    const updatedSkills = [...listOfSkills];
    const skillIndex = updatedSkills.indexOf(skill);
    if (skillIndex === -1) {
      updatedSkills.push(skill);
    } else {
      updatedSkills.splice(skillIndex, 1);
    }
    setListOfSkills(updatedSkills);
  };

  const handleHoursChange = (event: string) => {
    if (event === '') event = '0';
    if (parseInt(event, 10) > 56) event = '56';
    const hours = parseInt(event, 10);
    setFreeHours(hours);
  };

  const handleGradeChange = (event: string) => {
    setGrade(event);
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
    <Modal size="modal" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="blackAlpha.100"
        backdropFilter="blur(2px) hue-rotate(45deg)"
      />
      <ModalContent
        background="rgba(255, 255, 255, 0.7)"
        margin="auto 0"
        maxW="45vw"
        p={6}
      >
        <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="20px"
          p={0}
        >
          <Flex
            alignItems="center"
            w="100%"
            maxW="350px"
            justifyContent="space-between"
          >
            <Text fontWeight="700" fontSize="lg">
              Свободные часы:
            </Text>
            <NumberInput
              value={freeHours}
              onChange={(valueString) => handleHoursChange(valueString)}
              background="white"
              borderRadius="6px"
              maxW="65px"
              max={56}
              defaultValue={0}
              min={0}
            >
              <NumberInputField borderRadius="6px" borderColor="gray" p={2} />
              <NumberInputStepper></NumberInputStepper>
            </NumberInput>
          </Flex>
          <Flex
            alignItems="center"
            w="100%"
            maxW="475px"
            gap="16px"
            justifyContent="center"
          >
            <Text fontWeight="700" fontSize="md">
              Грейд:
            </Text>
            <Select
              value={grade}
              onChange={(e) => handleGradeChange(e.target.value)}
              maxW="320px"
              borderRadius="6px"
              borderColor="gray"
              placeholder="Все"
              background="white"
              color="darkGray"
              size="sm"
            >
              <option value="Junior">Junior</option>
              <option value="Middle">Middle</option>
              <option value="Senior">Senior</option>
              <option value="TechLead">Tech Lead</option>
            </Select>
          </Flex>
          <Flex
            alignItems="flex-end"
            gap="16px"
            justifyContent="center"
            w="100%"
          >
            <Tabs
              className={style('filter-info__tabs')}
              maxW="450px"
              w="100%"
              isFitted
              variant="unstyled"
              ml="48px"
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
              <TabIndicator
                mt="-2px"
                height="2px"
                bg="darkGray"
                borderRadius="1px"
              />
              <TabPanels
                h="22vh"
                overflowY="auto"
                fontSize="14px"
                fontWeight="500"
              >
                {listOfSpecialization.map((spec: string) => (
                  <TabPanel
                    key={spec}
                    display="flex"
                    flexWrap="wrap"
                    gap="25px"
                  >
                    {skills.map(
                      (skill: Skill) =>
                        (spec === 'Все' && (
                          <Text
                            cursor="pointer"
                            padding="8px"
                            key={skill.name.concat(skill.specialization)}
                            className={style(
                              listOfSkills.includes(skill)
                                ? 'selected'
                                : 'elem',
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
            <IconButton
              aria-label="filters"
              width="48px"
              height="48px"
              borderRadius="8px"
              backgroundColor="darkGray"
              icon={<SearchIcon className="employee-list__button-icon" />}
              onClick={onClose}
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default ModalFilter;
