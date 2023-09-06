import { Btn, StyledIcon } from "./Button.styled";
import {RiLogoutBoxRLine} from 'react-icons/ri';

export const Button = ({$iconType, onClick, text, type, $bgColor, $mt, $w}) => {
    return (
        <Btn $bgColor={$bgColor} type={type} onClick={onClick} $w={$w} $mt={$mt}>
            {$iconType && <StyledIcon as={$iconType === 'logout' ? RiLogoutBoxRLine : null}/>}
            {text}
        </Btn>
    );
};