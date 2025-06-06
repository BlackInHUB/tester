import { UserNavWrapper, User, StyledIcon } from './AppBar.styled';
import { Button } from '../reusableComponents/Buttons/Button';
import { RiUser3Line } from 'react-icons/ri';
import { useApp } from '../../appContext';

export const UserNav = () => {
  const { logOut, userData, language } = useApp();

  if (!userData) {
    return;
  }

  const { user } = userData;

  return (
    <UserNavWrapper>
      <User>
        <StyledIcon as={RiUser3Line} />
        {user.name}
      </User>
      <Button
        $iconType="logout"
        text={language === 'EN' ? 'Log Out' : 'Вийти'}
        type="button"
        onClick={logOut}
      />
    </UserNavWrapper>
  );
};
