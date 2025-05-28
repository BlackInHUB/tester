import {
  List,
  ListItem,
  ImageWrapper,
  Image,
  Question,
  AnswersList,
  AnswersListItem,
  ListItemNumber,
  ListItemWrapper,
  Wrapper,
  StyledIcon,
  BtnsWrapper,
  AnswerLetter,
  IconWrapper,
} from './QuestionsList.styled';
import { IconButton } from '../reusableComponents/Buttons/IconButton';
import * as helpers from '../helpers/helpers';
import { MdOutlineDone } from 'react-icons/md';

export const QuestionsList = ({ questions, onDelete, editQuestion }) => {
  return (
    <List>
      {questions.map(({ id: qId, question, image, answers }, i) => (
        <ListItem key={i}>
          <ListItemNumber>#{helpers.questionNumber(i)}</ListItemNumber>
          <ListItemWrapper>
            <Wrapper>
              {image && (
                <ImageWrapper>
                  <Image src={image} />
                </ImageWrapper>
              )}
              <Question>{question}</Question>
              <AnswersList>
                {answers.map(({ answer, id, correct }, i) => (
                  <AnswersListItem key={id}>
                    <p>
                      <AnswerLetter>{`${helpers.answerLetter(i)}.`}</AnswerLetter>
                      {answer}
                    </p>
                    {correct && (
                      <IconWrapper>
                        <StyledIcon as={MdOutlineDone} />
                      </IconWrapper>
                    )}
                  </AnswersListItem>
                ))}
              </AnswersList>
            </Wrapper>
            {(onDelete || editQuestion) && (
              <BtnsWrapper>
                <IconButton $type="button" $iconType="edit" onClick={() => editQuestion(qId)} />
                <IconButton $type="button" $iconType="delete" onClick={() => onDelete(i)} />
              </BtnsWrapper>
            )}
          </ListItemWrapper>
        </ListItem>
      ))}
    </List>
  );
};
