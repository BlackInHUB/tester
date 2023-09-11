import { useEffect, useState } from "react";
import { TestContent } from "../components/TestContent/TestContent";
import * as testsApi from "../services/testsApi";
import { useParams } from "react-router-dom";

const TestPage = () => {
    const [test, setTest] = useState(null);
    const {_id} = useParams();

    useEffect(() => {
        testsApi.getTest(_id).then(response => setTest(...response));
    }, [_id]);

    const sendResults = (results) => {
        testsApi.sendResults(_id, results)
    };

    return (
        <>
            {test && <TestContent sendResults={sendResults} test={test} />}
        </>
    );
};

export default TestPage;