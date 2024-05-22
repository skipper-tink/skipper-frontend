import React, { useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import EmployeeList from './components/EmployeeList';
import { Employee, Skill } from '../../type/dataType';
import styles from './style.module.css';
import classNames from 'classnames/bind';
import axios from 'axios';
import LoadingSpinner from './components/LoadingSpinner';

const style = classNames.bind(styles);

function AllEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
        <Flex
          backgroundColor="darkGray"
          className={style('all-employees__filters')}
        >
          {' '}
        </Flex>
        <Flex align="center" justify="center">
          {loading && <LoadingSpinner />}
          {!loading && <EmployeeList employees={employees} />}
        </Flex>
      </Box>
    </div>
  );
}

export default AllEmployees;
