import { TestInfoItemTitle, InfoText } from "./TestContent.styled";
import * as helpers from '../helpers/helpers';

export const TestResults = ({results, score, start, end}) => {
    const time = helpers.getTime(end - start);

    return (
        <>
            {results >= score ? 
            <TestInfoItemTitle>You passed test successfully! 🎉</TestInfoItemTitle> :
            <TestInfoItemTitle>You failed the test.. 😥</TestInfoItemTitle>
            }
            <TestInfoItemTitle>Your score:<InfoText>{score ? `${results}% for the required ${score}%` : `${results}%`}</InfoText></TestInfoItemTitle>
            <TestInfoItemTitle>Your time:<InfoText>{time}</InfoText></TestInfoItemTitle>
        </>
    );
};