import {getGlobalizationBaseUrl, getDefaultHeaders, handleAPIError} from "./apiUtils";
import { Resource } from "../models/globalization/resource";
import { ResultMessageIN2 } from "../models/resultMessage/resultMessageIN2";

const getGlobalizationResources = (resourceSet: string) => {
    return fetch(getGlobalizationBaseUrl() + '/Resource/' + resourceSet, {
        method: 'GET',
        headers: getDefaultHeaders()
    })
        .then(response => response.ok ? (response.json().then(result => result as ResultMessageIN2<Resource[]>)) : null)
        .catch(error => {})
};

const getGlobalizationResourcesByURL = (url: string) => {
    return fetch(url, {
        method: 'GET',
        headers: getDefaultHeaders()
    })
        .then(response => response.ok ? (response.json().then(result => result as ResultMessageIN2<Resource[]>)) : null)
        .catch(error => {})
};


export default { getGlobalizationResources, getGlobalizationResourcesByURL };
