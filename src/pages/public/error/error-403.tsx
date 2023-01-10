import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Fade } from "~/shared/animations/fade";
import PublicTitle from "~/shared/components/titles/public-title/public-title";
import { RouteCodeEnum } from "~/shared/enums/route-code.enum";
import { RouterFunctions } from "~/shared/functions/router.functions";
import publicStyles from './../public.module.css';

export default function Error403(){
  const { t } = useTranslation();
  
  return (
    <Fade>
      <div className={publicStyles.root}>
        <div className={publicStyles.mainWrap}>
          <PublicTitle title={t('public.403.title')}></PublicTitle>
          <div className={publicStyles.main}>
            <p>{t('public.403.title')}</p>
            <Link to={RouterFunctions(RouteCodeEnum.Home)}>
              <Button variant="contained" type={'button'} className="btn-primary">{t('public.403.button')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}
