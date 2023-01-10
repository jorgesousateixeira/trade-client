import { Outlet } from 'react-router-dom';
import PrivateNavigation from "./navigation/privateNavigation";
import styles from './private.module.css'
import { useContext } from 'react';
import { AppContext } from '../../shared/context/app.context';
import {Fade} from "../../animations/fade";

export function PrivateContainer () {
    const [ AppValue ] = useContext(AppContext);
    
    return (
        <Fade>
            <div className={styles.navigation}>
                <PrivateNavigation/>
            </div>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </Fade>
    )
}
