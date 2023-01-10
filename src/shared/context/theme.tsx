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
      fontFamily: '"Rubik", sans-serif',
      button: {
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: '1em',
        textTransform: 'none',
      },
      body1: {
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '1.1em 1.5em',
            placeSelf: 'center',
            boxShadow: 'none',
            ':hover': {
              boxShadow: 'none',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontWeight: 400,
            color: GetCssVariable('--input-primary-text'),
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            fontWeight: 400,
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            ':hover': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
