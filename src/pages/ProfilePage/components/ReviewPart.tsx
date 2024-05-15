import React, { useState } from 'react';
import { Flex, Box, Avatar, Textarea, Button } from '@chakra-ui/react';
import { useUserStore } from '../../../stores/user.store';
import { Feedback } from '../../../type/dataType';

interface ReviewPartProps {
  feedbacks: Feedback[];
  sendFeedback: (comment: string, reviewerName: string) => void;
}

function ReviewPart({ feedbacks, sendFeedback }: ReviewPartProps) {
  const userStore = useUserStore();
  const [comment, setComment] = useState('');

  const handleSendFeedback = () => {
    sendFeedback(comment, userStore.name);
    setComment('');
  };
  return (
    <Flex direction="column" gap="20px">
      <Box
        display="flex"
        w="100%"
        gap="10px"
        alignItems="flex-end"
        flexDirection="column"
      >
        <Flex w="100%" gap="10px" alignItems="center">
          <Avatar
            size="xl"
            border="5px var(--chakra-colors-gray) solid"
            name={userStore.name}
            src="https://bit.ly/broken-link"
          />
          <Textarea
            variant="outline"
            borderRadius="6px"
            borderColor="gray"
            placeholder="Оставьте свой отзыв на сотрудника здесь!"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Flex>
        <Button
          backgroundColor="gray"
          color="white"
          variant="solid"
          borderRadius="4px"
          fontSize="14px"
          onClick={handleSendFeedback}
        >
          Отправить
        </Button>
      </Box>
      <Flex justifyContent="space-between" flexWrap="wrap" gap="10px">
        {feedbacks.map((item) => (
          <Box
            key={item.id}
            display="flex"
            w="28vw"
            maxW="410px"
            gap="10px"
            alignItems="center"
          >
            <Avatar
              size="xl"
              border="5px var(--chakra-colors-gray) solid"
              name={item.reviewerName}
              src="https://bit.ly/broken-link"
            />
            <Textarea
              variant="outline"
              borderRadius="6px"
              borderColor="gray"
              placeholder={item.comment}
              disabled
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
export default ReviewPart;
