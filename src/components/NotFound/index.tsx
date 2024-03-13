import { Box, Flex, IconButton, Spacer, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box bg="gray" w="55%" h="45%" p="40px" borderRadius="sm">
      <IconButton
        aria-label="Back"
        size="lg"
        variant="solid"
        color="black"
        isRound={true}
        icon={<ArrowBackIcon />}
        onClick={() => navigate('..')}
        marginBottom="38px"
      />
      <Box>
        <Flex direction="column" align="center">
          <Text fontSize="xxxl" fontWeight="700">
            404 Not Found
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
