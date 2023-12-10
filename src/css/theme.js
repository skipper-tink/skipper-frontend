import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    borders: '#1D1B20',
    black: '#000',
    white: '#fff',
    gray: '#D9D9D9',
    buttonColor: '#ACACAC',
  },
  fontSizes: {
    xs: '14px',
    sm: '18px',
    md: '20px',
    lg: '28px',
    xl: '32px',
    xxl: '48px',
    xxxl: '60px',
  },
  radii: {
    sm: '20px',
    md: '28px',
    lg: '36px',
    xl: '44px',
  },
  sizes: {
    md: '48px',
  },
});

export default theme;
