import { Btn } from "./Button.styled";

export const Button = ({onClick, text, type}) => {
    return (
        <Btn type={type} onClick={onClick}>{text}</Btn>
    )
}