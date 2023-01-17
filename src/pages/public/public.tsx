import { Outlet } from 'react-router-dom';

import { Fade } from '~/animations/fade';

import pubStyles from './public.module.css';
import background from '~/assets/images/public_background.svg';
import logo from '~/assets/images/logo.svg';
import PublicToolbar from './public-toolbar/public-toolbar';
import { useTheme } from '@mui/material';

export function PublicContainer() {
  const theme = useTheme();

  return (
    <Fade className={pubStyles.publicOuter} style={{ background: theme.palette.background.default }}>
      <div className={pubStyles.publicMain} style={{ backgroundImage: `url(${background})` }}>
        <div className={pubStyles.publicInfoContainer}>
          <div className={pubStyles.publicHeader}>
            <img src={logo} />
            <div>
              <span>TRADE</span>&thinsp;<span>ADMINISTRATION</span>
            </div>
          </div>

          <div className={pubStyles.publicInfo}>
            <Outlet />
          </div>
        </div>
      </div>
      <PublicToolbar />
    </Fade>
  );
}
