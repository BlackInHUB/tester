import { TestDetailsList } from "./TesDetailstList/TestDetailsList";
import { Container } from "./TestDetails.styled";

export const TestDetails = ({test}) => {

    return (
        <Container>
            <TestDetailsList test={test} />
        </Container>
    )
};