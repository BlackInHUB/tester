import { Backdrop, CloseBtn, ModalContainer, StyledIcon } from "./Modal.styled";
import {RiCloseLine} from 'react-icons/ri';

export const Modal = ({toggleModal, children, $w, $h}) => {

    return (
        <Backdrop>
            <ModalContainer $h={$h} $w={$w}>
                <CloseBtn onClick={toggleModal}><StyledIcon as={RiCloseLine} /></CloseBtn>
                {children}
            </ModalContainer>
        </Backdrop>
    )
};