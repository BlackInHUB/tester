import styled from 'styled-components';

export const IconBtn = styled.button`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]}px;
    position: ${props => props.$position ? props.$position : 'static'};
    top: ${props => props.$top ? props.$top : null};
    right: ${props => props.$right ? props.$right : null};
    margin: 0 auto;
    transition: ${({ theme }) => theme.transition.all};

    &:hover {
        color: ${({ theme }) => theme.colors.active};
    };

    &:focus-visible {
        color: ${({ theme }) => theme.colors.active};
    };
`;

export const StyledIcon = styled.svg`
    width: ${props => props.$size ? props.$size : '20px'};
    height: ${props => props.$size ? props.$size : '20px'};
    transition: ${({ theme }) => theme.transition.all};
    fill: ${({ theme }) => theme.colors.mainFont};

    ${IconBtn}:hover & {
        fill: ${({ theme }) => theme.colors.active};
    };

    ${IconBtn}:focus-visible & {
        fill: ${({ theme }) => theme.colors.active};
    }
`;