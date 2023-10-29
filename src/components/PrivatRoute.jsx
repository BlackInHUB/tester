import { useApp } from "../appContext";
import { Navigate } from "react-router-dom";
import { notify } from "../utils/notify";

export const PrivatRoute = ({children}) => {
    const {isLoggedIn, isLoading, language} = useApp();

    const navigate = !isLoggedIn && !isLoading ? true : false;

    return navigate ? (notify('error', `${language === 'EN' ? 'You need to log in!' : 'Авторизуйтесь!'}` ), <Navigate to='/'/>) : children;
};