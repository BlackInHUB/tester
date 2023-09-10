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

const getTests = async () => {
    try {
        const {data} = await instance.get('/tests/getall');
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
        await instance.patch(`/tests/sendresults/${_id}`, results);
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
    sendResults
};