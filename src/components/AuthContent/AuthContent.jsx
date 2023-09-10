import { Container, LeftWrapper, RightWrapper, AuthWrapper, AuthNavList, AuthNavItem, AuthNavBtn } from "./AuthContent.styled";
import { Form } from "../reusableComponents/Forms/Form";
import { useState } from "react";
import { useApp } from "../../appContext";
import { notify } from "../../utils/notify";

const initialState = {
    name: '',
    email: '',
    password: '',
    confirm: ''
};

export const AuthContent = () => {
    const [authCase, setAuthCase] = useState('log in');
    const {register, logIn} = useApp();

    const handleAuthNavClick = (e) => {
        setAuthCase(e.target.name);
    };

    const handleSubmit = (authData) => {
        const {password, confirm, email, name} = authData;

        if (authCase === 'sign up') {
            if (password !== confirm) {
                return notify('warning', 'Passwords must match!');
            };
            if (!password || !confirm || !email || !name) {
                return notify('warning', 'All fields must not be empty!');
            };
            return register(authData);
        } else if (authCase === 'log in') {
            if (!password || !email) {
                return notify('warning', 'All fields must not be empty!');
            };
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
                            <AuthNavBtn name='log in' type='button' $active={authCase === 'log in'} onClick={handleAuthNavClick}>LOG IN</AuthNavBtn>
                        </AuthNavItem>
                        <AuthNavItem>
                            <AuthNavBtn name='sign up' type='button' $active={authCase === 'sign up'} onClick={handleAuthNavClick}>SIGN UP</AuthNavBtn>
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