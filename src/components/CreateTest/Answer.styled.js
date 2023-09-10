import styled from 'styled-components';

export const AnswerWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const AnswerInput = styled.input`
    width: 100%;
    padding: ${({ theme }) => theme.space[3]}px;
    border-radius: ${({ theme }) => theme.radii.s};
    border: ${({ theme }) => theme.borders.s} ${({ theme }) => theme.colors.hover};
    color: inherit;
    font-family: inherit;
    transition: ${({ theme }) => theme.transition.all};

    &:hover {
        color: ${({ theme }) => theme.colors.mainFont};
        border-color: ${({ theme }) => theme.colors.active};
    };

    &:focus-visible {
        color: ${({ theme }) => theme.colors.mainFont};
        border-color: ${({ theme }) => theme.colors.active};
    };
`;

export const CorrectAnswerInput = styled.input`
    -webkit-appearance: none;
    appearance: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: ${({ theme }) => theme.borders.m} ${({ theme }) => theme.colors.mainFont};
    border-radius: 10%;
    

    &:checked::before {
        display: block;
        content: '';
        width: 15px;
        height: 15px;
        box-shadow: inset 1em 1em ${({ theme }) => theme.colors.active};
        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transition: ${({ theme }) => theme.transition.all};
    };    
`;