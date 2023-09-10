import { Button } from "../reusableComponents/Buttons/Button";
import { Container, SectionTitle } from "./TestsContent.styled";
import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";
import { CreateTest } from "../CreateTest/CreateTest";
import { create, getTests } from "../../services/testsApi";
import { useApp } from "../../appContext";
import { TestsList } from "../TestSList/TestsList";
import { notify } from "../../utils/notify";

export const TestsContent = () => {
    const [open, setOpen] = useState(false);
    const [tests, setTests] = useState([]);
    const {isLoggedIn} = useApp();

    useEffect(() => {
        if (!isLoggedIn) {
            return;
        };

        getTests().then(setTests);
    }, [isLoggedIn]);

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
            {tests.length > 0 && <SectionTitle>Available Tests:</SectionTitle>}
            {tests.length > 0 && <TestsList tests={tests} />}
            {open && <Modal toggleModal={toggleModal} children={<CreateTest onSubmit={createTestSubmit} />} />}
        </Container>
    )
};