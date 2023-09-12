import styled from 'styled-components';

export const List = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ListItem = styled.li`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 25%);
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

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.p`
    display: block;
    color: ${({ theme }) => theme.colors.secondaryFont};
`;

export const Item = styled.p`
    display: block;
    color: ${props => props.$status === 'success' ? props.theme.colors.greenHover : props.$status === 'fail' ? props.theme.colors.active : 'inherit'};
`;

export const SortBtn = styled.button`
    outline: none;
    background-color: transparent;
    padding: ${({ theme }) => theme.space[2]}px;
    margin-left: ${({ theme }) => theme.space[2]}px;
`;

export const StyledIcon = styled.svg`
    width: 15px;
    height: 15px;
    fill: ${({ theme }) => theme.colors.secondaryFont};
    vertical-align: top;

    ${SortBtn}:hover & {
        fill: ${({ theme }) => theme.colors.active};
    };

    ${SortBtn}:focus-visible & {
        fill: ${({ theme }) => theme.colors.active};
    };
`;