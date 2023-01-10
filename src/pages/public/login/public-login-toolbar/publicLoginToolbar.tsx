import React from 'react';
import {useTranslation} from "react-i18next";
import styles from "../login.module.css";
import {Link} from "react-router-dom";
import LanguageSelector from "../../language-selector/languageSelector";

const PublicLoginToolbar = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className={styles.toolbar}>
            <Link to="/public">
                {t('loginPage.backToPublicHome')}
            </Link>
            <LanguageSelector/>
        </div>
    );
};

export default PublicLoginToolbar;
