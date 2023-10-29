import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const SelectBtn = styled.button`
    display: flex;
    gap: ${({ theme }) => theme.space[3]}px;
    justify-content: center;
    align-items: center;
    outline: none;
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSize[2]};
    padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;
    cursor: pointer;
    margin: 0 auto;
    transition: ${({ theme }) => theme.transition.all};

    &:hover {
        color: ${({ theme }) => theme.colors.active};
    };

    &:focus-visible {
        color: ${({ theme }) => theme.colors.active};
    };
`;

export const SelectIcon = styled.svg`
    display: block;
    width: 15px;
    height: 15px;
    fill: ${p => p.open ? p.theme.colors.active : p.theme.colors.mainFont};
    transform: ${p => p.open ? 'rotate(180deg)' : 'none'};
    transition: ${({ theme }) => theme.transition.all};

    ${SelectBtn}:hover & {
        fill: ${({ theme }) => theme.colors.active};
    };

    ${SelectBtn}:focus-visible & {
        fill: ${({ theme }) => theme.colors.active};
    };
`;

export const SelectImg = styled.img`
    display: block;
    width: 24px;
    height: 24px;
    border: ${({ theme }) => theme.borders.m} transparent;
    border-radius: ${({ theme }) => theme.radii.c};
    transition: ${({ theme }) => theme.transition.all};

    ${SelectBtn}:hover & {
        border-color: ${({ theme }) => theme.colors.active};
    };

    ${SelectBtn}:focus-visible & {
        border-color: ${({ theme }) => theme.colors.active};
    };
`;

export const OptionsList = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: ${({ theme }) => theme.fontSize[2]};
    padding: ${({ theme }) => theme.space[4]}px;
    border: ${({ theme }) => theme.borders.s} ${({ theme }) => theme.colors.hover};
    border-radius: ${p => p.theme.radii.s};
    background-color: ${({ theme }) => theme.colors.secondaryBG};
    color: ${p => p.theme.colors.secondaryFont};
    z-index: 2;
`;

export const Option = styled.li`
    font-size: inherit;
    transition: ${({ theme }) => theme.transition.all};
    padding: ${({ theme }) => theme.space[3]}px;
    cursor: pointer;

    &:hover,
    :focus-visible {
        background-color: ${({ theme }) => theme.colors.hover};
    };
`;