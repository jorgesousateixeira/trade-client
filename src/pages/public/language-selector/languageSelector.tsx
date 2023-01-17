import { Button, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LanguagesEnum } from '~/models/clientOnly/languages.enum';

const LanguageSelector = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <>
      {Object.values(LanguagesEnum).map((lng) => (
        <Button
          key={lng}
          variant="text"
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
          sx={{ p: theme.spacing(1, 2), minWidth: 0, color: theme.palette.text.primary }}>
          {lng.toLocaleUpperCase()}
        </Button>
      ))}
    </>
  );
};

export default LanguageSelector;
