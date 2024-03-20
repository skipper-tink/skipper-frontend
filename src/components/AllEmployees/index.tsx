import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import EmployeeList from './components/EmployeeList';
import { Employee } from '../../type/dataType';
import styles from './style.module.css';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

function AllEmpoyees() {
  const Employees: Employee[] = [
    {
      name: 'Igor Silayev',
      spec: 'Frontend',
      grade: 'Middle',
      stack: ['TS', 'React', 'SCSS', 'SASS', 'Next.js'],
      rating: '4.7',
      workHours: 7,
    },
    {
      name: 'Andrey Kukushkin',
      spec: 'BackEnd',
      grade: 'Junior',
      stack: ['TS', 'React', 'Java', 'Golang', 'Next.js'],
      rating: '4.2',
      workHours: 9,
    },
  ];
  return (
    <div className={style('all-employees')}>
      <Box
        className={style('all-employees__content')}
        maxW="1000px"
        w="100%"
        maxH="760px"
        h="100%"
        background="#D9D9D9"
      >
        <Text>Filters</Text>
        <Flex align="center">
          <EmployeeList employees={Employees} />
        </Flex>
      </Box>
    </div>
  );
}

export default AllEmpoyees;
