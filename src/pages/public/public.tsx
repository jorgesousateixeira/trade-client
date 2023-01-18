import { Outlet } from 'react-router-dom';

import { Fade } from '~/animations/fade';

import pubStyles from './public.module.css';
import background from '~/assets/images/public_background.svg';
import logo from '~/assets/images/logo.svg';
import PublicToolbar from './public-toolbar/public-toolbar';
import { useTheme } from '@mui/material';
import ThemeToggle from '~/shared/components/theme-toggle/theme-toggle';

export function PublicContainer() {
  const theme = useTheme();

  return (
    <Fade
      className={pubStyles.publicOuter}
      style={{ background: theme.palette.background.default, color: theme.palette.text.primary }}>
      <div className={pubStyles.publicMain} style={{ backgroundImage: `url(${background})` }}>
        <div className={pubStyles.publicInfoContainer}>
          <div className={pubStyles.publicHeader}>
            <img src={logo} />
            <div>
              <span style={{ color: theme.palette.primary.main }}>TRADE</span>&thinsp;<span>ADMINISTRATION</span>
            </div>
          </div>

          <div className={pubStyles.publicInfo}>
            <Outlet />
          </div>
        </div>
      </div>
      <PublicToolbar />
      <ThemeToggle sx={{ position: 'absolute', top: 20, left: 20 }} />
    </Fade>
  );
}
