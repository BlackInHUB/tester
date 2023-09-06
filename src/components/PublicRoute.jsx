import { Navigate } from "react-router-dom";
import { useApp } from "../appContext";

export const PublicRoute = ({children}) => {
    const {isLoggedIn} = useApp();

    return isLoggedIn ? <Navigate to='/tests' /> : children;
};