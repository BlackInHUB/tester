import styled from 'styled-components';

export const Container = styled.section`
    width: 80%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    padding-top: ${({ theme }) => theme.space[8]}px;
    padding-bottom: ${({ theme }) => theme.space[5]}px;
    margin: 0 auto;
`;