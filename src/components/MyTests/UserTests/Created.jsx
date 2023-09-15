import { Container } from "./UserTests.styled";
import { UsersCreatedTestsList } from "../../UsersTestsList/UsersTestsList";
import { useEffect, useState } from "react";
import { getUserCreatedTests } from "../../../services/testsApi";

const Created = () => {
    const [tests, setTests] = useState(null);
    const titles = [
        'Category',
        'Passed',
        'Max Score',
        'Best Time'
    ];

    useEffect(() => {
        getUserCreatedTests().then(setTests);
    }, []);

    return (
        <Container>
            {tests && <UsersCreatedTestsList $col='5' tests={tests} titles={titles} />}
        </Container>
    )
};

export default Created;