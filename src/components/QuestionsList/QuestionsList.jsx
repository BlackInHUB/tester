import { List, ListItem, ImageWrapper, Image, Question, AnswersList, AnswersListItem, ListItemNamber, ListItemWrapper, Wrapper } from "./QuestionsList.styled";
import { IconButton } from "../reusableComponents/Buttons/IconButton";
import * as helpers from '../helpers/helpers';

export const QuestionsList = ({questions, onDelete}) => {

    return (
        <List>
            {questions.map(({question, image, answers}, i) => 
            <ListItem key={i}>
                <ListItemNamber>{helpers.questionNumber(i)}</ListItemNamber>
                <ListItemWrapper>
                    <Wrapper>
                        {image && 
                        <ImageWrapper>
                            <Image src={image} />
                        </ImageWrapper>}
                        <Question>{question}</Question>
                        <AnswersList>
                            {answers.map(({answer, id}, i) => 
                            <AnswersListItem key={id}>{`${helpers.answerLetter(i)}. ${answer}`}</AnswersListItem>)}
                        </AnswersList>
                    </Wrapper>
                    <IconButton $type='button' $iconType='delete' onClick={() => onDelete(i)} />
                </ListItemWrapper>
            </ListItem>)}
        </List>
    );
};