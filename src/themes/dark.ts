import { createTheme } from '@mui/material';

const GetCssVariable = (variable: string) => getComputedStyle(document.body).getPropertyValue(variable).trim();

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: GetCssVariable('--dt-color-primary'),
    },
    secondary: {
      main: GetCssVariable('--dt-color-secondary'),
    },
    text: {
      primary: GetCssVariable('--dt-color-text-primary'),
      secondary: GetCssVariable('--dt-color-text-secondary'),
    },
    background: {
      default: GetCssVariable('--color-bg-light'),
    },
  },
  typography: {
    fontFamily: '"Akshar", sans-serif',
  },
});
