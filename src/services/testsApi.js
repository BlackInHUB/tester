import { instance } from "./authApi";

const upload = async (body) => {
    try {
        const {data} = await instance.post('/tests/upload', body);
        return data;
    } catch (error) {
        console.log(error);
    };
}

const create = async (body) => {
    try {
        const {data} = await instance.post('/tests/create', body);
        return data;
    } catch (error) {
        console.log(error);
    };
};

const getTests = async () => {
    try {
        const {data} = await instance.get('/tests/getall');
        return data;
    } catch (error) {
        console.log(error);
    };
}

export {
    create,
    upload,
    getTests
};