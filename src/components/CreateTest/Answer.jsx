import { AnswerWrapper, AnswerInput, CorrectAnswerInput } from "./CreateTest.styled";
import { IconButton } from "../reusableComponents/Buttons/IconButton";

export const Answer = ({id, onDelete, value, handleChange, length}) => {
    const {answer, correct} = value;

    return (
        <AnswerWrapper>
            {length > 1 && <IconButton $iconType='delete' id={id} $type='button' onClick={onDelete} />}
            <AnswerInput id={id} name='answer' type='text' value={answer} onChange={handleChange} />
            <CorrectAnswerInput id={id} type='checkbox' name='correct' checked={correct} onChange={handleChange} />
        </AnswerWrapper>
    );
};