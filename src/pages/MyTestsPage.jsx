import { useState, useEffect } from "react";
import { Container, NavWrapper, NavigationLink } from "../components/MyTests/MyTests.styled";
import { useParams } from "react-router-dom";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import * as testsApi from '../services/testsApi.js';
import {Loader} from '../components/Loader/Loader';

const MyTestsPage = () => {
    const params = useParams();
    const [tests, setTests] = useState(null);

    useEffect(() => {
        if (params.userstests === 'created') {
            testsApi.getUserCreatedTests().then(setTests);
        } else if (params.userstests === 'passed') {
            testsApi.getUserPassedTests().then(setTests);
        } else {
            return;
        };
        
    }, [params.userstests]);

    return (
        <Container>
            <NavWrapper>
                <NavigationLink to='created'>Created</NavigationLink>
                <NavigationLink to='passed'>Passed</NavigationLink>
            </NavWrapper>
            <Suspense fallback={<Loader $size='50px' />}>
                <Outlet context={{tests, params}} />
            </Suspense>
        </Container>
    )
};

export default MyTestsPage;