import * as localStorageKeys from '../local-storage/localStorageKeys'
import { AppThemeEnum } from '../models/clientOnly/app-theme.enum';
import { ResultMessage } from '../models/resultMessage/resultMessage';
import { ValidationError } from '../models/resultMessage/validationError';

// In a real app, would likely call an error logging service.
export function handleAPIError(error: any) {
    // eslint-disable-next-line no-console
    console.error("API call failed. " + error);
       return {
        IsValid: false,
        ResultData: null,
        Errors: [{ Code: 'API_CALL_ERROR', Description: JSON.stringify(error) } as ValidationError]       
    } as ResultMessage<null>;
}
export const getHttpErrorAsResponse = (response: Response): ResultMessage<null> => {
    return {
        IsValid: false,
        ResultData: null,
        Errors: [{ Code: response.status.toString(), Description: response.statusText } as ValidationError]       
    } as ResultMessage<null>;
}

export const getApiBaseUrl = () => 'https://saphetydoc-int.saphety.com/TradeBusinessWs';
export const getGlobalizationBaseUrl = () => 'https://doc-server-int.saphety.com/IN2.Globalization.WebApi/api';
export const getLoggedUserToken = () => localStorage.getItem(localStorageKeys.APP_LOGGED_USER_TOKEN);
export const getAppTheme = () => localStorage.getItem(localStorageKeys.APP_THEME) ?? AppThemeEnum.DEFAULT.toLocaleLowerCase();
export const getDefaultHeaders = () => { return { "content-type": "application/json", "Authorization": "Bearer " + getLoggedUserToken() }; }

