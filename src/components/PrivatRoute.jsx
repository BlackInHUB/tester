import { useApp } from "../appContext";
import { Navigate } from "react-router-dom";

export const PrivatRoute = ({children}) => {
    const {isLoggedIn} = useApp();

    return !isLoggedIn ? <Navigate to='/'/> : children;
};