import { useApp } from "../../appContext";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { Nav, NavList, NavListItem, NavListLink, Container, Logo, LogoIcon, NavWrapper } from "./AppBar.styled";
import { UserNav } from "./UserNav";
import {SiTestcafe} from 'react-icons/si';

export const AppBar = () => {
    const {isLoggedIn, isLoading, language} = useApp();

    return (
        <Container>
            <NavWrapper>
            <Logo to='/'><LogoIcon as={SiTestcafe} />Tester</Logo>
            <Nav>
                <NavList>
                    <NavListItem>
                        <NavListLink to='/'>{language === 'EN' ? 'Home' : 'Головна'}</NavListLink>
                    </NavListItem>
                    <NavListItem>
                        <NavListLink to='/tests'>{language === 'EN' ? 'Tests' : 'Тести'}</NavListLink>
                    </NavListItem>
                    {!isLoggedIn && !isLoading && 
                    <NavListItem>
                        <NavListLink to='/authentication'>{language === 'EN' ? 'Account' : 'Акаунт'}</NavListLink>
                    </NavListItem>}
                    {isLoggedIn && 
                    <NavListItem>
                        <NavListLink to='/mytests'>{language === 'EN' ? 'My Tests' : 'Мої Тести'}</NavListLink>
                    </NavListItem>}
                </NavList>
            </Nav>
            </NavWrapper>
            <LanguageSwitcher  />
            {isLoggedIn && <UserNav />}
        </Container>
    )
}