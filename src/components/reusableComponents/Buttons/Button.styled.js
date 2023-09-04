import { styled } from "styled-components";

export const Btn = styled.button`
    padding: ${p => p.theme.space[5]}px ${p => p.theme.space[9]}px;
    border-radius: ${p => p.theme.radii.s};
    font-size: ${p => p.theme.fontSize[2]};
    line-height: ${p => p.theme.lineHeight.l};
    color: ${p => p.theme.colors.mainFont};
    font-weight: ${p => p.theme.fontWeight.m};
    background-color: ${p => p.theme.colors.button};
    border-radius: ${p => p.theme.radii.l};
    transition: ${p => p.theme.transition.all};

    &:hover,
    :focus-visible {
        background-color: ${p => p.theme.colors.hoveredButton};
    }
`

export const StyledIcon = styled.svg`

`