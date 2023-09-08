import { Btn, StyledIcon } from "./Button.styled";
import {RiLogoutBoxRLine} from 'react-icons/ri';
import {RxPlus} from 'react-icons/rx';

export const Button = ({$iconType, $iconSize, onClick, text, type, $bgColor, $mt, $w}) => {
    return (
        <Btn $bgColor={$bgColor} type={type} onClick={onClick} $w={$w} $mt={$mt}>
            {$iconType && 
                <StyledIcon $iconSize={$iconSize} as={
                    $iconType === 'logout' ? RiLogoutBoxRLine :
                    $iconType === 'plus' ? RxPlus :
                    null}/>}
            {text}
        </Btn>
    );
};