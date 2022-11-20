import {useState} from "react";
import styles from './login.module.css'
import {Box, Button, TextField} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import * as localStorageKeys from "../../../local-storage/localStorageKeys";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import { useSpring } from "react-spring";
import {Fade} from "../../../animations/fade";
import { LanguagesEnum } from "../../../models/clientOnly/languages.enum";
import AccountService from '../../../api-services/accountService';

export function Login () {
    const { t, i18n } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleLogin(e: any) {
        console.log('handling login....');
        e.preventDefault();
            const response = await AccountService.getToken(username, password);
                if (response && response.IsValid) {
                    localStorage.setItem(localStorageKeys.APP_LOGGED_USER_TOKEN, response.ResultData);
                    navigate('/private/documents');
                } else {
                    console.log('could not loggin');
                    toast.error("Errorr");
                }
    }
    return (
        <>
            {/* animation test */}
            <Fade>
                <div className={styles.loginOuterContainer}>
                    <div className={styles.loginFormContainer}>
                    <div className={styles.loginFormTitle}>
                        <span className={styles.appName}>Trade</span>
                        <span className={styles.appName2}>Admin</span>
                    </div>
                    <div className={styles.enterCredentials}>{t('loginPage.enterCredentials')}</div>
                    <Box className={styles.loginBox}>
                        <form onSubmit={handleLogin}>
                            <TextField id="username"
                                       className={styles.loginData}
                                       label={t('loginPage.userName')}
                                       variant="standard"
                                       value={username}
                                       fullWidth
                                       onChange={(e) => setUsername(e.target.value)}/>
                            <TextField id="password"
                                       className={styles.loginData}
                                       label="Password"
                                       variant="standard"
                                       type="password"
                                       fullWidth
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}/>
                            <Button className={styles.loginBtn}
                                    variant="contained" type={"submit"}>
                                {t('loginPage.btnLogin')}
                            </Button>
                        </form>
                    </Box></div>
                    <div className={styles.loginImage}>
                        <div className={styles.toolbar}>
                            <Link to="/public">
                                <a>{t('loginPage.backToPublicHome')}</a>
                            </Link>
                            <div>
                                {Object.values(LanguagesEnum).map((lng) => (
                                    <Button key={lng} style={
                                        {fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal'}}
                                            type="submit"
                                            onClick={() => i18n.changeLanguage(lng)}>
                                        {lng}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div className={styles.loginTextOverImage}> <h1>Note</h1>SOME TEXT OVER IMAGE</div>
                    </div>
                </div>
            </Fade>
        </>
    );
}
