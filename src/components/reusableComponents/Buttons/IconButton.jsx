import { IconBtn, StyledIcon } from "./IconButton.styled";
import {RiDeleteBin2Line, RiEditLine, RiFileUploadLine} from 'react-icons/ri';
import {PiPlusSquareLight} from 'react-icons/pi';

export const IconButton = ({disabled, $iconType, $type, id, $position, $top, $right, $left, $size, onClick, children}) => {
    return (
        <IconBtn disabled={disabled} id={id} type={$type} $position={$position} $top={$top} $left={$left} $right={$right} onClick={onClick} >
            <StyledIcon $size={$size} as={
                $iconType === 'delete' ? RiDeleteBin2Line :
                $iconType === 'plus' ? PiPlusSquareLight :
                $iconType === 'upload' ? RiFileUploadLine :
                $iconType === 'edit' ? RiEditLine :
                null
            } />
            {children}
        </IconBtn>
    );
};