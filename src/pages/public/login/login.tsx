import styles from './login.module.css'
import {Fade} from "../../../animations/fade";
import LoginImage from "./login-image/loginImage";
import LoginForm from "./login-form/loginForm";

export function Login() {
    return (<Fade>
        <div className={styles.loginOuterContainer}>
            <LoginImage/>
            <LoginForm/>
        </div>
    </Fade>);
}
