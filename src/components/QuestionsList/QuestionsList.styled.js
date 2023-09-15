import styled from 'styled-components';

export const List = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    gap: ${({ theme }) => theme.space[4]}px;
    overflow: auto;
    margin-top: ${({ theme }) => theme.space[6]}px;
`;

export const ListItem = styled.li`
    display: flex;
    gap: ${({ theme }) => theme.space[3]}px;
    align-items: start;
`;

export const ListItemNamber = styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.l};
`;

export const ListItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: ${({ theme }) => theme.space[4]}px;
    border: ${({ theme }) => theme.borders.s} ${({ theme }) => theme.colors.hover};
    border-radius: ${({ theme }) => theme.radii.s};
    display: flex;
    flex-direction: column;
    align-content: space-between;
`;

export const Wrapper = styled.div`
    height: 100%;
    margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const ImageWrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: contain;
    margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Question = styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.l};
    margin-bottom: ${({ theme }) => theme.space[3]}px;
`

export const AnswersList = styled.ul`
    
`;

export const AnswersListItem = styled.li`
    display: flex;
    align-items: center;
`

export const StyledIcon = styled.svg`
    fill: ${({ theme }) => theme.colors.greenHover};
    width: 20px;
    height: 20px;
    margin-left: ${({ theme }) => theme.space[3]}px;
`;

export const BtnsWrapper = styled.div`
    width: fit-content;
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.space[5]}px;
    margin: ${({ theme }) => theme.space[4]}px auto 0;
`;