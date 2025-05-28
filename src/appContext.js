import { createContext, useContext, useEffect, useState } from 'react';
import * as authApi from './services/authApi';
import { getCategories } from './services/testsApi';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [language, setLanguage] = useState('EN');
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getCategories()
      .then(response => setCategories(response))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));

    const localToken = localStorage.getItem('token');

    if (!localToken || localToken === '') {
      return setIsLoggedIn(false);
    }

    setIsLoading(true);

    authApi
      .current(JSON.parse(localToken))
      .then(response => {
        if (response._id) {
          setUserData({ token: JSON.parse(localToken), user: response });
          setIsLoggedIn(true);
        }
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const logIn = authData => {
    setIsLoading(true);
    authApi
      .login(authData)
      .then(response => {
        if (response.user && response.token) {
          setUserData(response);
          localStorage.setItem('token', JSON.stringify(response.token));
          setIsLoggedIn(true);
        }
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const register = authData => {
    setIsLoading(true);
    authApi
      .register(authData)
      .then(response => {
        if (response._id) {
          logIn(authData);
        }
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    authApi.logout();
    setUserData(null);
    setIsLoggedIn(false);
    localStorage.setItem('token', '');
  };

  return (
    <AppContext.Provider
      value={{
        categories,
        isLoggedIn,
        userData,
        logIn,
        logOut,
        register,
        isLoading,
        setIsLoading,
        language,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
