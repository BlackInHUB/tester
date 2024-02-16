import { styled } from "styled-components";

export const Main = styled.main`
  padding: 0 ${(p) => p.theme.space[8]}px;
  background-color: ${(p) => p.theme.colors.mainBG};
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`;

export const LayoutWrapper = styled.section``;
