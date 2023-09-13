import { useApp } from "../appContext";
import { Navigate } from "react-router-dom";
import { notify } from "../utils/notify";

export const PrivatRoute = ({children}) => {
    const {isLoggedIn, isLoading} = useApp();

    const navigate = !isLoggedIn && !isLoading ? true : false;

    return navigate ? (notify('error', 'You need log in!'), <Navigate to='/'/>) : children;
};