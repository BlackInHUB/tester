import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

const setToken = token => {
    if (token) {
        return instance.defaults.headers.common.Authorization = `Bearer ${token}`
    };
};

const register = async (authData) => {
    try {
        const {data} = await instance.post('/auth/register', authData);
        return data;
    } catch (error) {
        console.log(error);
    };
};

const login = async (authData) => {
    try {
        const {data} = await instance.post('/auth/login', authData);
        setToken(data.token);
        return data;
    } catch (error) {
        console.log(error);
    };
};

const logout = async () => {
    try {
        await instance.get('/auth/logout');
        setToken('');
    } catch (error) {
        console.log(error);
    };
};

const getUsers = async () => {
    try {
        const {data} = await instance.get('/auth/users');
        return data;
    } catch (error) {
        console.log(error);
    };
}

export {
    register,
    login,
    logout,
    getUsers
};