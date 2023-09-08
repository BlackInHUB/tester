import { useState } from "react";
import { Test } from "./CreateTest.styled";
import { TestQuestion } from "./TestQuestion";
import { Button } from "../reusableComponents/Buttons/Button";
import { Modal } from "../Modal/Modal";
import { QuestionsList } from "../QuestionsList/QuestionsList";

export const CreateTest = ({onSubmit}) => {
    const [questions, setQuestions] = useState([]);
    const [open, setOpen] = useState(false);

    const toggleModal = () => {
        setOpen(o => !o);
    };

    const submitQuestionAdd = (newQ) => {
        setQuestions(questions => [...questions, newQ])
    };

    const deleteQuestion = (idx) => {
        setQuestions(questions => questions.filter((q, i) => i !== idx));
    };

    return (
        <Test>
            <Button $w='fit-content' onClick={toggleModal} type='button' $iconType='plus' text='Add question' $bgColor='hover' />
            {questions.length > 0 && <QuestionsList questions={questions} onDelete={deleteQuestion} />}
            {open && <Modal $w='60%' $h='70%' toggleModal={toggleModal} children={<TestQuestion handleSubmit={submitQuestionAdd} toggleModal={toggleModal} />} />}
            {questions.length > 0 && <Button onClick={() => onSubmit(questions)} $mt='20px' $w='fit-content' type='button' text='Create Test' $bgColor='hover' />}
        </Test>
    )
}