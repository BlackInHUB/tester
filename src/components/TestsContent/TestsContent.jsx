import { Button } from "../reusableComponents/Buttons/Button";
import { Container, SectionTitle, Sorry, SorryCategory, SorryText } from "./TestsContent.styled";
import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";
import { CreateTest } from "../CreateTest/CreateTest";
import * as testsApi from "../../services/testsApi";
import { useApp } from "../../appContext";
import { TestsList } from "../TestsList/TestsList";
import { notify } from "../../utils/notify";
import { CategoriesSelect } from "../CategoriesSelect/CategoriesSelect";
import { useNavigate, useSearchParams } from "react-router-dom";
import {Loader} from '../Loader/Loader';

export const TestsContent = ({categories}) => {
    const {language, isLoading, setIsLoading} = useApp();
    const [open, setOpen] = useState(false);
    const [tests, setTests] = useState([]);
    const [chosen, setChosen] = useState('All');
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const categoriesForSelect = [{id: 'All', en: 'All', ua: 'Всі'}, ...categories];

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    useEffect(() => {
        setIsLoading(true);

        if (chosen === 'All') {
            testsApi.getTests().then(setTests).finally(() => {
                setIsLoading(false)
            });
        } else {
            setSearchParams(`category=${chosen}`);
            testsApi.getTests(searchParams).then(setTests).finally(() => {
                setIsLoading(false)
            });
        };
    }, [chosen, searchParams, setIsLoading, setSearchParams]);

    const toggleModal = () => {
        setOpen(o => !o);
    };

    const createTestSubmit = (test) => {
        testsApi.create(test).then(response => setTests(tests => {return [response, ...tests]}));
        toggleModal();
        notify('success', `${language === 'EN' ? 'Test successfully created!' : 'Тест успішно створено!'}`)
    };

    const handleClick = (_id) => {
        navigate(`/test/${_id}`, {replace: true});
    };

    return (
        <Container>
            <Button onClick={toggleModal} type='button' $bgColor='hover' $color='active' $iconType='plus' $iconSize='25px' text={language === 'EN' ? 'Create a Test' : 'Створити Тест'} />
            <CategoriesSelect language={language} chosen={chosen} setChosen={setChosen} options={categoriesForSelect} />
            {tests?.length > 0 && <SectionTitle>{language === 'EN' ? 'Available Tests' : 'Доступні тести'}:</SectionTitle>}
            {isLoading ? 
                <Loader $size='50px' /> :
                tests?.length > 0 && !isLoading ?
                    <TestsList categories={categories} language={language} handleClick={handleClick} tests={tests} /> :
                    <Sorry><SorryText>{language === 'EN' ? 'Sorry, but we have no tests in category ' : 'Вибачте, ми не маємо тестів в категорії '}<SorryCategory>{chosen.name}</SorryCategory> :(</SorryText></Sorry>
            }
            {open && <Modal toggleModal={toggleModal} children={<CreateTest language={language} onSubmit={createTestSubmit} categories={categories} />} />}
        </Container>
    );
};