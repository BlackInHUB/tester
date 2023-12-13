import styled from 'styled-components';

export const List = styled.ul`
    width: 100%;
    height: 100%;
    overflow: auto;
`;

export const ListItem = styled.li`
    display: ${props => props.disabled ? 'none' : 'block'};
    width: 100%;
`;

export const QuestionNumber = styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.l};
    margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const QuestionImage = styled.img`
    max-width: auto;
    max-height: 300px;
    object-fit: cover;
`;

export const Question = styled.p`
    font-size: ${({ theme }) => theme.fontSize[4]};
    font-weight: ${({ theme }) => theme.fontWeight.l};
    text-align: center;
    margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const MultipleAnswers = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.secondaryFont};
    margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const AnswersList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[3]}px;
    padding-bottom: ${({ theme }) => theme.space[5]}px;
    margin-top: ${({ theme }) => theme.space[8]}px;
`;

export const AnswersListItem = styled.li`
    
`;

export const AnswerListItemLabel = styled.label`
    display: flex;
    align-items: flex-end;
    gap: ${({ theme }) => theme.space[3]}px;
`

export const AnswerLetter = styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.l};
`;

export const Answer = styled.p`

`;

export const AnswerChekbox = styled.input`
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