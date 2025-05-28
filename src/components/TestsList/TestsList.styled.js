import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  gap: ${({ theme }) => theme.space[5]}px;
  margin-top: ${({ theme }) => theme.space[8]}px;
`;

export const ListItem = styled.li`
  width: 100%;
  padding: ${({ theme }) => theme.space[4]}px;
  border: ${({ theme }) => theme.borders.s} ${({ theme }) => theme.colors.hover};
  border-radius: ${({ theme }) => theme.radii.s};
  transition: ${({ theme }) => theme.transition.all};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme }) => theme.colors.active};
  }

  &:focus-visible {
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme }) => theme.colors.active};
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.mainFont};
  font-weight: ${({ theme }) => theme.fontWeight.l};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.active};
  margin-left: ${({ theme }) => theme.space[2]}px;
  font-weight: ${({ theme }) => theme.fontWeight.s};
`;
