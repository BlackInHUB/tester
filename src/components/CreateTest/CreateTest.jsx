import { useState } from "react";
import { OptionInput, OptionLabel, Options, Test, BottomWrapper, TopWrapper } from "./CreateTest.styled";
import { TestQuestion } from "./TestQuestion";
import { Button } from "../reusableComponents/Buttons/Button";
import { Modal } from "../Modal/Modal";
import { QuestionsList } from "../QuestionsList/QuestionsList";
import { CategoriesSelect } from "../CategoriesSelect/CategoriesSelect";
import { notify } from "../../utils/notify";

export const CreateTest = ({onSubmit, categories, language}) => {
    const [questions, setQuestions] = useState([]);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [options, setOptions] = useState({score: null, time: null});
    const [chosenCategory, setChosenCategory] = useState('None');

    const toggleModal = () => {
        setOpen(o => !o);
    };

    const handleAddQuestion = (newQ) => {
        setQuestions(questions => [...questions, newQ])
    };

    const handleEditQuestion = (newQ) => {
        setQuestions(questions => {return questions.map(q => q.id === newQ.id ? newQ : q)});
    };

    const deleteQuestion = (idx) => {
        setQuestions(questions => questions.filter((q, i) => i !== idx));
    };

    const handleOptionsChange = (e) => {
        const {name, value} = e.target;
        setOptions(o => {return {...o, [name]: value}});
    };
    
    const handleCreateSubmit = () => {
        const {score, time} = options;
        
        if(((score && score <= 0) || (score && isNaN(score))) || ((time && time <= 0) || (time && isNaN(time)))) {
            return notify('error', `${language === 'EN' ? 'Options must be positive numbers!' : 'Опції мають бути позитивними цілими числами!'}`);
        };
        
        onSubmit({questions, options, category: chosenCategory});
    };

    const toggleEdit = (id) => {
        return edit ? setEdit(null) : setEdit(id);
    };

    return (
        <Test>
            <TopWrapper>
                <CategoriesSelect language={language} options={categories} chosen={chosenCategory} setChosen={setChosenCategory} />
                <Button $w='fit-content' onClick={toggleModal} type='button' $iconType='plus' $color='active' text={language === 'EN' ? 'Add question' : 'Додати питання'} $bgColor='hover' />
            </TopWrapper>
            {questions.length > 0 && <QuestionsList questions={questions} editQuestion={toggleEdit} onDelete={deleteQuestion} />}
            <BottomWrapper>
            <Options>
                <OptionLabel>{language === 'EN' ? 'Passing score, % (optionaly)' : 'Прохідний бал, % (опційно)'}
                    <OptionInput onChange={handleOptionsChange} name='score' type='text' />
                </OptionLabel>
                <OptionLabel>{language === 'EN' ? 'Time for test, min (optionaly)' : 'Час на тест, хв (опційно)'}
                    <OptionInput onChange={handleOptionsChange} name='time' type='text' />
                </OptionLabel>
            </Options>
            <Button disabled={questions.length <= 0} onClick={handleCreateSubmit} $mt='20px' $w='fit-content' type='button' text={language === 'EN' ? 'Create Test' : 'Створити тест'} $bgColor='green' $color='mainFont' />
            </BottomWrapper>
            {open && <Modal $w='60%' $h='70%' toggleModal={toggleModal} children={<TestQuestion handleSubmit={handleAddQuestion} toggleModal={toggleModal} />} />}
            {edit && <Modal $w='60%' $h='70%' toggleModal={toggleEdit} children={<TestQuestion handleSubmit={handleEditQuestion} edit={edit} state={questions.find(q => q.id === edit)} toggleEdit={toggleEdit} />} />}
        </Test>
    )
}