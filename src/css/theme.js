import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    borders: '#1D1B20',
    black: '#000',
    white: '#fff',
    buttonColor: '#ACACAC',
  },
  fontSizes: {
    xs: '14px',
    md: '20px',
    xl: '24px',
  },
});

export default theme;
