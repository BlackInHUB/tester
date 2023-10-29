import { styled } from "styled-components";

export const Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${p => p.$w};
    height: fit-content;
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[8]}px;
    border-radius: ${p => p.theme.radii.s};
    font-size: ${p => p.theme.fontSize[2]};
    color: ${props => props.$color ? props.theme.colors[props.$color] : props.theme.colors.mainFont};
    font-weight: ${p => p.theme.fontWeight.l};
    background-color: ${p => p.$bgColor ? p.theme.colors[p.$bgColor] : 'transparent'};
    border-radius: ${p => p.theme.radii.l};
    margin-top: ${p => p.$mt ? p.$mt : null};
    transition: ${p => p.theme.transition.all};

    &:hover:not(:disabled) {
        color: ${p => !p.$color ? p.theme.colors.active : p.theme.colors.lightFont };
        background-color: ${p => p.$bgColor === 'hover' ? p.theme.colors.active : p.$bgColor === 'green' ? p.theme.colors.greenHover : null};
    };

    &:focus-visible:not(:disabled) {
        color: ${p => !p.$color ? p.theme.colors.active : p.theme.colors.lightFont };
        background-color: ${p => p.$bgColor === 'hover' ? p.theme.colors.active : p.$bgColor === 'green' ? p.theme.colors.greenHover : null};
    };

    &:disabled {
        cursor: auto;
        color: ${({ theme }) => theme.colors.secondaryFont};
        background-color: transparent;
    };
`

export const StyledIcon = styled.svg`
    vertical-align: top;
    margin-right: 10px;
    fill: ${p => p.theme.colors.mainFont};
    width: ${props => props.$iconSize ? props.$iconSize : '20px'};;
    height: ${props => props.$iconSize ? props.$iconSize : '20px'};;
    transition: ${p => p.theme.transition.all};

    ${Btn}:hover & {
        fill: ${p => p.theme.colors.active};
    };

    ${Btn}:focus-visible & {
        fill: ${p => p.theme.colors.active};
    }
`