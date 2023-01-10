import React from 'react';
import {LanguagesEnum} from "../../../models/clientOnly/languages.enum";
import {Button} from "@mui/material";
import {useTranslation} from "react-i18next";

const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    return (
    <>
        {Object.values(LanguagesEnum).map((lng) => (
            <Button key={lng}
                    type="submit"
                    onClick={() => i18n.changeLanguage(lng)}>
                {lng}
            </Button>
        ))}
    </>);
};

export default LanguageSelector;
