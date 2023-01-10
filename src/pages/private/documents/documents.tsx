import {t} from "i18next";
import { AppContext } from "../../../shared/context/app.context";
import {useContext, useEffect} from "react";
import {NavigationModulesEnum} from "../../../models/clientOnly/navigationModulesEnum";

export function Documents () {
    const [ AppValue, setAppValue ] = useContext(AppContext);
    AppValue.activeComponent = NavigationModulesEnum.Documents;
    useEffect(() => { setAppValue({...AppValue}); }, []);

    return (
            <h1>Documents</h1>
    )
}
