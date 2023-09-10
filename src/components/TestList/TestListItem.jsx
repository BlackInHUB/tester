import {ListItem, Question, AnswersList, AnswersListItem, Answer, AnswerChekbox, ImageWrapper, QuestionImage, QuestionNumber, AnswerLetter, MultipleAnswers} from './TestList.styled';
import * as helpers from '../helpers/helpers';

export const TestListItem = ({q, i, shown, getAnswers, userAnswers}) => {
    const {question, image, answers, id: questionId, multiple} = q;
    const cheks = userAnswers.find(a => a.id === questionId)?.answers;

    const disabled = i !== shown;

    return (
        <ListItem disabled={disabled}>
            <QuestionNumber>Question #{helpers.questionNumber(i)}</QuestionNumber>
            {image && <ImageWrapper><QuestionImage src={image} /></ImageWrapper>}
            <Question>{question}</Question>
            {multiple > 1 && <MultipleAnswers>*Question with multiple answers</MultipleAnswers>}
            <AnswersList>
                {answers.map(({id, answer}, i) => 
                    <AnswersListItem key={id}>
                        <AnswerChekbox onChange={(e) => getAnswers(e, questionId)} id={id} type='checkbox' checked={cheks ? cheks.includes(id) : false} />
                        <AnswerLetter>{helpers.answerLetter(i)}.</AnswerLetter>
                        <Answer>{answer}</Answer>
                    </AnswersListItem>)}
            </AnswersList>
        </ListItem>
    );
};