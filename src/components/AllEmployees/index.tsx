import React, { useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import EmployeeList from './components/EmployeeList';
import { Employee } from '../../type/dataType';
import styles from './style.module.css';
import classNames from 'classnames/bind';
import axios from 'axios';

const style = classNames.bind(styles);

function AllEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/employees');
        setEmployees(() => {
          const updatedEmployees = response.data.map((employee: Employee) => {
            employee.name = 'Пётр Сергеев';
            employee.stack = [
              'React',
              'Angular',
              'Vue',
              'Apollo',
              'GraphQL',
              'Node',
              'Docker',
              'Git',
            ];
            employee.rating = '4.2';
            return employee;
          });
          return updatedEmployees;
        });
      } catch (error) {
        console.error('Ошибка при загрузке сотрудников:', error);
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
        <Flex align="center">
          <EmployeeList employees={employees} />
        </Flex>
      </Box>
    </div>
  );
}

export default AllEmployees;
