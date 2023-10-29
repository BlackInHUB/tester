import { Container, NavWrapper, NavigationLink } from "../components/MyTests/MyTests.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {Loader} from '../components/Loader/Loader';
import { useApp } from "../appContext";

const MyTestsPage = () => {
    const {language} = useApp();

    return (
        <Container>
            <NavWrapper>
                <NavigationLink to='created'>{language === 'EN' ? 'Created' : 'Створені'}</NavigationLink>
                <NavigationLink to='passed'>{language === 'EN' ? 'Passed' : 'Пройдені'}</NavigationLink>
            </NavWrapper>
            <Suspense fallback={<Loader $size='50px' />}>
                <Outlet />
            </Suspense>
        </Container>
    )
};

export default MyTestsPage;