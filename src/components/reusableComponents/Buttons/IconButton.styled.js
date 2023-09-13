import styled from 'styled-components';

export const IconBtn = styled.button`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]}px;
    position: ${props => props.$position ? props.$position : 'static'};
    top: ${props => props.$top ? props.$top : null};
    right: ${props => props.$right ? props.$right : null};
    left: ${props => props.$left ? props.$left : null};
    margin: 0 auto;
    transition: ${({ theme }) => theme.transition.all};

    &:hover:not(:disabled) {
        color: ${({ theme }) => theme.colors.active};
    };

    &:focus-visible:not(:disabled) {
        color: ${({ theme }) => theme.colors.active};
    };

    &:disabled {
        cursor: auto;
    }
`;

export const StyledIcon = styled.svg`
    width: ${props => props.$size ? props.$size : '20px'};
    height: ${props => props.$size ? props.$size : '20px'};
    transition: ${({ theme }) => theme.transition.all};
    fill: ${({ theme }) => theme.colors.mainFont};

    ${IconBtn}:hover:not(:disabled) & {
        fill: ${({ theme }) => theme.colors.active};
    };

    ${IconBtn}:focus-visible:not(:disabled) & {
        fill: ${({ theme }) => theme.colors.active};
    };

    ${IconBtn}:disabled & {
        fill: ${({ theme }) => theme.colors.secondaryFont};
    }
`;