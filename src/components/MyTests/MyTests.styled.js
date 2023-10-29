import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    min-height: 100%;
`;

export const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: ${({ theme }) => theme.space[2]}px;
    justify-content: center;
`;

export const NavigationLink = styled(NavLink)`
    padding: ${({ theme }) => theme.space[4]}px ${({ theme }) => theme.space[4]}px;
    width: 25%;
    outline: none;
    font-size: ${({ theme }) => theme.fontSize[4]};
    color: ${({ theme }) => theme.colors.secondaryFont};
    border-bottom: ${({ theme }) => theme.borders.m} ${({ theme }) => theme.colors.secondaryFont};
    transition: ${({ theme }) => theme.transition.all};
    text-decoration: none;
    text-align: center;

    &:hover:not(.active) {
        border-color: ${({ theme }) => theme.colors.hover};
        color: ${({ theme }) => theme.colors.active};
    };

    &:focus-visible:not(.active) {
        border-color: ${({ theme }) => theme.colors.hover};
        color: ${({ theme }) => theme.colors.active};
    };

    &.active {
        border-color: ${({ theme }) => theme.colors.active};
        color: ${({ theme }) => theme.colors.active};
    }
`;