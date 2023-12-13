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
    margin-bottom: ${({ theme }) => theme.space[4]}px;
`

export const Sorry = styled.div`
    padding: ${({ theme }) => theme.space[4]}px;
    background-color: ${({ theme }) => theme.colors.secondaryBG};
    border-radius: ${({ theme }) => theme.radii.s};
    /* margin-top: ${({ theme }) => theme.space[10]}px; */
`;

export const SorryText = styled.p`
    
`;

export const SorryCategory = styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.l};
`