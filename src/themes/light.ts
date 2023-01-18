import { createTheme } from '@mui/material';

const GetCssVariable = (variable: string) => getComputedStyle(document.body).getPropertyValue(variable).trim();

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: GetCssVariable('--lt-color-primary'),
    },
    secondary: {
      main: GetCssVariable('--lt-color-secondary'),
    },
    text: {
      primary: GetCssVariable('--lt-color-text-primary'),
      secondary: GetCssVariable('--lt-color-text-secondary'),
    },
    background: {
      default: GetCssVariable('--color-bg-dark'),
    },
  },
  typography: {
    fontFamily: '"Akshar", sans-serif',
  },
});
