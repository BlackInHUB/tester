import { styled } from "styled-components";

export const Frm = styled.form`
    width: 100%;
    padding: ${p => p.theme.space[8]}px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${p => p.theme.colors.mainFont};
`

export const InputsWrapper = styled.div`
    height: 295px;
    margin-bottom: ${p => p.theme.space[8]}px;
`

export const Input = styled.input`
    width: 100%;
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[7]}px;
    border: ${p => p.theme.borders.m} ${p => p.theme.colors.hover};
    border-radius: ${p => p.theme.radii.l};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${p => p.theme.fontSize[2]};
    line-height: ${p => p.theme.lineHeight.l};
    font-weight: ${p => p.theme.fontWeight.s};
    color: ${p => p.theme.colors.mainFont};
    transition: ${p => p.theme.transition.all};

    &::placeholder {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        font-weight: inherit;
    };

    &:hover {
        border-color: ${p => p.theme.colors.active};
    };

    &:focus-visible {
        border-color: ${p => p.theme.colors.active};
        color: ${p => p.theme.colors.mainFont};
    };

    &:not(:last-child) {
        margin-bottom: ${p => p.theme.space[8]}px;
    };
`

