import { useState } from "react";
import { OptionInput, OptionLabel, Options, Test, BottomWrapper, TopWrapper } from "./CreateTest.styled";
import { TestQuestion } from "./TestQuestion";
import { Button } from "../reusableComponents/Buttons/Button";
import { Modal } from "../Modal/Modal";
import { QuestionsList } from "../QuestionsList/QuestionsList";
import { CategoriesSelect } from "../CategoriesSelect/CategoriesSelect";

export const CreateTest = ({onSubmit, cat}) => {
    const [questions, setQuestions] = useState([]);
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState({score: null, time: null});
    const [chosenCategory, setChosenCategory] = useState({name: 'None'});
    const categories = cat.filter(c => c.name !== 'All');

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
            <TopWrapper>
                <CategoriesSelect options={categories} chosen={chosenCategory} setChosen={setChosenCategory} />
                <Button $w='fit-content' onClick={toggleModal} type='button' $iconType='plus' $color='active' text='Add question' $bgColor='hover' />
            </TopWrapper>
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
            <Button disabled={questions.length <= 0} onClick={() => onSubmit({questions, options, category: chosenCategory.name})} $mt='20px' $w='fit-content' type='button' text='Create Test' $bgColor='green' $color='mainFont' />
            </BottomWrapper>
            {open && <Modal $w='60%' $h='70%' toggleModal={toggleModal} children={<TestQuestion handleSubmit={submitQuestionAdd} toggleModal={toggleModal} />} />}
        </Test>
    )
}