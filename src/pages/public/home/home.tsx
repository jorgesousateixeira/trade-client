import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Link } from '@mui/material';

import { Fade } from '~/animations/fade';

import pubStyles from '../public.module.css';

export function PublicHome() {
  const { t } = useTranslation();

  return (
    <Fade className={pubStyles.publicMainOuterContainer}>
      <div className={pubStyles.publicHomeQuotes}>
        <p>Network communications and partner management</p>
        <p>Keep track of all your connections</p>
        <p>Never lose sight of what's important</p>
      </div>

      <Link component={RouterLink} to="/public/login" replace className={pubStyles.publicHomeLogin}>
        <Button variant="contained">Login</Button>
      </Link>
    </Fade>
  );
}
