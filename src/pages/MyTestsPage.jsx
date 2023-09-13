import { Container, NavWrapper, NavigationLink } from "../components/MyTests/MyTests.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {Loader} from '../components/Loader/Loader';

const MyTestsPage = () => {

    return (
        <Container>
            <NavWrapper>
                <NavigationLink to='created'>Created</NavigationLink>
                <NavigationLink to='passed'>Passed</NavigationLink>
            </NavWrapper>
            <Suspense fallback={<Loader $size='50px' />}>
                <Outlet />
            </Suspense>
        </Container>
    )
};

export default MyTestsPage;