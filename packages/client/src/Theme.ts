import { createGlobalStyle } from 'styled-components';

import { ThemeType } from './types';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 300;
  }

  label {
    user-select: none;
  }
`;

export const theme: ThemeType = {
  bgBlue: '#0d2a94',
  lightGrey: '#e3e3e3',
  light: '#fff',
  red: {
    light: '#fafafa',
    main: '#fa5271',
  },
  blue: {
    main: '#0d2a94',
  },
  orange: 'orange',
  modalBg: 'rgba(0, 0, 0, 0.2)',
};
