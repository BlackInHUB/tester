import { Container, LeftWrapper, RightWrapper, AuthWrapper, AuthNavList, AuthNavItem, AuthNavBtn } from "./AuthContent.styled";
import { Form } from "../reusableComponents/Forms/Form";
import { useState } from "react";
import { useApp } from "../../appContext";

const initialState = {
    name: '',
    email: '',
    password: '',
    confirm: ''
};

export const AuthContent = () => {
    const [authCase, setAuthCase] = useState('sign up');
    const {register, logIn} = useApp();

    const handleAuthNavClick = (e) => {
        setAuthCase(e.target.name);
    };

    const handleSubmit = (authData) => {
        if (authCase === 'sign up') {
            const {password, confirm} = authData;
            if (password !== confirm) {
                return alert('Passwords must match!')
            };
            return register(authData);
        } else if (authCase === 'log in') {
            return logIn(authData);
        } else {
            return;
        };
    };


    return (
        <Container>
            <LeftWrapper>
                <AuthWrapper>
                    <AuthNavList>
                        <AuthNavItem>
                            <AuthNavBtn name='sign up' type='button' $active={authCase === 'sign up'} onClick={handleAuthNavClick}>SIGN UP</AuthNavBtn>
                        </AuthNavItem>
                        <AuthNavItem>
                            <AuthNavBtn name='log in' type='button' $active={authCase === 'log in'} onClick={handleAuthNavClick}>LOG IN</AuthNavBtn>
                        </AuthNavItem>
                    </AuthNavList>
                    <Form initialState={initialState} onSubmit={handleSubmit} authCase={authCase} />
                </AuthWrapper>
            </LeftWrapper>
            <RightWrapper>
                
            </RightWrapper>
        </Container>
    )
}