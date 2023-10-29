import { useParams } from "react-router-dom";
import { TestDetails } from "../components/TestDetails/TestDetails";
import { useEffect, useState } from "react";
import { getTestDetails } from "../services/testsApi";
import { useApp } from "../appContext";

const TestDetailsPage = () => {
    const [test, setTest] = useState(null);
    const {_id} = useParams();
    const {language} = useApp();
    
    useEffect(() => {
        if (!_id) {
            return;
        };

        getTestDetails(_id).then(response => setTest(...response));
    }, [_id]);

    return (
        <TestDetails language={language} test={test} />
    );
};

export default TestDetailsPage