import { styled } from "styled-components";
import heroImg from '../../images/heroImg.jpg';

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
    min-height: 100%;
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
`