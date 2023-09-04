import { styled } from "styled-components";

export const Main = styled.main`
    /* padding: ${p => p.theme.space[8]}px ${p => p.theme.space[8]}px; */
    background-color: ${p => p.theme.colors.mainBGrgba};
    box-shadow: 0px 0px 22px 3px rgba(0,0,0,0.75);
    width: 80%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`