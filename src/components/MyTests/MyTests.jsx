import { useOutletContext } from "react-router-dom";
import Created from "./UserTests/Created";
import Passed from "./UserTests/Passed";

const MyTests = () => {
    const {tests, params} = useOutletContext();
    const {userstests} = params;
    
    return (
        <>
            {userstests === 'created' && <Created tests={tests} />}
            {userstests === 'passed' && <Passed tests={tests} />}
        </>
    )
};

export default MyTests;