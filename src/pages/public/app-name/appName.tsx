import React from 'react';
import styles from "../../public/login/login.module.css";

const AppName = () => {

    return (
        <div className={styles.loginFormTitle}>
            <span className={styles.appName}>Trade</span>
            <span className={styles.appName2}>Admin</span>
        </div>
    );
};

export default AppName;
