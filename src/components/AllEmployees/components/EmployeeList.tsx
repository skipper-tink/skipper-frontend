import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import EmployeeCard from './EmployeeCard';
import { Employee } from '../../../type/dataType';
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
          size="lg"
          variant="solid"
          color="black"
          backgroundColor="gray"
          isRound={true}
          alignSelf={'flex-end'}
          icon={<SmallAddIcon boxSize={'12'} />}
          onClick={() => console.log('123')}
        />
      </div>
    </Flex>
  );
}
export default EmployeeList;
