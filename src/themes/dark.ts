import { createTheme } from '@mui/material';

const GetCssVariable = (variable: string) => getComputedStyle(document.body).getPropertyValue(variable).trim();

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: GetCssVariable('--btn-primary-bg-dark'),
      dark: GetCssVariable('--btn-primary-bg-hover'),
    },
    secondary: {
      light: GetCssVariable('--btn-secondary-bg-hover'),
      main: GetCssVariable('--btn-secondary-bg'),
    },
    background: {
      default: GetCssVariable('--private-bg-color-dark')
    },
    text: {
      primary: GetCssVariable('--menu-primary-text'),
      secondary: GetCssVariable('--menu-primary-text-popup'),
    },
    action: {
      hoverOpacity: 0.15,
      disabledBackground: GetCssVariable('--btn-disabled-bg'),
      disabled: GetCssVariable('--color-white'),
    },
  },
  typography: {
    fontFamily: '"Akshar", sans-serif',
  },
});
