import { createContext, useContext, useEffect, useState } from "react";
import * as authApi from './services/authApi';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem('token')))

        if (!token || token === '') {
            return;
        };

        authApi.current(token).then(response => setUserData({token, user: response}));
        setIsLoggedIn(true);
    }, [token]);

    const logIn = async (authData) => {
        const user = await authApi.login(authData);
        if (!user) {
            return;
        };
        setUserData(user);
        localStorage.setItem('token', JSON.stringify(user.token));
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
        authApi.logout();
        setUserData(null);
        setIsLoggedIn(false);
        localStorage.setItem('token', '');
    };

    return (
        <AppContext.Provider value={{ token, isLoggedIn, userData, logIn, logOut, register }}>
            {children}
        </AppContext.Provider>
    );
};