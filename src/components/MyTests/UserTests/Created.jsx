import { Container } from "./UserTests.styled";
import { UsersTestsList } from "../../UsersTestsList/UsersTestsList";

const Created = ({tests}) => {
    
    const handleTestClick = (_id) => {

    }

    return (
        <Container>
            {tests && <UsersTestsList handleClick={handleTestClick} tests={tests} />}
        </Container>
    )
};

export default Created;