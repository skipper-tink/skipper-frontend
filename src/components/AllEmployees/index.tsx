import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import EmployeeList from './components/EmployeeList';
import { Employee } from '../../type/dataType';
import styles from './style.module.css';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

function AllEmpoyees() {
  const Employees: Employee[] = [
    {
      id: 0,
      name: 'Igor Silayev',
      spec: 'Frontend',
      grade: 'Middle',
      stack: ['TS', 'React', 'SCSS', 'SASS', 'Next.js'],
      rating: '4.7',
      workHours: 7,
    },
    {
      id: 1,
      name: 'Andrey Kukushkin',
      spec: 'BackEnd',
      grade: 'Junior',
      stack: ['TS', 'React', 'Java', 'Golang', 'Next.js', 'TS', 'React'],
      rating: '4.2',
      workHours: 9,
    },
  ];
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
          <EmployeeList employees={Employees} />
        </Flex>
      </Box>
    </div>
  );
}

export default AllEmpoyees;
