import { useContext } from 'react';
import { Switch, SxProps, styled, useTheme } from '@mui/material';
import { ThemeContext } from '~/ThemeProvider';

interface PropsType {
  className?: string;
  sx?: SxProps;
}

const ThemeToggle = (props: PropsType) => {
  const { sx, className } = props;
  const theme = useTheme();
  const setThemeName = useContext(ThemeContext);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.checked ? setThemeName('darkTheme') : setThemeName('lightTheme');
  };

  return (
    <Switch
      disableRipple
      className={className}
      size="small"
      sx={{ m: 1, '& .MuiSwitch-thumb': { backgroundColor: theme.palette.secondary.main }, ...sx }}
      onChange={(e) => handleToggle(e)}
    />
  );
};

export default ThemeToggle;
