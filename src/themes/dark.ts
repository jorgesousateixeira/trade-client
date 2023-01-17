import { createTheme } from '@mui/material';

const GetCssVariable = (variable: string) => getComputedStyle(document.body).getPropertyValue(variable).trim();

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: GetCssVariable('--color-primary-dark'),
    },
    secondary: {
      main: GetCssVariable('--color-secondary-dark'),
    },
    text: {
      primary: GetCssVariable('--color-text-dark'),
      secondary: GetCssVariable('--color-text-light'),
    },
    background: {
      default: GetCssVariable('--bg-light'),
    },
  },
  typography: {
    fontFamily: '"Akshar", sans-serif',
  },
});
