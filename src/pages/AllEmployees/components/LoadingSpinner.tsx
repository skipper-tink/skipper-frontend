import React from 'react';
import { Flex, Text, Spinner } from '@chakra-ui/react';

function LoadingSpinner() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      textAlign="center"
      maxW="420px"
    >
      <Spinner size="lg" />
      <Text fontSize="lg" fontWeight="700">
        В поисках идеального кандидата!
      </Text>
      <Text>
        Постараемся подобрать самого полезного сотрудника. Найдите себе
        достойного коллегу.
      </Text>
    </Flex>
  );
}
export default LoadingSpinner;
