import { NavigationModulesEnum } from '../../../models/clientOnly/navigationModulesEnum';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../../shared/context/app.context';
import { Typography, useTheme } from '@mui/material';

export function PrivateHome() {
  const [AppValue, setAppValue] = useContext(AppContext);
  AppValue.activeComponent = NavigationModulesEnum.PrivateHome;
  useEffect(() => {
    setAppValue({ ...AppValue });
  }, []);

  const theme = useTheme();

  return (
    <Typography variant="h4" component="h1" color="text.primary">
      Home
    </Typography>
  );
}
