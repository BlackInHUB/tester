import { List, ListItem, ImageWrapper, Image, Question, AnswersList, AnswersListItem, ListItemNamber, ListItemWrapper, Wrapper, StyledIcon } from "./QuestionsList.styled";
import { IconButton } from "../reusableComponents/Buttons/IconButton";
import * as helpers from '../helpers/helpers';
import {MdOutlineDone} from 'react-icons/md';

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
                            {answers.map(({answer, id, correct}, i) => 
                            <AnswersListItem key={id}>{`${helpers.answerLetter(i)}. ${answer}`}{correct && <StyledIcon as={MdOutlineDone} />}</AnswersListItem>)}
                        </AnswersList>
                    </Wrapper>
                    <IconButton $type='button' $iconType='delete' onClick={() => onDelete(i)} />
                </ListItemWrapper>
            </ListItem>)}
        </List>
    );
};