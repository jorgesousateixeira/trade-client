import { createTheme, ThemeProvider } from '@mui/material';

const GetCssVariable = (variable: string) => getComputedStyle(document.body).getPropertyValue(variable).trim();

interface Props {
  children?: React.ReactNode;
}

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: GetCssVariable('--btn-primary-bg'),
        dark: GetCssVariable('--btn-primary-bg-hover'),
      },
      secondary: {
        light: GetCssVariable('--btn-secondary-bg-hover'),
        main: GetCssVariable('--btn-secondary-bg'),
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

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
