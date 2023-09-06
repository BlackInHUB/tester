import { createContext, useContext, useState } from "react";
import * as authApi from './services/authApi';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    const logIn = (authData) => {
        authApi.login(authData).then(setUserData);
        setIsLoggedIn(true);
    };

    const register = (authData) => {
        authApi.register(authData).then(response => {
            if (response._id) {
                logIn(authData);
            };
        });
    };

    const logOut = () => {
        setUserData(null);
        setIsLoggedIn(false);
    };

    return (
        <AppContext.Provider value={{ isLoggedIn, userData, logIn, logOut, register }}>
            {children}
        </AppContext.Provider>
    );
};