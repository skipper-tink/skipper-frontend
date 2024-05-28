import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

function Header() {
  return (
    <div>
      <Box
        w="100%"
        position="absolute"
        top="0"
        left="0"
        padding="8px 20px"
        bg="darkGray"
      >
        <Flex justifyContent="flex-end">
          <IconButton
            aria-label="Notification"
            width="48px"
            height="48px"
            borderRadius="8px"
            color="black"
            backgroundColor="gray"
            isRound={true}
            alignSelf={'flex-end'}
            icon={<WarningIcon />}
            onClick={() => console.log('123')}
          />
        </Flex>
      </Box>
    </div>
  );
}
export default Header;
