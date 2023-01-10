import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import styles from './publicHome.module.css'
import {Fade} from "../../../animations/fade";
import {Button} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

export function PublicHome() {
    const {t} = useTranslation();
    return (
        <Fade>
            <div className={styles.publicHomeContainer}>
                <div className={styles.content1}>
                    <div className={styles.appName}>Trade</div>
                    <div className={styles.loginBtn}>
                        <LoginIcon className={styles.icon} />
                        <Link to="/public/login">
                            {t('public-home.login')}
                        </Link>
                    </div>
                </div>
                <div className={styles.content2}>
                    <div className={styles.appDescription}>Administration</div>
                </div>
            </div>
        </Fade>
    )
}
