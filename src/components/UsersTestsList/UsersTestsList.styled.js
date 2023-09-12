import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
    width: 80%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    padding-top: ${({ theme }) => theme.space[8]}px;
    padding-bottom: ${({ theme }) => theme.space[5]}px;
    margin: 0 auto;
`;

export const TestsList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
`;


export const Title = styled.p`
    display: block;
    color: ${({ theme }) => theme.colors.secondaryFont};
`;

export const TestsListItem = styled.li`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    justify-items: center;
    padding: ${({ theme }) => theme.space[3]}px 0;

    &:first-child {
        border-color: ${({ theme }) => theme.colors.secondaryFont};
        margin-bottom: ${({ theme }) => theme.space[3]}px;
    };

    &:not(:last-child) {
        border-bottom: ${({ theme }) => theme.borders.m} ${({ theme }) => theme.colors.hover};
    }
`;

export const Item = styled.p`
    display: block;
`

export const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[3]}px;
    outline: none;
    text-decoration: none;
    transition: ${({ theme }) => theme.transition.all};

    &:hover {
        color: ${({ theme }) => theme.colors.active};
    };

    &:focus-visible {
        color: ${({ theme }) => theme.colors.active};
    }
`;

export const StyledIcon = styled.svg`
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.mainFont};
    transition: ${({ theme }) => theme.transition.all};

    ${Link}:hover & {
        fill: ${({ theme }) => theme.colors.active};
    };

    ${Link}:focus-visible & {
        fill: ${({ theme }) => theme.colors.active};
    };
`;