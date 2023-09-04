import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Nav = styled.nav`

`

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 44px;
    padding: ${p => p.theme.space[8]}px 0px;
`

export const NavListItem = styled.li`
    
`

export const Link = styled(NavLink)`
    padding: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSize[3]};
    line-height: ${p => p.theme.lineHeight.l};
    font-weight: ${p => p.theme.fontWeight.m};
    color: ${p => p.theme.colors.mainFont};
    text-decoration: none;
    cursor: pointer;
    transition: ${p => p.theme.transition.all};

    &:hover:not(.active),
    :focus-visible:not(.active) {
        color: ${p => p.theme.colors.secondaryFont};
    }

    &.active {
        color: ${p => p.theme.colors.secondaryFont};
    }
`