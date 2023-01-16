import {useContext, useState} from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  useTheme,
  Alert,
  FormControl,
  FormHelperText,
  IconButton,
  Collapse, LinearProgress,
} from '@mui/material';
import { toast } from 'react-toastify';

import AccountService from '~/api-services/accountService';
import * as localStorageKeys from '~/local-storage/localStorageKeys';
import { Fade } from '~/animations/fade';
import pubStyles from '../public.module.css';
import { useTranslation } from 'react-i18next';
import {ThemeContext} from "~/ThemeProvider";

export function Login() {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const setThemeName = useContext(ThemeContext)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasErrors, setHasErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e: any) {
    setIsLoading(true);
    e.preventDefault();
    const response = await AccountService.getToken(username, password);
    setIsLoading(false);
    if (response && response.IsValid) {
      localStorage.setItem(localStorageKeys.APP_LOGGED_USER_TOKEN, response.ResultData);
      navigate('/private/documents');
    } else {
      if (!response.IsValid) {
        setHasErrors(true);
      }
      console.log('could not loggin');
      toast.error('Errorr');
    }
  }

  return (
    <Fade className={pubStyles.publicMainOuterContainer}>
      <Box
        component="form"
        className={[
          pubStyles.publicLogin,
        ].join(' ')}
        onSubmit={handleLogin}>
        <div className={pubStyles.publicLoginHeader}>
          <h2>{t('loginPage.title')}</h2>
          <p>{t('loginPage.enterCredentials')}</p>
        </div>

        <div className={[pubStyles.publicLoginFields,
          `${hasErrors ? [pubStyles.loginErrors, 'animate__animated', 'animate__shakeX'].join(' ') : ''}`
        ].join(" ")}>
          <TextField
            id="username"
            label={t('loginPage.username')}
            variant="outlined"
            value={username}
            required
            onChange={(e) => {
              setUsername(e.target.value);
              setHasErrors(false);
            }}
            sx={{ '& .MuiFormLabel-root': { color: theme.palette.primary.main } }}
          />
          <TextField
            id="password"
            label={t('loginPage.password')}
            variant="outlined"
            type="password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
              setHasErrors(false);
            }}
            sx={{ '& .MuiFormLabel-root': { color: theme.palette.primary.main } }}
          />
        </div>
        <div className="loginBtn">
           <LinearProgress color="warning" className={`${isLoading ? pubStyles.visible  : pubStyles.hidden }`} />
          <Button sx={{lineHeight: 2}} fullWidth variant="contained" type="submit" disabled={isLoading}>
            {t('loginPage.loginBtn')}
          </Button>
        </div>
        {/*
        {hasErrors && <Alert
            severity="error"
            variant="filled">
          {t('loginPage.couldNotLogin')}
        </Alert>}
        */}
      </Box>
      <Button
          variant="contained"
          color="secondary"
          onClick={() => setThemeName("darkTheme")}>
        Set Dark Theme
      </Button>
      <Button
          variant="contained"
          color="secondary"
          onClick={() => setThemeName("lightTheme")}>
        Set Light Theme
      </Button>
    </Fade>
  );
}
