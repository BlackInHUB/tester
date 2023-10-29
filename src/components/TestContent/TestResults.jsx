import { TestInfoItemTitle, InfoText } from "./TestContent.styled";
import * as helpers from '../helpers/helpers';

export const TestResults = ({results, score, start, end, language}) => {
    const time = helpers.getTime(end - start);

    return (
        <>
            {results >= score ? 
            <TestInfoItemTitle>{language === 'EN' ? 'You passed test successfully!' : 'Ви успішно склали тест!'} 🎉</TestInfoItemTitle> :
            <TestInfoItemTitle>{language === 'EN' ? 'You failed the test..' : 'Тест провалено..'} 😥</TestInfoItemTitle>
            }
            <TestInfoItemTitle>{language === 'EN' ? 'Your score' : 'Ваш результат'}:<InfoText>{score ? `${results}% ${language === 'EN' ? 'for the required' : 'з необхідних'} ${score}%` : `${results}%`}</InfoText></TestInfoItemTitle>
            <TestInfoItemTitle>{language === 'EN' ? 'Your time' : 'Ваш час'}:<InfoText>{time}</InfoText></TestInfoItemTitle>
        </>
    );
};