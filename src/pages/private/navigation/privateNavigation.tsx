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
import { AdminPanelSettingsOutlined, ArticleOutlined, HandshakeOutlined, Home, MailOutline, MoreVert, Settings } from '@mui/icons-material';

import styles from './privateNavigation.module.css';
import ThemeToggle from '~/shared/components/theme-toggle/theme-toggle';

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
        color="inherit"
        sx={{
          // '&.active, :hover': { color: theme.palette.primary.dark, background: theme.palette.primary.dark },
          ...sx,
        }}>
        <div className={styles.navButtonContainer}>
          <div className={styles.navButton}>
            {icon}
            <span>{label}</span>
          </div>
          <Box className={styles.navButtonCircle}></Box>
        </div>
      </Link>
    );
  };

  return (
    <Box className={styles.navContainer} sx={{ background: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
      <Box className={styles.appName} sx={{ p: theme.spacing(2, 0, 2, 2) }}>
        <div>
          <span style={{ color: theme.palette.secondary.main }}>TRADE</span>
          <span>ADMINISTRATION</span>
        </div>
        <ThemeToggle className={styles.toggle} sx={{ m: 0 }} />
      </Box>

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

      <Box className={styles.userAndSignature} sx={{ p: theme.spacing(2, 2) }}>
        {/* <PositionedMenu user={loggedUser} /> */}
        <Box className={styles.userContainer}>
          <Box className={styles.userAvatar} sx={{ width: 40, height: 40 }}></Box>
          <div className={styles.userDetails}>
            <span>John Doe</span>
            <span>john.doe@email.com</span>
          </div>
          <MoreVert color="inherit" />
        </Box>
        {/* <Link underline="none" component={RouterLink} to="www.saphety.com" color="primary.contrastText">
          www.saphety.com
        </Link> */}
      </Box>
    </Box>
  );
}
