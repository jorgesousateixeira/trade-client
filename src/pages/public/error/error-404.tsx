import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import publicStyles from './../../public/public.module.css';
import { useTranslation } from "react-i18next";
import {Fade} from "../../../animations/fade";

export default function Error404(){
  const { t } = useTranslation();
  
  return (
    <Fade>
      <div className={publicStyles.root}>
        <div className={publicStyles.mainWrap}>
          <h1>{t('public.404.title')}</h1>
          <div className={publicStyles.main}>
            <p>{t('public.404.text')}</p>
            <Link to={'/'}>
              <Button variant="contained" type={'button'} className="btn-primary">{t('public.404.button')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}
