import { useEffect, useState } from "react";
import { TestContent } from "../components/TestContent/TestContent";
import { getTest } from "../services/testsApi";
import { useParams } from "react-router-dom";

const TestPage = () => {
    const [test, setTest] = useState(null);
    const {_id} = useParams();

    useEffect(() => {
        getTest(_id).then(setTest);
    }, [_id]);

    return (
        <>
            {test && <TestContent test={test} />}
        </>
    );
};

export default TestPage;