import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
    100% {transform: rotate(1turn)};
`;

export const Spinner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    opacity: 0.8;
    display: grid;
    place-items: center;

    &::before {
        content: '';
        position: absolute;
        box-sizing: border-box;
        width: ${props => props.$size ? props.$size : '30px'};
        height: ${props => props.$size ? props.$size : '30px'};
        border: ${({ theme }) => theme.borders.l} ${({ theme }) => theme.colors.hover};
        border-bottom-color: ${({ theme }) => theme.colors.active};
        border-radius: ${({ theme }) => theme.radii.c};
        animation: ${spinner} 1s linear infinite;
    };
`;