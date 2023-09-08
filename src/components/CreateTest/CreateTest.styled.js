import styled from 'styled-components';

export const TestWrapper = styled.div`
    width: 80%;
    overflow: auto;
`;

export const Test = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.mainFont};
    width: 100%;
    height: 100%;
`;

export const TestForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding: ${({ theme }) => theme.space[6]}px;
    border: ${({ theme }) => theme.borders.s} ${({ theme }) => theme.colors.hover};
    border-radius: ${({ theme }) => theme.radii.s};
    margin-bottom: ${({ theme }) => theme.space[5]}px;
    background-color: ${({ theme }) => theme.colors.mainBG};
    overflow: auto;
`;

export const QuestionWrapper = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    justify-items: center;
    gap: ${({ theme }) => theme.space[3]}px;
`;

export const QLabel = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeight.l};
`;

export const Question = styled.textarea`
    height: 100px;
    outline: none;
    padding: ${({ theme }) => theme.space[3]}px;
    resize: none;
    border-radius: ${({ theme }) => theme.radii.s};
    border: ${({ theme }) => theme.borders.s} ${({ theme }) => theme.colors.hover};
    margin-bottom: ${({ theme }) => theme.space[3]}px;
    margin-bottom: ${({ theme }) => theme.space[4]}px;
    color: ${({ theme }) => theme.colors.mainFont};
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

export const UploadLabel = styled.label`
    position: relative;
    font-weight: ${({ theme }) => theme.fontWeight.l};
`;

export const UploadInput = styled.input`
    display: none;
`;

export const PreviewImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const AnswerWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const ALabel = styled.p`
    margin-bottom: ${({ theme }) => theme.space[3]}px;
`

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

`;

export const BtnsWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin-top: ${({ theme }) => theme.space[8]}px;
    margin-left: auto;
    margin-right: auto;
`;