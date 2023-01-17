// import styles2 from '../common/privateContainer.module.css';
import { Link as RouterLink } from 'react-router-dom';
import PositionedMenu from '../common/menu';
import * as localStorageKeys from '~/local-storage/localStorageKeys';
import { useContext } from 'react';
import { AppContext } from '../../../shared/context/app.context';
import useLocalStorage from '~/hooks/localStorageHook';
import { NavigationModulesEnum } from '~/models/clientOnly/navigationModulesEnum';
import { User } from '~/models/users/user';
import { Box, Link, SxProps, Typography, useTheme } from '@mui/material';
import { AdminPanelSettingsOutlined, ArticleOutlined, HandshakeOutlined, Home, MailOutline, Settings } from '@mui/icons-material';

import styles from './privateNavigation.module.css';

export default function PrivateNavigation() {
  // const activeComponent = useSelector((state:AppState) => state?.auth?.activeComponent);

  const [loggedUser, setLoggedUser] = useLocalStorage<User>(localStorageKeys.APP_LOGGED_USER, {} as User);

  const [AppValue] = useContext(AppContext);
  const activeComponent = NavigationModulesEnum.PrivateHome;
  //let loggedUser = useAppSelector((state) => state.login.user)

  /*    let loggedUser = undefined;
    const loggedUserStr = localStorage.getItem(localStorageKeys.APP_LOGGED_USER);
    if (loggedUserStr){
        loggedUser = JSON.parse(loggedUserStr);
    }*/

  // console.log(AppValue);

  const theme = useTheme();

  interface NavButtonModel {
    label: string;
    icon: React.ReactNode;
    active: boolean;
    to: string;
    sx?: SxProps;
  }

  const NavButton = (props: NavButtonModel) => {
    const { label, icon, active, to, sx } = props;

    return (
      <Link
        underline="none"
        component={RouterLink}
        to={to}
        className={active ? styles.active : ''}
        color="text.secondary"
        sx={{
          ':hover': { color: theme.palette.text.primary, background: theme.palette.text.secondary },
          ...sx,
        }}>
        {icon} {label}
      </Link>
    );
  };

  return (
    // <div className={[styles.navContainer, styles2.animatedFadein].join(' ')}>
    <Box className={styles.navContainer} sx={{ backgroundColor: theme.palette.primary.main }}>
      <div className={styles.appName}>
        <span>TRADE</span>
        <Typography variant="body1" component="span" color="text.secondary">
          ADMINISTRATION
        </Typography>
      </div>

      <nav className={styles.nav}>
        <NavButton
          label="Home"
          icon={<Home />}
          active={AppValue.activeComponent === NavigationModulesEnum.PrivateHome}
          to="/private/home"
        />
        <NavButton
          label="Messages"
          icon={<MailOutline />}
          active={AppValue.activeComponent === NavigationModulesEnum.Messages}
          to="/private/messages"
        />
        <NavButton
          label="Documents"
          icon={<ArticleOutlined />}
          active={AppValue.activeComponent === NavigationModulesEnum.Documents}
          to="/private/documents"
        />
        <NavButton
          label="Partners"
          icon={<HandshakeOutlined />}
          active={AppValue.activeComponent === NavigationModulesEnum.Partners}
          to="/private/partners"
        />
        <NavButton
          label="Settings"
          icon={<Settings />}
          active={AppValue.activeComponent === NavigationModulesEnum.Settings}
          to="/private/settings"
        />
        <NavButton
          label="Admin"
          icon={<AdminPanelSettingsOutlined />}
          active={AppValue.activeComponent === NavigationModulesEnum.Admin || AppValue.activeComponent === NavigationModulesEnum.Users}
          to="/private/admin"
        />
      </nav>

      <div className={styles.userAndSignature}>
        <PositionedMenu user={loggedUser} />
        <Link underline="none" component={RouterLink} to="www.saphety.com" color="text.secondary">
          www.saphety.com
        </Link>
      </div>
    </Box>
  );
}
