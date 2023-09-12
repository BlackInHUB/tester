import { useParams } from "react-router-dom";
import { TestDetails } from "../components/TestDetails/TestDetails";
import { useEffect, useState } from "react";
import { getTestDetails } from "../services/testsApi";

const TestDetailsPage = () => {
    const [test, setTest] = useState(null);
    const {_id} = useParams();
    
    useEffect(() => {
        if (!_id) {
            return;
        };

        getTestDetails(_id).then(response => setTest(...response));
    }, [_id]);

    return (
        <>
            {test && <TestDetails test={test} />}
        </>
    );
};

export default TestDetailsPage