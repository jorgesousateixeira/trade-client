import { useTranslation } from 'react-i18next';

import pubStyles from '../public.module.css';
import { Box } from '@mui/material';
import LanguageSelector from '../language-selector/languageSelector';

const PublicLoginToolbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box className={pubStyles.publicToolBar}>
      <LanguageSelector />
    </Box>
  );
};

export default PublicLoginToolbar;
