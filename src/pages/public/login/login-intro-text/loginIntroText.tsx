import React from 'react';
import {useTranslation} from "react-i18next";
import styles from "../login.module.css";

const LoginIntroText = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className={styles.loginTextOverImage}><h1>Note</h1>SOME TEXT OVER IMAGE 2</div>
    );
};

export default LoginIntroText;
