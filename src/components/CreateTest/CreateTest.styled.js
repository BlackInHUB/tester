import styled from 'styled-components';

export const Test = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.mainFont};
    width: 100%;
    height: 100%;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Options = styled.div`
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.space[10]}px;
    margin-top: ${({ theme }) => theme.space[8]}px;
`;

export const OptionLabel = styled.label`
    display: flex;
    flex-direction: column;
`;

export const OptionInput = styled.input`
    width: 100%;
    padding: ${({ theme }) => theme.space[3]}px;
    border-radius: ${({ theme }) => theme.radii.s};
    border: ${({ theme }) => theme.borders.s} ${({ theme }) => theme.colors.hover};
    color: inherit;
    font-family: inherit;
    transition: ${({ theme }) => theme.transition.all};
    margin-top: ${({ theme }) => theme.space[4]}px;

    &:hover {
        color: ${({ theme }) => theme.colors.mainFont};
        border-color: ${({ theme }) => theme.colors.active};
    };

    &:focus-visible {
        color: ${({ theme }) => theme.colors.mainFont};
        border-color: ${({ theme }) => theme.colors.active};
    };
`;