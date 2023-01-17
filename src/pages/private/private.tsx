import { Outlet } from 'react-router-dom';
import PrivateNavigation from './navigation/privateNavigation';
import { Fade } from '../../animations/fade';
import { useTheme } from '@mui/material';

import pvtStyles from './private.module.css';

export function PrivateContainer() {
  const theme = useTheme();

  return (
    <Fade className={pvtStyles.privateOuter} style={{ background: theme.palette.background.default }}>
      <PrivateNavigation />
      <Outlet />
    </Fade>
  );
}
