import { useNavigate } from "react-router-dom";
import { TestDetailsList } from "./TesDetailstList/TestDetailsList";
import { Container, Btn, StyledIcon, TestTitle, TopWrapper } from "./TestDetails.styled";
import {BsArrowLeftSquare, BsArrowBarDown} from 'react-icons/bs';
import { useState } from "react";
import { QuestionsList } from "../QuestionsList/QuestionsList";

export const TestDetails = ({test, language}) => {
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
                <Btn $position='absolute' type='button' onClick={goBack}><StyledIcon as={BsArrowLeftSquare} />{language === 'EN' ? 'Go Back' : 'Назад'}</Btn>
                <TestTitle>{language === 'EN' ? `Your created test details:` : 'Деталі створеного вами тесту:'}</TestTitle>
            </TopWrapper>
            {test && 
                <>
                    <Btn type='button' onClick={toggleOpen}><StyledIcon open={open} as={BsArrowBarDown} />{language === 'EN' && !open ? 'Open questions' : language === 'EN' && open ? 'Close questions' : open ? 'Закрити питання' : 'Відкрити питання' }</Btn>
                    {open &&
                        <QuestionsList questions={test.questions} />
                    }
                    <TestDetailsList language={language} test={test} />
                </>
            }
        </Container>
    )
};