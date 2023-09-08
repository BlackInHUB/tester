import { List, ListItem, ImageWrapper, Image, Question, AnswersList, AnswersListItem, ListItemNamber, ListItemWrapper, Wrapper } from "./QuestionsList.styled";
import { IconButton } from "../reusableComponents/Buttons/IconButton";

export const QuestionsList = ({questions, onDelete}) => {

    const questionNumber = (i) => {
        return i + 1;
    };

    const answerLetter = (i) => {
        return String.fromCharCode('A'.charCodeAt() + i);
    };

    return (
        <List>
            {questions.map(({question, image, answers}, i) => 
            <ListItem key={i}>
                <ListItemNamber>{questionNumber(i)}</ListItemNamber>
                <ListItemWrapper>
                    <Wrapper>
                        {image && 
                        <ImageWrapper>
                            <Image src={image} />
                        </ImageWrapper>}
                        <Question>{question}</Question>
                        <AnswersList>
                            {answers.map(({answer, id}, i) => 
                            <AnswersListItem key={id}>{`${answerLetter(i)}. ${answer}`}</AnswersListItem>)}
                        </AnswersList>
                    </Wrapper>
                    <IconButton $type='button' $iconType='delete' onClick={() => onDelete(i)} />
                </ListItemWrapper>
            </ListItem>)}
        </List>
    );
};