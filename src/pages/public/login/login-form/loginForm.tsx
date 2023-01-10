import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import styles from "../login.module.css";
import {Alert, Box, Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import AccountService from "../../../../api-services/accountService";
import * as localStorageKeys from "../../../../local-storage/localStorageKeys";
import {toast} from "react-toastify";
import AppName from "../../app-name/appName";
import {Fade} from "../../../../animations/fade";

const LoginForm = () => {
    const {t, i18n} = useTranslation();
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
            toast.error("Errorr");
        }
    }

    return (<div className={styles.loginFormContainer}>
            <AppName/>
        <div className={styles.enterCredentials}>{t('loginPage.enterCredentials')}</div>
            <Box className={[styles.loginBox, `${hasErrors ? [styles.loginErrors, "animate__animated", "animate__shakeX"].join(" ") : ""}`].join(" ")}>
                <form onSubmit={handleLogin}>
                    <TextField id="username"
                               className={styles.loginData}
                               label={t('loginPage.userName')}
                               variant="standard"
                               value={username}
                               fullWidth
                               onChange={(e) => {setUsername(e.target.value); setHasErrors(false);}}/>
                    <TextField id="password"
                               className={styles.loginData}
                               label="Password"
                               variant="standard"
                               type="password"
                               fullWidth
                               value={password}
                               onChange={(e) => {setPassword(e.target.value); setHasErrors(false);}}/>
                    <Button className={styles.loginBtn}
                            variant="contained" type={"submit"}>
                        {t('loginPage.btnLogin')}
                    </Button>
                    { hasErrors &&
                        <Fade>
                        <Alert severity="error">This is an error alert — check it out!</Alert>
                    </Fade>}
                </form>
            </Box>
        </div>);
};

export default LoginForm;
