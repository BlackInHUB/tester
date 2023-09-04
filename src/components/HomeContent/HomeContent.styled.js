import { keyframes, styled } from "styled-components";

const titleAnimation = keyframes`
    /* 0% {transform: scale(0.25); border-width: 0%};
    75% {transform: scale(1.1) rotate(0deg)};
    100% {transform: scale(1) rotate(360deg)}; */
    from {
        transform: translate(-100%, 0);
    } to {
        transform: translate(0, 0)
    }
`

export const Container = styled.section`
    text-align: center;
`

export const HomeTitle = styled.h1`
    font-size: ${p => p.theme.fontSize[10]};
    font-weight: ${p => p.theme.fontWeight.l};
    margin-bottom: 100px;
    animation: ${titleAnimation} 2s;
`