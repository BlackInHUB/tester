import { instance } from "./authApi";
import { notify } from "../utils/notify";

const upload = async (body) => {
    try {
        const {data} = await instance.post('/tests/upload', body);
        return data;
    } catch ({response}) {
        notify('error', response.data.message)
        console.log(response.data.message);
    };
};

const create = async (body) => {
    try {
        const {data} = await instance.post('/tests/create', body);
        return data;
    } catch ({response}) {
        notify('error', response.data.message)
        console.log(response.data.message);
    };
};

const getTests = async (params) => {
    try {
        const {data} = await instance.get(`/tests/getall?${params}`);
        // console.log(data);
        return data;
    } catch ({response}) {
        notify('error', response.data.message)
        console.log(response.data.message);
    };
};

const getTest = async (_id) => {
    try {
        const {data} = await instance.get(`/tests/get/${_id}`);
        return data;
    } catch ({response}) {
        notify('error', response.data.message)
        console.log(response.data.message);
    };
};

const sendResults = async (_id, results) => {
    try {
        return await instance.patch(`/tests/sendresults/${_id}`, results);
    } catch ({response}) {
        notify('error', response.data.message)
        console.log(response.data.message);
    };
};

const getCategories = async () => {
    try {
        const {data} = await instance.get('/categories/getall/');
        return data;
    } catch ({response}) {
        notify('error', response.data.message)
        console.log(response.data.message);
    };
};

const getUserCreatedTests = async () => {
    try {
        const {data} = await instance.get('/tests/created/');
        return data;
    } catch ({response}) {
        notify('error', response.data.message)
        console.log(response.data.message);
    };
};

const getUserPassedTests = async () => {
    try {
        const {data} = await instance.get('/tests/passed/');
        return data;
    } catch ({response}) {
        notify('error', response.data.message)
        console.log(response.data.message);
    };
};

const getTestDetails = async (_id) => {
    try {
        const {data} = await instance.get(`/tests/details/${_id}`);
        return data;
    } catch ({response}) {
        notify('error', response.data.message)
        console.log(response.data.message);
    };
};

export {
    create,
    upload,
    getTests,
    getTest,
    sendResults,
    getCategories,
    getUserCreatedTests,
    getUserPassedTests,
    getTestDetails
};