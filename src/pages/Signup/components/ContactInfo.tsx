import React from 'react';
import { Flex, Box, Text, Input } from '@chakra-ui/react';
import styles from '../style.module.css';
import classNames from 'classnames/bind';
import { Contacts } from '../../../type/dataType';
import validator from 'validator';

const style = classNames.bind(styles);

interface ContactInfoProps {
  contacts: Contacts;
  onContactsChanged: (creds: Contacts) => void;
}

function ContactInfo({ contacts, onContactsChanged }: ContactInfoProps) {
  const [fullname, setFullname] = React.useState(contacts.fullname);
  const [mail, setMail] = React.useState(contacts.mail);
  const [telegram, setTelegram] = React.useState(contacts.telegram);
  const [git, setGit] = React.useState(contacts.git);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(event.target.value);
    onContactsChanged({ ...contacts, fullname: event.target.value });
  };

  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
    onContactsChanged({ ...contacts, mail: event.target.value });
  };

  const handleTelegramChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelegram(event.target.value);
    onContactsChanged({ ...contacts, telegram: event.target.value });
  };

  const handleGitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGit(event.target.value);
    onContactsChanged({ ...contacts, git: event.target.value });
  };
  return (
    <Box
      className={style('signup__box')}
      zIndex="1"
      w="100%"
      maxH="480px"
      h="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="20px"
    >
      <Text className={style('signup__header')}>Контактные данные:</Text>
      <Flex
        alignItems="center"
        w="100%"
        maxW="300px"
        justifyContent="space-between"
      >
        <Text fontWeight="700">ФИО:</Text>
        <Input
          value={fullname}
          onChange={handleNameChange}
          maxW="222px"
          borderRadius="6px"
          borderColor="gray"
        />
      </Flex>
      <Flex
        alignItems="center"
        w="100%"
        maxW="300px"
        justifyContent="space-between"
      >
        <Text fontWeight="700">Почта:</Text>
        <Input
          value={mail}
          isInvalid={!validator.isEmail(mail)}
          onChange={handleMailChange}
          maxW="222px"
          borderRadius="6px"
          borderColor="gray"
        />
      </Flex>
      <Flex
        alignItems="center"
        w="100%"
        maxW="300px"
        justifyContent="space-between"
      >
        <Text fontWeight="700">Telegram:</Text>
        <Input
          value={telegram}
          onChange={handleTelegramChange}
          maxW="222px"
          borderRadius="6px"
          borderColor="gray"
        />
      </Flex>
      <Flex
        alignItems="center"
        w="100%"
        maxW="300px"
        justifyContent="space-between"
      >
        <Text fontWeight="700">Git:</Text>
        <Input
          value={git}
          onChange={handleGitChange}
          maxW="222px"
          borderRadius="6px"
          borderColor="gray"
        />
      </Flex>
    </Box>
  );
}
export default ContactInfo;
