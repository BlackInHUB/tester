import { TestsList } from "../../TestsList/TestsList";
import { Container } from "./UserTests.styled";

const Passed = ({tests}) => {

    console.log(tests);

    return (
        <Container>
            {tests && <TestsList tests={tests} />}
        </Container>
    )
};

export default Passed;