import styled from 'styled-components';

export const Container = styled.section`
    width: 80%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: ${({ theme }) => theme.space[8]}px;
    padding-bottom: ${({ theme }) => theme.space[5]}px;
    margin: 0 auto;
`;

export const TopWrapper = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.space[6]}px;
`;

export const TestTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize[5]};
    font-weight: ${({ theme }) => theme.fontWeight.m};
`;

export const Btn = styled.button`
    position: ${props => props.$position ? props.$position : 'static'};
    top: 0;
    left: 0;
    outline: none;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: ${({ theme }) => theme.space[2]}px;
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSize[1]};
    color: inherit;
    margin: 0 auto;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.all};

    &:hover {
        color: ${({ theme }) => theme.colors.active};
    };
`;

export const StyledIcon = styled.svg`
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.mainFont};
    transform: ${p => p.open ? 'rotate(180deg)' : 'none'};
    transition: ${({ theme }) => theme.transition.all};

    ${Btn}:hover & {
        fill: ${({ theme }) => theme.colors.active};
    };

    ${Btn}:focus-visible & {
        fill: ${({ theme }) => theme.colors.active};
    };
`;

