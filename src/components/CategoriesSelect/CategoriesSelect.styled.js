import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 25%;
    margin: 0 auto;
    /* width: 80%; */
`

export const SelectLabel = styled.p`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.space[2]}px;
    font-weight: ${({ theme }) => theme.fontWeight.m};
`

export const SelectBtn = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    outline: none;
    font-family: inherit;
    padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;
    border: ${({ theme }) => theme.borders.s} ${({ theme }) => theme.colors.hover};
    border-radius: ${({ theme }) => theme.radii.s};
    background-color: ${({ theme }) => theme.colors.secondaryBG};
    cursor: pointer;
    margin: 0 auto;
    transition: ${({ theme }) => theme.transition.all};

    &:hover,
    :focus-visible {
        /* border-color: ${p => p.theme.colors.hover};
        background-color: ${p => p.theme.colors.secondaryBG}; */
    };
`

export const SelectValue = styled.span`
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSize[3]};
`

export const SelectIcon = styled.svg`
    width: 15px;
    height: 15px;
    fill: ${p => p.open ? p.theme.colors.active : p.theme.colors.mainFont};
    transform: ${p => p.open ? 'rotate(180deg)' : 'none'};
`

export const OptionsList = styled.ul`
    max-height: 500px;
    overflow: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 20px 0;
    border: ${({ theme }) => theme.borders.s} ${({ theme }) => theme.colors.hover};
    border-radius: ${p => p.theme.radii.s};
    background-color: ${({ theme }) => theme.colors.secondaryBG};
    color: ${p => p.theme.colors.secondaryFont};
    z-index: 2;
`;

export const Option = styled.li`
    padding-left: 20px;
    transition: ${({ theme }) => theme.transition.all};
    cursor: pointer;

    &:hover,
    :focus-visible {
        background-color: ${({ theme }) => theme.colors.hover};
    };
`;