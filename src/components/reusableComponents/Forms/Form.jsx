import { Button } from "../Buttons/Button";
import { Frm, Input, InputsWrapper } from "./Form.styled";
import { useForm } from "../../../hooks/useForm";

export const Form = ({authCase, onSubmit, initialState}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
    const {name, email, password, confirm} = state;

    return (
        <Frm onSubmit={handleSubmit}>
            <InputsWrapper>
                {authCase === 'sign up' && <Input name='name' value={name} type='text' placeholder="Your name" onChange={handleChange} />}
                <Input name='email' value={email} type='email' placeholder="Your email" onChange={handleChange} />
                <Input name='password' value={password} type='password' placeholder="Your password" onChange={handleChange} autoComplete="false" />
                {authCase === 'sign up' && <Input name='confirm' value={confirm} type='password' placeholder="Confirm your password" onChange={handleChange} autoComplete="false" />}
            </InputsWrapper>
            <Button $bgColor='hover' $w='100%' type='submit' text={authCase === 'sign up' ? 'Create an Account' : 'Log In'} />
        </Frm>
    );
};