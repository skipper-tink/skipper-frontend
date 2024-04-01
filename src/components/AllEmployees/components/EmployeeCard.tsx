import React from 'react';
import { Box, Flex, Avatar, Text, IconButton } from '@chakra-ui/react';
import { Employee } from '../../../type/dataType';
import styles from '../style.module.css';
import classNames from 'classnames/bind';
import { AddIcon, SmallAddIcon } from '@chakra-ui/icons';

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
          <Flex className={style('employee-card__personal')}>
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
                fontSize="xs"
              >
                {employee.name}
              </Text>
              <Text
                className={style('employee-card__personal-info-spec')}
                fontSize="xxs"
              >
                {employee.spec}
              </Text>
              <Text
                className={style('employee-card__personal-info-grade')}
                fontSize="xxs"
              >
                {employee.grade}
              </Text>
            </Flex>
          </Flex>
          <Box
            w="16vw"
            maxW="250px"
            maxH="100px"
            overflowY="scroll"
            fontSize="xxs"
            flexWrap="wrap"
            className={style('employee-card__stack')}
          >
            {employee.stack.map((tech: string, index: number) => (
              <Box
                className={style('employee-card__stack-item')}
                display="inline-block"
                color="lightGray"
                border="1px solid lightGray"
                textAlign="center"
                key={tech}
              >
                <Text>{tech}</Text>
              </Box>
            ))}
          </Box>
          <Flex
            maxW="220px"
            w="100%"
            gap="20px"
            className={style('employee-card__stats')}
            color="black"
          >
            <Box
              maxW="100px"
              maxH="100px"
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="white"
              borderRadius="16px"
            >
              {employee.rating}
            </Box>
            <Box
              maxW="100px"
              maxH="100px"
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="white"
              borderRadius="16px"
              border="4px solid gray"
            >
              {employee.workHours + 'ч.'}
            </Box>
          </Flex>
          <IconButton
            aria-label="Some button"
            size="s"
            variant="unstyled"
            color="black"
            isRound={true}
            alignSelf={'center'}
            icon={
              <AddIcon
                background="white"
                padding="4px"
                borderRadius="50%"
                boxSize="24px"
              />
            }
            onClick={() => console.log('123')}
          />
        </Flex>
      </Box>
    </div>
  );
}
export default EmployeeCard;
