import React from 'react';
import { Flex, Box, Avatar, Textarea } from '@chakra-ui/react';

function ReviewPart() {
  return (
    <Flex direction="column" gap="20px">
      <Box display="flex" w="100%" gap="10px" alignItems="center">
        <Avatar
          size="xl"
          border="5px var(--chakra-colors-gray) solid"
          name={'Иванов Иван Иванович'}
          src="https://bit.ly/broken-link"
        />
        <Textarea
          variant="outline"
          borderRadius="6px"
          borderColor="gray"
          placeholder="Оставьте свой отзыв на сотрудника здесь!"
        />
      </Box>
      {/* Позже здесь будут уже написанные отзывы. При подключении бэка - подправить. Пока просто как заглушка */}
      <Flex justifyContent="space-between" flexWrap="wrap" gap="10px">
        {[...Array(5)].map((item) => (
          <Box
            key={item}
            display="flex"
            w="28vw"
            maxW="410px"
            gap="10px"
            alignItems="center"
          >
            <Avatar
              size="xl"
              border="5px var(--chakra-colors-gray) solid"
              name={'Иванов Иван Иванович'}
              src="https://bit.ly/broken-link"
            />
            <Textarea
              variant="outline"
              borderRadius="6px"
              borderColor="gray"
              placeholder="Оставьте свой отзыв на сотрудника здесь!"
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
export default ReviewPart;
