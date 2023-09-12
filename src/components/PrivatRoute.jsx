import { useApp } from "../appContext";
import { Navigate } from "react-router-dom";
import { notify } from "../utils/notify";

export const PrivatRoute = ({children}) => {
    const {isLoggedIn, token} = useApp();

    if (!isLoggedIn || !token) {
        notify('error', 'You need log in to access tests.')
    };

    return !isLoggedIn ? <Navigate to='/'/> : children;
};