import { useContext, useEffect } from 'react';

import { NavigationModulesEnum } from '~/models/clientOnly/navigationModulesEnum';
import { AppContext } from '~/shared/context/app.context';

import pvtStyles from '../private.module.css';
import { Box, useTheme } from '@mui/material';

export function PrivateHome() {
  const theme = useTheme();
  const [AppValue, setAppValue] = useContext(AppContext);
  AppValue.activeComponent = NavigationModulesEnum.PrivateHome;
  useEffect(() => {
    setAppValue({ ...AppValue });
  }, []);

  return (
    <>
      <Box className={pvtStyles.privateHeader} sx={{ p: theme.spacing(8, 6, 4) }}>
        <h1 style={{ color: theme.palette.primary.main }}>Home</h1>
      </Box>
      <Box sx={{ p: 3 }}></Box>
    </>
  );
}
