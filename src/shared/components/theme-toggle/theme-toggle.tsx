import { useContext } from 'react';
import { Switch, SxProps, styled } from '@mui/material';
import { ThemeContext } from '~/ThemeProvider';

interface PropsType {
  sx?: SxProps;
}

const ThemeToggle = (props: PropsType) => {
  const { sx } = props;
  const setThemeName = useContext(ThemeContext);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.checked ? setThemeName('darkTheme') : setThemeName('lightTheme');
  };

  return <Switch sx={{ m: 1, ...sx }} onChange={(e) => handleToggle(e)} />;
};

export default ThemeToggle;
