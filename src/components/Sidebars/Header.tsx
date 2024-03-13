import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

function Header() {
  return (
    <div>
      <Box
        w="100%"
        h="52px"
        position="absolute"
        top="0"
        left="0"
        paddingRight="mdTwo"
        paddingTop="mdThree"
        bg="buttonColor"
      >
        <Flex justifyContent="flex-end">
          <IconButton
            aria-label="Notification"
            size="lg"
            variant="solid"
            color="black"
            backgroundColor="gray"
            isRound={true}
            alignSelf={'flex-end'}
            icon={<WarningIcon boxSize={'5'} />}
            onClick={() => console.log('123')}
          />
        </Flex>
      </Box>
    </div>
  );
}
export default Header;
