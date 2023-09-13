import { useEffect, useState } from "react";
import { UsersPassedTestsList } from "../../UsersTestsList/UsersTestsList";
import { Container } from "./UserTests.styled";
import { getUserPassedTests } from "../../../services/testsApi";

const Passed = () => {
    const [tests, setTests] = useState(null);
    const titles = [
        'Category',
        'Author',
        'Passed',
        'Best Score'
    ];

    useEffect(() => {
        getUserPassedTests().then(setTests);
    }, []);

    return (
        <Container>
            {tests && <UsersPassedTestsList $col='4' titles={titles} tests={tests} />}
        </Container>
    )
};

export default Passed;