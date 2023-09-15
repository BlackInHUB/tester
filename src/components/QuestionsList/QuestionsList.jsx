import { List, ListItem, ImageWrapper, Image, Question, AnswersList, AnswersListItem, ListItemNamber, ListItemWrapper, Wrapper, StyledIcon, BtnsWrapper } from "./QuestionsList.styled";
import { IconButton } from "../reusableComponents/Buttons/IconButton";
import * as helpers from '../helpers/helpers';
import {MdOutlineDone} from 'react-icons/md';

export const QuestionsList = ({questions, onDelete, editQuestion}) => {

    return (
        <List>
            {questions.map(({id: qId, question, image, answers}, i) => 
            <ListItem key={i}>
                <ListItemNamber>#{helpers.questionNumber(i)}</ListItemNamber>
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
                    {(onDelete || editQuestion) && 
                        <BtnsWrapper>
                            <IconButton $type='button' $iconType='edit' onClick={() => editQuestion(qId)} />
                            <IconButton $type='button' $iconType='delete' onClick={() => onDelete(i)} />
                        </BtnsWrapper>
                    }
                </ListItemWrapper>
            </ListItem>)}
        </List>
    );
};