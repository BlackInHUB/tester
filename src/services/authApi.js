import axios from "axios";
import { notify } from "../utils/notify";

export const instance = axios.create({
  baseURL: "http://localhost:8080",
  // baseURL: 'https://tester-pa0u.onrender.com'
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
};

const register = async (authData) => {
  try {
    const { data } = await instance.post("/auth/register", authData);
    return data;
  } catch ({ response }) {
    notify("error", response.data.message);
    console.log(response.data.message);
  }
};

const login = async (authData) => {
  try {
    const { data } = await instance.post("/auth/login", authData);
    setToken(data.token);
    return data;
  } catch ({ response }) {
    notify("error", response.data.message);
    console.log(response.data.message);
  }
};

const logout = async () => {
  try {
    await instance.get("/auth/logout");
    setToken("");
  } catch ({ response }) {
    notify("error", response.data.message);
    console.log(response.data.message);
  }
};

const getUsers = async () => {
  try {
    const { data } = await instance.get("/auth/users");
    return data;
  } catch ({ response }) {
    notify("error", response.data.message);
    console.log(response.data.message);
  }
};

const current = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get("/auth/current");
    return data;
  } catch ({ response }) {
    notify("error", response.data.message);
    console.log(response.data.message);
  }
};

export { register, login, logout, getUsers, current };
