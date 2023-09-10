import { Button } from "../reusableComponents/Buttons/Button";
import { Container, SectionTitle } from "./TestsContent.styled";
import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";
import { CreateTest } from "../CreateTest/CreateTest";
import { create, getCategories, getTests } from "../../services/testsApi";
import { useApp } from "../../appContext";
import { TestsList } from "../TestSList/TestsList";
import { notify } from "../../utils/notify";
import { CategoriesSelect } from "../CategoriesSelect/CategoriesSelect";
import { useSearchParams } from "react-router-dom";

export const TestsContent = () => {
    const [open, setOpen] = useState(false);
    const [tests, setTests] = useState([]);
    const [categories, setCategories] = useState([{name: 'All'}]);
    const [chosen, setChosen] = useState({name: 'All'});
    const {isLoggedIn} = useApp();
    const [searchParams, setSearchParams] = useSearchParams();

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
        toggleModal();
        create(test).then(response => setTests(tests => {return [response, ...tests]}));
        notify('success', 'Test successfully created!')
    };

    return (
        <Container>
            <Button onClick={toggleModal} type='button' $bgColor='hover' $color='active' $iconType='plus' $iconSize='25px' text='Create a Test' />
            {tests?.length > 0 && <SectionTitle>Available Tests:</SectionTitle>}
            <CategoriesSelect chosen={chosen} setChosen={setChosen} options={categories} />
            {tests?.length > 0 && <TestsList tests={tests} />}
            {open && <Modal categories={categories} toggleModal={toggleModal} children={<CreateTest onSubmit={createTestSubmit} />} />}
        </Container>
    )
};