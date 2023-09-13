import { useParams } from "react-router-dom";
import Created from "./UserTests/Created";
import Passed from "./UserTests/Passed";

const MyTests = () => {
    const params = useParams();
    const {userstests} = params;
    
    return (
        <>
            {userstests === 'created' && <Created />}
            {userstests === 'passed' && <Passed />}
        </>
    )
};

export default MyTests;