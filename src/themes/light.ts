import { createTheme } from '@mui/material';

const GetCssVariable = (variable: string) => getComputedStyle(document.body).getPropertyValue(variable).trim();

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: GetCssVariable('--color-primary-light'),
    },
    secondary: {
      main: GetCssVariable('--color-secondary-light'),
    },
    text: {
      primary: GetCssVariable('--color-text-light'),
      secondary: GetCssVariable('--color-text-dark'),
    },
    background: {
      default: GetCssVariable('--bg-dark'),
    },
  },
  typography: {
    fontFamily: '"Akshar", sans-serif',
  },
});
