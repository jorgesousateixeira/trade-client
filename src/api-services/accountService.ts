import {getLoggedUserToken, handleAPIError, getApiBaseUrl, getDefaultHeaders, getHttpErrorAsResponse} from "./apiUtils";
import {ResultMessage} from "../models/resultMessage/resultMessage";


const getToken = (username: string, password: string) => {
    return fetch(getApiBaseUrl() + '/Tokens/GetTokenFromLogin?userId='+ username + '&password=' + password)
        .then(response => response.ok ? (response.json().then(result => result as ResultMessage<string>)) 
        : {... getHttpErrorAsResponse(response), ResultData: 'null' } as ResultMessage<string>)
        .catch((error) => { return {... handleAPIError(error), ResultData: 'null' } as ResultMessage<string>})
};

export default {
    getToken
};
  
