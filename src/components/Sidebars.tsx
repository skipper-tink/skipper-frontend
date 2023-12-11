import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, WarningIcon } from '@chakra-ui/icons';

function Sidebars() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box
        w="100%"
        h="68px"
        position="absolute"
        top="0"
        left="0"
        paddingRight="5"
        paddingLeft="5"
        paddingTop="2"
        bg="buttonColor"
      >
        <Flex justifyContent="space-between">
          <IconButton
            aria-label="SideBar"
            size="lg"
            variant="solid"
            color="black"
            type="submit"
            isRound={true}
            icon={<HamburgerIcon />}
            onClick={onOpen}
            marginBottom="38px"
          />
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
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
export default Sidebars;
