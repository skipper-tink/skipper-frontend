import React from 'react';
import { Box, Flex, Avatar, Text } from '@chakra-ui/react';
import { Employee } from '../../../type/dataType';
import styles from '../style.module.css';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

interface EmployeeCardProps {
  employee: Employee;
}

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div>
      <Box className={style('employee-card')}>
        <Flex
          className={style('employee-card__content')}
          justify="space-between"
        >
          <Flex className={style('employee-card__content')}>
            <Avatar
              size="xl"
              name={employee.name}
              src="https://bit.ly/broken-link"
            />
            <Flex
              className={style('employee-card__personal-info')}
              direction="column"
            >
              <Text
                className={style('employee-card__personal-info-name')}
                fontSize="14px"
              >
                {employee.name}
              </Text>
              <Text
                className={style('employee-card__personal-info-spec')}
                fontSize="12px"
              >
                {employee.spec}
              </Text>
              <Text
                className={style('employee-card__personal-info-grade')}
                fontSize="12px"
              >
                {employee.grade}
              </Text>
            </Flex>
          </Flex>
          <Box maxW="210px" maxH="90px" fontSize="12px" flexWrap="wrap">
            {employee.stack.map((tech: string, index: number) => (
              <Box
                className={style('employee-card__stack-item')}
                display="inline-block"
                textAlign="center"
                key={index}
              >
                <Text>{tech}</Text>
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
export default EmployeeCard;
