import { ALabel, BtnsWrapper, PreviewImg, QLabel, QuestionWrapper, TestForm, TestWrapper, UploadInput, UploadLabel } from "./CreateTest.styled";
import { Answer } from "./Answer";
import { useRef, useState } from "react";
import { Question } from "./CreateTest.styled";
import { nanoid } from "nanoid";
import { Button } from "../reusableComponents/Buttons/Button";
import { upload } from "../../services/testsApi";
import { IconButton } from "../reusableComponents/Buttons/IconButton";

export const TestQuestion = ({handleSubmit, toggleModal}) => {
    const [question, setQuestion] = useState('');
    const [file, setFile] = useState(null);
    const [answers, setAnswers] = useState([{id: nanoid(), answer: '', correct: false}]);
    const ref = useRef();

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
        setFile(e.target.files[0]);
    };

    const handleCleanUp = (e) => {
        e.preventDefault();
        setQuestion('');
        setAnswers([{id: nanoid(), answer: '', correct: false}]);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        let image;
        if (file) {
            const data = new FormData();
            data.append('image', file);
            image = await upload(data);
        };
        handleSubmit({question, ...image, answers});
        handleCleanUp(e);
        toggleModal();
    };

    return(
        <TestWrapper>
            <TestForm onSubmit={onSubmit} encType="multipart/form-data">
                <QuestionWrapper>
                    <QLabel htmlFor='question'>Question:
                        <Question id='question' value={question} onChange={handleQuestionChange} />
                    </QLabel>
                    <UploadLabel htmlFor='upload'>Or:
                        <UploadInput ref={ref} id='upload' type='file' onChange={handleUpload} />
                        <IconButton $iconType='upload' $type='button' onClick={handleUploadClick} $size='100px' />
                        {file && <PreviewImg src={URL.createObjectURL(file)} />}
                    </UploadLabel>
                </QuestionWrapper>
                <ALabel>Answers:</ALabel>
                {answers.map(({id, ...value}) => <Answer length={answers.length} key={id} id={id} value={value} handleChange={handleAnswerChange} onDelete={deleteAnswer} />)}
                <IconButton $iconType='plus' $type='button' onClick={addAnswer} $size='25px'>Add Answer</IconButton>
                <BtnsWrapper>
                    <Button type='submit' text='Done' $bgColor='hover' $w='fit-content' />
                    <Button type='button' text='Clean up' $bgColor='hover' $w='fit-content' onClick={handleCleanUp} />
                </BtnsWrapper>
            </TestForm>
        </TestWrapper>
    );
};