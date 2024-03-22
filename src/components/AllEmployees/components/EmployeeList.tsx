import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import EmployeeCard from './EmployeeCard';
import { Employee } from '../../../type/dataType';
import { BsThreeDots } from 'react-icons/bs';
import styles from '../style.module.css';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

interface EmployeeListProps {
  employees: Employee[];
}

function EmployeeList({ employees }: EmployeeListProps) {
  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      className={style('employee-list')}
      w="1000px"
    >
      <div className={style('employee-list__content')}>
        {employees.map((employee: Employee, index: number) => (
          <EmployeeCard key={index} employee={employee} />
        ))}
      </div>
      <div className={style('employee-list__button')}>
        <IconButton
          aria-label="Some button"
          size="s"
          ml="4px"
          variant="solid"
          color="black"
          backgroundColor="#acacac"
          p="4px"
          isRound={true}
          alignSelf={'flex-end'}
          icon={<BsThreeDots className="employee-list__button-icon" />}
          onClick={() => console.log('123')}
        />
      </div>
    </Flex>
  );
}
export default EmployeeList;