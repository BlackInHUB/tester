import { styled } from "styled-components";

export const Container = styled.footer`
    padding: ${p => p.theme.space[6]}px;
    border-top: ${p => p.theme.borders.m} ${p => p.theme.colors.hover};
`

export const Copyright = styled.p`
    text-align: center;
    font-size: ${p => p.theme.fontSize[0]};
    color: ${p => p.theme.colors.mainFont};
`