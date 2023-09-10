import { Btn, StyledIcon } from "./Button.styled";
import {RiLogoutBoxRLine} from 'react-icons/ri';
import {RxPlus} from 'react-icons/rx';

export const Button = ({disabled, $iconType, $iconSize, onClick, text, type, $bgColor, $color, $mt, name, $w}) => {
    return (
        <Btn disabled={disabled} name={name} $bgColor={$bgColor} type={type} onClick={onClick} $w={$w} $mt={$mt} $color={$color}>
            {$iconType && 
                <StyledIcon $iconSize={$iconSize} as={
                    $iconType === 'logout' ? RiLogoutBoxRLine :
                    $iconType === 'plus' ? RxPlus :
                    null}/>}
            {text}
        </Btn>
    );
};