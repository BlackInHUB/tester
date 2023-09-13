import {UserNavWrapper, User, StyledIcon} from './AppBar.styled';
import { Button } from "../reusableComponents/Buttons/Button";
import {RiUser3Line} from 'react-icons/ri';
import { useApp } from '../../appContext';

export const UserNav = () => {
    const {logOut, userData} = useApp();

    const {user} = userData;

    if(!user) {
        return;
    };

    return (
        <UserNavWrapper>
            <User><StyledIcon as={RiUser3Line} />{user.name}</User>
            <Button $iconType='logout' text='Log Out' type='button' onClick={logOut} />
        </UserNavWrapper>
    )
}