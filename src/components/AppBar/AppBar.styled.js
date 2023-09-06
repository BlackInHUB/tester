import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${p => p.theme.space[5]}px 0px;
    border-bottom: ${p => p.theme.borders.m} ${p => p.theme.colors.hover};
`

export const NavWrapper = styled.div`
    display: flex;
    align-items: baseline;
    gap: 40px;
`

export const Logo = styled(Link)`
    display: block;
    gap: 10px;
    font-size: ${p => p.theme.fontSize[5]};
    line-height: ${p => p.theme.lineHeight.xl};
    font-weight: ${p => p.theme.fontWeight.l};
    color: ${p => p.theme.colors.mainFont};
    text-decoration: none;
    outline: none;
`

export const LogoIcon = styled.svg`
    fill: ${p => p.theme.colors.active};
    width: 35px;
    height: 35px;
    vertical-align: top;
    margin-right: 10px;
`

export const Nav = styled.nav`
    display: flex;
    gap: 30px;
`

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const NavListItem = styled.li`

`

export const NavListLink = styled(NavLink)`
    display: block;
    outline: none;
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[6]}px;
    font-size: ${p => p.theme.fontSize[3]};
    /* line-height: ${p => p.theme.lineHeight.l}; */
    font-weight: ${p => p.theme.fontWeight.m};
    color: ${p => p.theme.colors.mainFont};
    text-decoration: none;
    cursor: pointer;
    transition: ${p => p.theme.transition.all};

    &:hover:not(.active),
    :focus-visible:not(.active) {
        color: ${p => p.theme.colors.active};
    }

    &.active {
        color: ${p => p.theme.colors.active};
        /* border-bottom: ${p => p.theme.borders.m} ${p => p.theme.colors.active}; */
    }
`

export const UserNavWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const User = styled.p`
    font-size: ${p => p.theme.fontSize[3]};
    line-height: ${p => p.theme.lineHeight.l};
    font-weight: ${p => p.theme.fontWeight.m};
    color: ${p => p.theme.colors.mainFont};
`

export const StyledIcon = styled.svg`
    vertical-align: top;
    margin-right: 10px;
    fill: ${p => p.theme.colors.mainFont};
    width: 20px;
    height: 20px;
    transition: ${p => p.theme.transition.all};
`