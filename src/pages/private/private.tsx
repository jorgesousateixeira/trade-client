import {Outlet} from 'react-router-dom';
import PrivateNavigation from "./navigation/privateNavigation";
import styles from './private.module.css'
import {useContext} from 'react';
import {AppContext} from '../../shared/context/app.context';
import {Fade} from "../../animations/fade";
import {useTheme} from "@mui/material";

export function PrivateContainer() {
    const theme = useTheme();


    return (<Fade>
            <div style={{ backgroundColor: theme.palette.primary.main }}>
                <h1>CONTENT</h1>
                <div>
                    <PrivateNavigation/>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </Fade>)
}
