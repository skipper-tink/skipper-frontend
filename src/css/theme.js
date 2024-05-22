import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    borders: '#1D1B20',
    black: '#000',
    white: '#fff',
    gray: '#D9D9D9',
    darkGray: '#ACACAC',
    lightGray: '#F1F1F1',
    gradientGray:
      'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(221, 221, 221, 0) 100%);',
  },
  fontSizes: {
    xxs: '12px',
    xs: '14px',
    sm: '16px',
    md: '20px',
    lg: '24px',
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
    lg: '60px',
    xl: '80px',
  },
  space: {
    mdOne: '20px',
    mdTwo: '24px',
    mdThree: '28px',
  },
});

export default theme;
