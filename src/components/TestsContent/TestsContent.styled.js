import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    height: 100%;
    padding: ${p => p.theme.space[5]}px 0px;
`;

export const SectionTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize[5]};
    font-weight: ${({ theme }) => theme.fontWeight.m};
    text-align: center;
    margin-top: ${({ theme }) => theme.space[10]}px;
`
