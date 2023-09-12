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

export const Title = styled.p`
    display: block;
    color: ${({ theme }) => theme.colors.secondaryFont};
`;

export const Item = styled.p`
    display: block;
    color: ${props => props.$status === 'success' ? props.theme.colors.greenHover : props.$status === 'fail' ? props.theme.colors.active : 'inherit'};
`