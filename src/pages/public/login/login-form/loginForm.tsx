import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountService from '../../../../api-services/accountService';
import * as localStorageKeys from '../../../../local-storage/localStorageKeys';
import { toast } from 'react-toastify';

import { Fade } from '~/animations/fade';
import AppName from '../../app-name/appName';

import styles from '../login.module.css';
import PublicLoginToolbar from '../public-login-toolbar/publicLoginToolbar';

const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasErrors, setHasErrors] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(e: any) {
    console.log('handling login....');
    e.preventDefault();
    const response = await AccountService.getToken(username, password);
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
    <div className={styles.loginFormContainer}>
      <PublicLoginToolbar />

      <div className={styles.loginContent}>
        <div>
          <AppName />
          <div className={styles.enterCredentials}>{t('loginPage.enterCredentials')}</div>
        </div>

        <Box
          component="form"
          className={[styles.loginForm, `${hasErrors ? [styles.loginErrors, 'animate__animated', 'animate__shakeX'].join(' ') : ''}`].join(
            ' '
          )}
          onSubmit={handleLogin}>
          <div>
            <TextField
              id="username"
              label={t('loginPage.userName')}
              variant="filled"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setHasErrors(false);
              }}
            />
            <TextField
              id="password"
              label="Password"
              variant="filled"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setHasErrors(false);
              }}
            />

            {hasErrors && <Alert severity="error">This is an error alert — check it out!</Alert>}
          </div>

          <Button className={styles.loginBtn} variant="contained" type={'submit'} size="small" sx={{ alignSelf: 'flex-end' }}>
            {t('loginPage.btnLogin')}
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default LoginForm;
