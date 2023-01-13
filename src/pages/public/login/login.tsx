import { useState } from 'react';
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
  Collapse,
} from '@mui/material';
import { toast } from 'react-toastify';

import AccountService from '~/api-services/accountService';
import * as localStorageKeys from '~/local-storage/localStorageKeys';

import { Fade } from '~/animations/fade';
import pubStyles from '../public.module.css';
import { useTranslation } from 'react-i18next';
import { Close } from '@mui/icons-material';

export function Login() {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasErrors, setHasErrors] = useState(false);
  const [open, setOpen] = useState(false);

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
        setOpen(true);
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
          // `${hasErrors ? [pubStyles.loginErrors, 'animate__animated', 'animate__shakeX'].join(' ') : ''}`,
        ].join(' ')}
        onSubmit={handleLogin}>
        <div className={pubStyles.publicLoginHeader}>
          <h2>{t('loginPage.title')}</h2>
          <p>{t('loginPage.enterCredentials')}</p>
        </div>

        <div className={pubStyles.publicLoginFields}>
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

          <Collapse in={open}>
            <Alert
              severity="error"
              variant="filled"
              action={
                <IconButton size="small" onClick={() => setOpen(false)} color="inherit">
                  <Close fontSize="inherit" />
                </IconButton>
              }>
              This form has errors!
            </Alert>
          </Collapse>
        </div>

        <div className={pubStyles.publicRememberForgot}>
          <FormControlLabel
            control={<Checkbox disableRipple />}
            label={t('loginPage.remember')}
            sx={{ color: theme.palette.primary.main }}
          />
          <Link component={RouterLink} to="" replace>
            {t('loginPage.forgotPassword')}
          </Link>
        </div>

        <Button fullWidth variant="contained" type="submit">
          {t('loginPage.loginBtn')}
        </Button>
      </Box>
    </Fade>
  );
}
