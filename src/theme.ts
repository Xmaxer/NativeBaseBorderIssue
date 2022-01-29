import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    error: {
      50: '#ffe4e4',
      100: '#fcb8b8',
      200: '#f48c8c',
      300: '#ee5e5e',
      400: '#e73131',
      500: '#ce1818',
      600: '#a11011',
      700: '#73090b',
      800: '#480405',
      900: '#1f0000',
    },
    singletons: {
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  config: {
    initialColorMode: 'light',
  },
});

export type ITheme = typeof theme;
