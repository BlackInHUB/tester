import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 80%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.space[8]}px;
  padding-bottom: ${({ theme }) => theme.space[8]}px;
`;

export const TestContainer = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.space[6]}px;
  width: 75%;
  height: 100%;
  border: ${({ theme }) => theme.borders.s} ${({ theme }) => theme.colors.hover};
  border-radius: ${({ theme }) => theme.radii.s};
  background-color: ${({ theme }) => theme.colors.secondaryBG};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BtnsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.space[6]}px;
  width: 50%;
  height: 100%;
  border: ${({ theme }) => theme.borders.s} ${({ theme }) => theme.colors.hover};
  border-radius: ${({ theme }) => theme.radii.s};
  background-color: ${({ theme }) => theme.colors.secondaryBG};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TestInfoList = styled.ul``;

export const TestInfoListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[4]}px;
  }
`;

export const TestInfoItemTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize[4]};
  font-weight: ${({ theme }) => theme.fontWeight.l};
`;

export const InfoText = styled.span`
  color: ${({ theme }) => theme.colors.active};
  font-size: ${({ theme }) => theme.fontSize[4]};
  font-weight: ${({ theme }) => theme.fontWeight.m};
  margin-left: ${({ theme }) => theme.space[4]}px;
`;
