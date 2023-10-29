import { AnswersLabel, AnswersLabelSpan, BtnsWrapper, PreviewImg, QLabel, QuestionWrapper, TestForm, TestWrapper, UploadInput, UploadLabel, Question, UploadBtn, StyledIcon } from "./TestQuestion.styled";
import { Answer } from "./Answer";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { Button } from "../reusableComponents/Buttons/Button";
import { upload } from "../../services/testsApi";
import { IconButton } from "../reusableComponents/Buttons/IconButton";
import { notify } from "../../utils/notify";
import {RiFileUploadLine} from 'react-icons/ri';
import { useApp } from "../../appContext";

export const TestQuestion = ({handleSubmit, toggleModal, edit, state, toggleEdit}) => {
    const [question, setQuestion] = useState(state?.question ? state.question : '');
    const [file, setFile] = useState(null);
    const [answers, setAnswers] = useState(state?.answers ? state.answers : [{id: nanoid(), answer: '', correct: false}]);
    const ref = useRef();
    const {language} = useApp();

    const addAnswer = () => {
        setAnswers(a => [...a, {id: nanoid(), answer: '', correct: false}]);
    };

    const deleteAnswer = (e) => {
        e.preventDefault();
        const {id} = e.currentTarget;

        setAnswers(answers => answers.filter(a => a.id !== id));
    };

    const handleUploadClick = (e) => {
        e.preventDefault();
        ref.current.click();
    };

    const handleAnswerChange = (e) => {
        const {id, name, type, value, checked} = e.target;
        setAnswers(answers => answers.map(a => {
            if (a.id  === id) {
                if (type === 'checkbox') {
                    a[name] = checked;
                } else {
                    a[name] = value;
                }
            };
            return a;
        }));
    };

    const handleQuestionChange = (e) => {
        e.preventDefault();
        setQuestion(e.target.value);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        
        if (!e.target.files[0]) {
            return;
        };

        setFile(e.target.files[0])
    };

    const handleCleanUp = (e) => {
        e.preventDefault();
        setQuestion('');
        setAnswers([{id: nanoid(), answer: '', correct: false}]);
        setFile(null);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        let image;

        if (answers.length < 2) {
            return notify('error', `${language === 'EN' ? 'Question must have at lest 2 answers!' : 'Питання повинно мати як мінімум 2 відповіді!'}`);
        };
        if (answers.find(a => a.answer === '')) {
            return notify('error', `${language === 'EN' ? 'Answers must not be empty!' : 'Відповідь не може бути породньою!'}`);
        };
        if (!answers.find(a => a.correct)) {
            return notify('error', `${language === 'EN' ? 'You must mark at least 1 correct answer!' : 'Ви маєте відмітити хоча б одну вірну відповідь!'}`);
        };

        if (file) {
            const data = new FormData();
            data.append('image', file);
            const result = await upload(data);
            image = result.image;
        };
        const multiple = answers.filter(a => a.correct).length;
        
        if (edit) {
            handleSubmit({id: state.id, question, image: image ? image : state.image, answers, multiple});
            handleCleanUp(e);
            toggleEdit();
        } else {
            handleSubmit({id: nanoid(), question, image, answers, multiple});
            handleCleanUp(e);
            toggleModal();
        };
    };

    return(
        <TestWrapper>
            <TestForm onSubmit={onSubmit} encType="multipart/form-data">
                <QuestionWrapper>
                    <QLabel htmlFor='question'>{language === 'EN' ? 'Question:' : 'Питання:'}
                        <Question id='question' value={question} onChange={handleQuestionChange} />
                    </QLabel>
                    <UploadLabel htmlFor='upload'>{language === 'EN' ? 'Or/And:' : 'Або (та):'}
                        <UploadInput ref={ref} id='upload' type='file' onChange={handleUpload} />
                        <UploadBtn type='button' onClick={handleUploadClick}>
                            {(file || state?.image) ? <PreviewImg src={file ? URL.createObjectURL(file) : state.image} /> : <StyledIcon as={RiFileUploadLine} />}
                        </UploadBtn>
                    </UploadLabel>
                </QuestionWrapper>
                <AnswersLabel>{language === 'EN' ? 'Answers:' : 'Відповіді:'}<AnswersLabelSpan>{language === 'EN' ? 'Mark correct answer (can be multiple)' : 'Відмітьте правильну відповідь (можливо декілька)'} ✔</AnswersLabelSpan></AnswersLabel>
                {answers.map(({id, ...value}) => <Answer length={answers.length} key={id} id={id} value={value} handleChange={handleAnswerChange} onDelete={deleteAnswer} />)}
                <IconButton $iconType='plus' $type='button' onClick={addAnswer} $size='25px'>{language === 'EN' ? 'Add Answer' : 'Додати відповідь'}</IconButton>
                <BtnsWrapper>
                    <Button type='submit' text={edit ? (language === 'EN' ? 'Edit' : 'Редагувати') : (language === 'EN' ? 'Add' : 'Додати')} $bgColor='green' $color='mainFont' $w='fit-content' />
                    <Button type='button' text={language === 'EN' ? 'Clean up' : 'Очистити'} $bgColor='hover' $color='active' $w='fit-content' onClick={handleCleanUp} />
                </BtnsWrapper>
            </TestForm>
        </TestWrapper>
    );
};