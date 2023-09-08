import { IconBtn, StyledIcon } from "./IconButton.styled";
import {RiDeleteBin2Line} from 'react-icons/ri';
import { RiFileUploadLine } from 'react-icons/ri';
import {PiPlusSquareLight} from 'react-icons/pi';

export const IconButton = ({$iconType, $type, id, $position, $top, $right, $size, onClick, children}) => {
    return (
        <IconBtn id={id} type={$type} $position={$position} $top={$top} $right={$right} onClick={onClick} >
            <StyledIcon $size={$size} as={
                $iconType === 'delete' ? RiDeleteBin2Line :
                $iconType === 'plus' ? PiPlusSquareLight :
                $iconType === 'upload' ? RiFileUploadLine :
                null
            } />
            {children}
        </IconBtn>
    );
};