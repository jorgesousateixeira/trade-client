import * as React from 'react';
import {FC, useState, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import * as localStorageKeys from "./../../../local-storage/localStorageKeys";
import i18n from "../../../i18n";
import { AppContext } from '../../../shared/context/app.context';
import {User} from "../../../models/users/user";

interface Props {
    user: User | undefined;
}
const PositionedMenu: FC<Props> = ({user}) => {
    const [ AppValue, setAppValue ] = useContext(AppContext);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorThemeEl, setAnchorThemeEl] = useState<null | HTMLElement>(null);
    const [anchorLangEl, setAnchorLangEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const openMenu = Boolean(anchorEl);
    const openMenuTheme = Boolean(anchorThemeEl);
    const openMenuLang = Boolean(anchorLangEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickTheme = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorThemeEl(event.currentTarget);
    };
    const handleClickLang = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorLangEl(event.currentTarget);
    };
    const handleClose = (event:any, value: number) => {
        handleCloseAll();
        if (value === 1) {
            navigate('/private/users/' + user?.ID);
        }
        if (value === 3) {
            navigate('/public/');
        }
    };
    const handleCloseTheme = (event: any, value: string) => {
        handleCloseAll();
        localStorage.setItem(localStorageKeys.APP_THEME, value);
        AppValue.theme = value;
        setAppValue({...AppValue});
    };
    const handleCloseLang = (event: any, value: string) => {
        handleCloseAll();
        i18n.changeLanguage(value);
    };
    const handleCloseAll = () => {
        setAnchorEl(null);
        setAnchorThemeEl(null);
        setAnchorLangEl(null);
    }
    const handleClose2 = () => { setAnchorEl(null); };
    const handleClose2Theme = () => { setAnchorThemeEl(null); };
    const handleClose2Lang = () => { setAnchorLangEl(null); };
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
}

export default PositionedMenu;
