import styled from 'styled-components';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContainer = styled.div`
    position: relative;
    width: ${props => props.$w ? props.$w : '70%'};
    height: ${props => props.$h ? props.$h : '80%'};
    border: ${({ theme }) => theme.borders.s} ${({ theme }) => theme.colors.hover};
    border-radius: ${({ theme }) => theme.radii.m};
    padding: ${({ theme }) => theme.space[6]}px;
    padding-top: ${({ theme }) => theme.space[11]}px;
    background-color: ${({ theme }) => theme.colors.secondaryBG};
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    padding: ${({ theme }) => theme.space[3]}px;
`

export const StyledIcon = styled.svg`
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.mainFont};
    transition: ${({ theme }) => theme.transition.all};

    ${CloseBtn}:hover & {
        fill: ${({ theme }) => theme.colors.active};
    };

    ${CloseBtn}:focus-visible & {
        fill: ${({ theme }) => theme.colors.active};
    }
`;