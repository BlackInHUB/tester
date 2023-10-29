import { Button } from "../Buttons/Button";
import { Frm, Input, InputsWrapper } from "./Form.styled";
import { useForm } from "../../../hooks/useForm";

export const Form = ({authCase, onSubmit, initialState, language}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
    const {name, email, password, confirm} = state;

    return (
        <Frm onSubmit={handleSubmit}>
            <InputsWrapper>
                {authCase === 'sign up' && <Input name='name' value={name} type='text' placeholder={language === 'EN' ? "Your name" : 'Ім"я'} onChange={handleChange} />}
                <Input name='email' value={email} type='email' placeholder={language === 'EN' ? "Your email" : 'Поштова адреса'} onChange={handleChange} />
                <Input name='password' value={password} type='password' placeholder={language === 'EN' ? "Your password" : 'Введіть пароль'} onChange={handleChange} autoComplete="false" />
                {authCase === 'sign up' && <Input name='confirm' value={confirm} type='password' placeholder={language === 'EN' ? "Confirm your password" : 'Підтвердіть пароль'} onChange={handleChange} autoComplete="false" />}
            </InputsWrapper>
            <Button $bgColor='green' $color='mainFont' $w='100%' type='submit' text={authCase === 'sign up' ? (language === 'EN' ? 'Create an Account' : 'Створити акаунт') : (language === 'EN' ? 'Log In' : 'Увійти')} />
        </Frm>
    );
};