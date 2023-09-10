import { useState } from "react";
import { OptionInput, OptionLabel, Options, Test, BottomWrapper } from "./CreateTest.styled";
import { TestQuestion } from "./TestQuestion";
import { Button } from "../reusableComponents/Buttons/Button";
import { Modal } from "../Modal/Modal";
import { QuestionsList } from "../QuestionsList/QuestionsList";

export const CreateTest = ({onSubmit}) => {
    const [questions, setQuestions] = useState([]);
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState({score: null, time: null})

    const toggleModal = () => {
        setOpen(o => !o);
    };

    const submitQuestionAdd = (newQ) => {
        setQuestions(questions => [...questions, newQ])
    };

    const deleteQuestion = (idx) => {
        setQuestions(questions => questions.filter((q, i) => i !== idx));
    };

    const handleOptionsChange = (e) => {
        const {name, value} = e.target;
        setOptions(o => {return {...o, [name]: value}});
    };

    return (
        <Test>
            <Button $w='fit-content' onClick={toggleModal} type='button' $iconType='plus' $color='active' text='Add question' $bgColor='hover' />
            {questions.length > 0 && <QuestionsList questions={questions} onDelete={deleteQuestion} />}
            <BottomWrapper>
            <Options>
                <OptionLabel>Passing score, % (optionaly)
                    <OptionInput onChange={handleOptionsChange} name='score' type='text' />
                </OptionLabel>
                <OptionLabel>Time for test, m (optionaly)
                    <OptionInput onChange={handleOptionsChange} name='time' type='text' />
                </OptionLabel>
            </Options>
            <Button disabled={questions.length <= 0} onClick={() => onSubmit({questions, options})} $mt='20px' $w='fit-content' type='button' text='Create Test' $bgColor='green' />
            </BottomWrapper>
            {open && <Modal $w='60%' $h='70%' toggleModal={toggleModal} children={<TestQuestion handleSubmit={submitQuestionAdd} toggleModal={toggleModal} />} />}
        </Test>
    )
}