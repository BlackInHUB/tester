import { useNavigate } from "react-router-dom";
import { TestDetailsList } from "./TesDetailstList/TestDetailsList";
import { Container, Btn, StyledIcon, TestTitle, TopWrapper } from "./TestDetails.styled";
import {BsArrowLeftSquare, BsArrowBarDown} from 'react-icons/bs';
import { useState } from "react";
import { QuestionsList } from "../QuestionsList/QuestionsList";

export const TestDetails = ({test}) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const toggleOpen = () => {
        setOpen(o => !o);
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Container>
            <TopWrapper>
                <Btn $position='absolute' type='button' onClick={goBack}><StyledIcon as={BsArrowLeftSquare} />Go Back</Btn>
                <TestTitle>{`Your created test details:`}</TestTitle>
            </TopWrapper>
            <Btn type='button' onClick={toggleOpen}><StyledIcon as={BsArrowBarDown} />Open questions</Btn>
            {open &&
                <QuestionsList questions={test.questions} />
            }
            <TestDetailsList test={test} />
        </Container>
    )
};