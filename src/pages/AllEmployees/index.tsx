import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import EmployeeList from './components/EmployeeList';
import { Employee, Skill } from '../../type/dataType';
import styles from './style.module.css';
import classNames from 'classnames/bind';
import axios from 'axios';
import LoadingSpinner from './components/LoadingSpinner';
import ModalFilter from './components/ModalFilter';

const style = classNames.bind(styles);

function AllEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [skills, setSkills] = useState<Skill[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [grade, setGrade] = useState<string>('');
  const [freeHours, setFreeHours] = useState<number>(0);
  const [listOfSkills, setListOfSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/skills');
        setSkills(response.data);
      } catch (error) {
        console.error('Ошибка при скиллов:', error);
      }
    };
    fetchSkills();
  }, []);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/employees');
        const updatedEmployees = await Promise.all(
          response.data.map(async (employee: Employee) => {
            const employeeSkillsResponse = await axios.get(
              `http://localhost:8080/api/employee/${employee.id}/skills`,
            );
            const skills = employeeSkillsResponse.data.map(
              (el: Skill) => el.name,
            );
            return { ...employee, stack: skills };
          }),
        );
        setEmployees(updatedEmployees);
      } catch (error) {
        console.error('Ошибка при загрузке сотрудников:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  function filterEmployees(): Employee[] {
    return employees.filter((employee) => {
      const matchesGrade = grade === '' || employee.qualification === grade;
      const matchesFreeHours = employee.freeTimePerWeek >= freeHours;
      const matchesSkills = listOfSkills.every((skill) =>
        employee.stack.includes(skill.name),
      );
      return matchesGrade && matchesFreeHours && matchesSkills;
    });
  }

  const filteredEmployees = filterEmployees();

  return (
    <div className={style('all-employees')}>
      <Box
        className={style('all-employees__content')}
        w="70vw"
        maxW="1000px"
        maxH="760px"
        h="100%"
        background="gray"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex
            backgroundColor="darkGray"
            className={style('all-employees__filters')}
          >
            {' '}
          </Flex>
          <IconButton
            aria-label="filters"
            width="48px"
            height="48px"
            borderRadius="8px"
            backgroundColor="darkGray"
            icon={<SettingsIcon className="employee-list__button-icon" />}
            onClick={onOpen}
          />
          <ModalFilter
            skills={skills}
            isOpen={isOpen}
            onClose={onClose}
            grade={grade}
            setGrade={setGrade}
            freeHours={freeHours}
            setFreeHours={setFreeHours}
            listOfSkills={listOfSkills}
            setListOfSkills={setListOfSkills}
          />
        </Flex>
        <Flex align="center" justify="center">
          {loading && <LoadingSpinner />}
          {!loading && <EmployeeList employees={filteredEmployees} />}
        </Flex>
      </Box>
    </div>
  );
}

export default AllEmployees;
