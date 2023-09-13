import { useNavigate } from "react-router-dom";
import { TestDetailsList } from "./TesDetailstList/TestDetailsList";
import { Container, GoBackBtn, StyledIcon, TestTitle, TopWrapper } from "./TestDetails.styled";
import {BsArrowLeftSquare} from 'react-icons/bs';

export const TestDetails = ({test}) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Container>
            <TopWrapper>
                <GoBackBtn type='button' onClick={goBack}><StyledIcon as={BsArrowLeftSquare} />Go Back</GoBackBtn>
                <TestTitle>{`Your created test details:`}</TestTitle>
            </TopWrapper>
            <TestDetailsList test={test} />
        </Container>
    )
};