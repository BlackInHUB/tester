import { createContext, useContext, useEffect, useState } from "react";
import * as authApi from './services/authApi';
import { getCategories } from "./services/testsApi";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [language, setLanguage] = useState('EN');
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        const localToken = localStorage.getItem('token');

        if (!localToken || localToken === '') {
            return setIsLoading(false);
        };

        authApi.current(JSON.parse(localToken)).then(response => {
            setUserData({token: JSON.parse(localToken), user: response});
            setIsLoggedIn(true);
        }).finally(() => {
            setIsLoading(false)
        });
    }, []);

    useEffect(() => {
        setIsLoading(true);
        getCategories().then(setCategories).finally(setIsLoading(false));
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
        <AppContext.Provider value={{ categories, isLoggedIn, userData, logIn, logOut, register, isLoading, setIsLoading, language, setLanguage }}>
            {children}
        </AppContext.Provider>
    );
};