import { useApp } from "../../appContext";
import { Nav, NavList, NavListItem, NavListLink, Container, Logo, LogoIcon, NavWrapper } from "./AppBar.styled";
import { UserNav } from "./UserNav";
import {SiTestcafe} from 'react-icons/si';

export const AppBar = () => {
    const {isLoggedIn} = useApp();

    return (
        <Container>
            <NavWrapper>
            <Logo to='/'><LogoIcon as={SiTestcafe} />Tester</Logo>
            <Nav>
                <NavList>
                    <NavListItem>
                        <NavListLink to='/'>Home</NavListLink>
                    </NavListItem>
                    <NavListItem>
                        <NavListLink to='/tests'>Tests</NavListLink>
                    </NavListItem>
                    {!isLoggedIn && 
                    <NavListItem>
                        <NavListLink to='/authentication'>Account</NavListLink>
                    </NavListItem>}
                    {isLoggedIn && 
                    <NavListItem>
                        <NavListLink to='/mytests'>My Tests</NavListLink>
                    </NavListItem>}
                </NavList>
            </Nav>
            </NavWrapper>
            {isLoggedIn && <UserNav />}
        </Container>
    )
}