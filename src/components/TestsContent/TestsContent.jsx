import { Button } from "../reusableComponents/Buttons/Button";
import { Container, SectionTitle, Sorry, SorryCategory, SorryText } from "./TestsContent.styled";
import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";
import { CreateTest } from "../CreateTest/CreateTest";
import { create, getCategories, getTests } from "../../services/testsApi";
import { useApp } from "../../appContext";
import { TestsList } from "../TestsList/TestsList";
import { notify } from "../../utils/notify";
import { CategoriesSelect } from "../CategoriesSelect/CategoriesSelect";
import { useNavigate, useSearchParams } from "react-router-dom";

export const TestsContent = () => {
    const [open, setOpen] = useState(false);
    const [tests, setTests] = useState([]);
    const [categories, setCategories] = useState([{name: 'All'}]);
    const [chosen, setChosen] = useState({name: 'All'});
    const {isLoggedIn} = useApp();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        getCategories().then(response => setCategories(cat => {return [...cat, ...response]}));
    }, []);

    useEffect(() => {
        if (!isLoggedIn) {
            return;
        };

        if (chosen.name === 'All') {
            getTests().then(setTests);
        } else {
            setSearchParams(`category=${chosen.name}`);
            getTests(searchParams).then(setTests);
        }
        
    }, [chosen, isLoggedIn, searchParams, setSearchParams]);

    const toggleModal = () => {
        setOpen(o => !o);
    };

    const createTestSubmit = (test) => {
        create(test).then(response => setTests(tests => {return [response, ...tests]}));
        toggleModal();
        notify('success', 'Test successfully created!')
    };

    const handleClick = (_id) => {
        navigate(`/test/${_id}`, {replace: true});
    };

    return (
        <Container>
            <Button onClick={toggleModal} type='button' $bgColor='hover' $color='active' $iconType='plus' $iconSize='25px' text='Create a Test' />
            <CategoriesSelect chosen={chosen} setChosen={setChosen} options={categories} />
            {tests?.length <= 0 && <Sorry><SorryText>Sorry, but we have no tests in category <SorryCategory>{chosen.name}</SorryCategory> yet :(</SorryText></Sorry>}
            {tests?.length > 0 && <SectionTitle>Available Tests:</SectionTitle>}
            {tests?.length > 0 && <TestsList handleClick={handleClick} tests={tests} />}
            {open && <Modal toggleModal={toggleModal} children={<CreateTest onSubmit={createTestSubmit} cat={categories} />} />}
        </Container>
    )
};