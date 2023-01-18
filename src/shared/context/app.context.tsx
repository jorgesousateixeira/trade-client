import {createContext, useEffect, useState} from "react";
import {getAppTheme} from "../../api-services/apiUtils";
import {NavigationModulesEnum} from "../../models/clientOnly/navigationModulesEnum";
import {User} from "../../models/users/user";
import {AppThemeEnum} from "../../models/clientOnly/app-theme.enum";
import * as localStorageKeys from "../../local-storage/localStorageKeys";

type IAppContextProperties = {
    activeComponent: string;
    theme: string ;
    user: User | undefined;
    token: string | undefined;
};

type IAppContext = [IAppContextProperties, React.Dispatch<React.SetStateAction<IAppContextProperties>>];
export const AppContext = createContext<IAppContext>([{} as IAppContextProperties, () => null]);


export const AppContextProvider = (props: any) => {
    const defaultUser = localStorage.getItem(localStorageKeys.APP_LOGGED_USER) ? JSON.parse(localStorage.getItem(localStorageKeys.APP_LOGGED_USER) as string) : {};
    const defaultToken = localStorage.getItem(localStorageKeys.APP_LOGGED_USER_TOKEN) ?? '';
    const appDefaultContext: IAppContextProperties = {
        token: defaultToken,
        user: defaultUser,
        theme: AppThemeEnum.DEFAULT,
        activeComponent: NavigationModulesEnum.PrivateHome,
    }
    const [AppValue, setAppValue] = useState<IAppContextProperties>(appDefaultContext);
    useEffect(() => {
        // console.log('useEffect on AppContext')
    }, [AppValue])

    return (
        <AppContext.Provider value={[AppValue, setAppValue]}>
            {props.children}
        </AppContext.Provider>
    );
};
