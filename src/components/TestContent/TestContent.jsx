import { useState } from "react";
import { Button } from "../reusableComponents/Buttons/Button";
import { BtnsWrapper, Container, TestContainer, Wrapper } from "./TestContent.styled";
import { TestList } from "../TestList/TestList"
import { TestInfo } from "./TestInfo";
import { TestResults } from "./TestResults";
import { useNavigate } from "react-router-dom";
import { getStatus } from "../helpers/helpers";

export const TestContent = ({test, sendResults}) => {
    const {questions, options} = test;
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [qShown, setQshown] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [userScore, setUserScore] = useState(null);
    const navigate = useNavigate();


    const handleAnswersChange = (e, questionId) => {
        const isMultiple = questions.find(q => q.id === questionId).multiple > 1;
        const {id: answerId} = e.target;
        const index = userAnswers.findIndex(a => a.id === questionId);

        if (isMultiple) {
            if (index >= 0) {
                setUserAnswers(a => {return a.map((el, i) => {
                    if (i === index) {
                        if (el.answers.includes(answerId)) {
                            el.answers = el.answers.filter(a => a !== answerId);
                        } else {
                            el.answers = [...el.answers, answerId];
                        };
                        return el;
                    };
                    return el;
                })});
            } else {
                setUserAnswers(a => {return [...a, {id: questionId, answers: [answerId]}]});
            };
        } else {
            if (index >= 0) {
                setUserAnswers(a => {return a.map(el => {
                    if (el.id === questionId) {
                        el.answers = [answerId];
                        return el;
                    };
                    return el;
                })})
            } else {
                setUserAnswers(a => {return [...a, {id: questionId, answers: [answerId]}]})
            };
        };
    };

    const handleStart = () => {
        setStart(Date.now());
    };

    const nextPrevQuestion = (e) => {
        if (e.target.name === 'prev' && qShown > 0) {
            setQshown(qShown => qShown - 1);
        } else if (e.target.name === 'next' && qShown < questions.length - 1) {
            setQshown(qShown => qShown + 1);
        };
    };

    const getResults = (questions, answers) => {
        let count = 0;

        for (let question of questions) {
            for (let answer of answers){
                if (question.id === answer.id) {
                    const {answers: qA, multiple} = question;
                    const {answers: aA} = answer;
                    for (let qa of qA) {
                        for (let a of aA ) {
                            if (qa.id === a && qa.correct) {
                                // console.log(qa.id, a, qa.correct, multiple);
                                if (multiple > 1) {
                                    count += 1 / multiple;
                                } else {
                                    count ++;
                                };
                            };
                        };
                    };
                };
            };
        };
        return count;
    };

    const handleDoneClick = () => {
        const correctAnswers = getResults(questions, userAnswers);
        const userScore = Number((correctAnswers / questions.length * 100).toFixed());
        setUserScore(userScore);
        setEnd(Date.now());
        const status = getStatus(userScore, options.score);
        sendResults({answers: userAnswers, score: userScore, status, time: Date.now() - start});
    };

    const handleToTestClick = () => {
        navigate('/tests', {replace: true});
    };

    const doneBtnShow = userAnswers.length === questions.length;

    return(
        <Container>
            {!start && !end &&
            <Wrapper>
                <TestInfo test={test} />
                <Button $mt='50px' onClick={handleStart} type='button' text='Start' $bgColor='green' $color='mainFont' />
            </Wrapper>}
            {end && 
            <Wrapper>
                <TestResults results={userScore} start={start} end={end} score={options.score} />
                <Button type='button' $bgColor='hover' $color='active' $mt='50px' text='Back to Tests' onClick={handleToTestClick} />
            </Wrapper>}
            {start && !end && 
            <TestContainer>
                <>
                    <TestList userAnswers={userAnswers} getAnswers={handleAnswersChange} questions={questions} shown={qShown} />
                    <BtnsWrapper>
                        <Button disabled={qShown <= 0} type='button' name='prev' text='Prev' $bgColor='hover' $color='active' onClick={nextPrevQuestion} />
                        {doneBtnShow && <Button onClick={handleDoneClick} type='button' $bgColor='green' $color='mainFont' text='Done' />}
                        <Button disabled={qShown === questions.length - 1} type='button' name='next' text='Next' $bgColor='hover' $color='active' onClick={nextPrevQuestion} />
                    </BtnsWrapper>
                </>
            </TestContainer>}
        </Container>
    )
};