import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { themeCreator } from './themes/base';

interface Props {
    children?: React.ReactNode;
}

export const ThemeContext = React.createContext((themeName: string): void => {});


export const AppThemeProviderChangeable: React.FC<Props> = ({ children }) => {
    // Read current theme from localStorage or maybe from an api
    const curThemeName = localStorage.getItem("appTheme") || "lightTheme";

    // State to hold the selected theme name
    const [themeName, _setThemeName] = useState(curThemeName);

    // Get the theme object by theme name
    const theme = themeCreator(themeName);

    const setThemeName = (themeName: string): void => {
        localStorage.setItem("appTheme", themeName);
        _setThemeName(themeName);
    }

    return (
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    );
}
