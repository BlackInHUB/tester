import { createContext, useContext, useEffect, useState } from "react";
import * as authApi from './services/authApi';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    console.log(isLoading);

    useEffect(() => {
        setIsLoading(true);
        const localToken = localStorage.getItem('token');

        if (!localToken || localToken === '') {
            return;
        };

        authApi.current(JSON.parse(localToken)).then(response => {
            setUserData({token: JSON.parse(localToken), user: response});
            setIsLoggedIn(true);
        }).finally(() => {
            setIsLoading(false);
        });
    }, []);

    const logIn = (authData) => {
        setIsLoading(true);
        authApi.login(authData).then(response => {
            setUserData(response);
            localStorage.setItem('token', JSON.stringify(response.token));
            setIsLoggedIn(true);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    const register = (authData) => {
        authApi.register(authData).then(response => {
            if (response._id) {
                logIn(authData);
            };
        });
    };

    const logOut = () => {
        authApi.logout();
        setUserData(null);
        setIsLoggedIn(false);
        localStorage.setItem('token', '');
    };

    return (
        <AppContext.Provider value={{ isLoggedIn, userData, logIn, logOut, register, isLoading, setIsLoading }}>
            {children}
        </AppContext.Provider>
    );
};