import { keyframes, styled } from "styled-components";
import heroImg from '../../images/heroImg.jpg';

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
    height: 100%;
    padding: ${p => p.theme.space[5]}px 0px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
`

export const HeroImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: ${p => p.theme.radii.m};
    background-image: url(${heroImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const HomeTitle = styled.h1`
    font-size: ${p => p.theme.fontSize[10]};
    font-weight: ${p => p.theme.fontWeight.l};
    color: ${p => p.theme.colors.mainFont};
    margin-bottom: 100px;
    animation: ${titleAnimation} 1s;
`