import { styled } from "styled-components";
import home_tests from '../../images/home_tests.png';

export const Container = styled.section`
    height: 100%;
    padding: ${p => p.theme.space[5]}px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
`

export const LeftWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RightWrapper = styled.div`
    background-image: url(${home_tests});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`

export const AuthWrapper = styled.div`
    width: 60%;
    height: fit-content;
    background-color: ${p => p.theme.colors.secondaryBG};
    border: ${p => p.theme.borders.s} ${p => p.theme.colors.hover};
    border-radius: ${p => p.theme.radii.s};
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
`

export const AuthNavList = styled.ul`
    width: 100%;
    display: flex;
`

export const AuthNavItem = styled.li`
    width: 50%;
`

export const AuthNavBtn = styled.button`
    width: 100%;
    height: 100%;
    font-size: ${p => p.theme.fontSize[1]};
    /* line-height: ${p => p.theme.lineHeight.l}; */
    font-weight: ${p => p.theme.fontWeight.l};
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${p => p.$active ? p.theme.colors.active : p.theme.colors.mainFont};
    padding: ${p => p.theme.space[7]}px 0px ${p => p.theme.space[6]}px 0px;
    border-bottom: ${p => p.theme.borders.m} ${p => p.$active ? p.theme.colors.active : p.theme.colors.hover};
    transition: ${p => p.theme.transition.all};

    &:hover {
        border-bottom: ${p => p.theme.borders.m} ${p => p.theme.colors.active};
    };

    &:focus-visible {
        border-bottom: ${p => p.theme.borders.m} ${p => p.theme.colors.active};
    };
`
