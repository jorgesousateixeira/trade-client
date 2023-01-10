import React from 'react';
import styles from "../login.module.css";
import PublicLoginToolbar from "../public-login-toolbar/publicLoginToolbar";
import LoginIntroText from "../login-intro-text/loginIntroText";

const LoginImage = () => {

    return (
        <div className={styles.loginImage}>
            <PublicLoginToolbar/>
            <LoginIntroText/>
        </div>);
};

export default LoginImage;
