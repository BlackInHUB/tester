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

export const TestsContent = ({categories}) => {
    const [open, setOpen] = useState(false);
    const [tests, setTests] = useState([]);
    const [chosen, setChosen] = useState({name: 'All'});
    const {setIsLoading, isLoading} = useApp();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    useEffect(() => {
        setIsLoading(true);

        if (chosen.name === 'All') {
            testsApi.getTests().then(setTests).finally(setIsLoading(false));
        } else {
            setSearchParams(`category=${chosen.name}`);
            testsApi.getTests(searchParams).then(setTests).finally(setIsLoading(false));
        }
        
    }, [chosen, searchParams, setIsLoading, setSearchParams]);

    const toggleModal = () => {
        setOpen(o => !o);
    };

    const createTestSubmit = (test) => {
        testsApi.create(test).then(response => setTests(tests => {return [response, ...tests]}));
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
            {tests?.length <= 0 && !isLoading && <Sorry><SorryText>Sorry, but we have no tests in category <SorryCategory>{chosen.name}</SorryCategory> yet :(</SorryText></Sorry>}
            {tests?.length > 0 && <SectionTitle>Available Tests:</SectionTitle>}
            {tests?.length > 0 && <TestsList handleClick={handleClick} tests={tests} />}
            {open && <Modal toggleModal={toggleModal} children={<CreateTest onSubmit={createTestSubmit} cat={categories} />} />}
        </Container>
    )
};