import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: ${({ theme }) => theme.space[6]}px;
    right: ${({ theme }) => theme.space[6]}px;
    font-size: ${({ theme }) => theme.fontSize[2]};
    color: ${({ theme }) => theme.colors.active};
`;