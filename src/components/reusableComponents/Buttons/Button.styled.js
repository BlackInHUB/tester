import { styled } from "styled-components";

export const Btn = styled.button`
    width: ${p => p.$w};
    height: fit-content;
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[9]}px;
    border-radius: ${p => p.theme.radii.s};
    font-size: ${p => p.theme.fontSize[2]};
    line-height: ${p => p.theme.lineHeight.l};
    color: ${p => p.$bgColor ? p.theme.colors.active : p.theme.colors.mainFont};
    font-weight: ${p => p.theme.fontWeight.m};
    background-color: ${p => p.$bgColor ? p.theme.colors[p.$bgColor] : 'transparent'};
    border-radius: ${p => p.theme.radii.l};
    margin-top: ${p => p.$mt ? p.$mt : null};
    transition: ${p => p.theme.transition.all};

    &:hover {
        color: ${p => p.$bgColor ? p.theme.colors.lightFont : p.theme.colors.active};
        background-color: ${p => p.$bgColor ? p.theme.colors.active : null};
    };

    &:focus-visible {
        color: ${p => p.$bgColor ? p.theme.colors.lightFont : p.theme.colors.active};
        background-color: ${p => p.$bgColor ? p.theme.colors.active : null};
    }
`

export const StyledIcon = styled.svg`
    vertical-align: top;
    margin-right: 10px;
    fill: ${p => p.theme.colors.mainFont};
    width: 20px;
    height: 20px;
    transition: ${p => p.theme.transition.all};

    ${Btn}:hover & {
        fill: ${p => p.theme.colors.active};
    };

    ${Btn}:focus-visible & {
        fill: ${p => p.theme.colors.active};
    }
`