import { Nav, NavList, NavListItem, Link } from "./AppBar.styled";

export const AppBar = () => {
    return (
        <Nav>
            <NavList>
                <NavListItem>
                    <Link to='/'>Home</Link>
                </NavListItem>
                <NavListItem>
                    <Link to='/tests'>Tests</Link>
                </NavListItem>
            </NavList>
        </Nav>
    )
}