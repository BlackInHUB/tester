import { getCategoryName, getTime } from "../helpers/helpers";
import { TestInfoList, TestInfoListItem, TestInfoItemTitle, InfoText } from "./TestContent.styled";

export const TestInfo = ({test, language, categories}) => {
    const {author, questions, options, category, maxScore, bestTime} = test;
    const {score, time} = options;

    return (
        <TestInfoList>
            <TestInfoListItem>
                <TestInfoItemTitle>{language === 'EN' ? 'Category' : 'Категорія'}:<InfoText>{getCategoryName(language, categories, category)}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            <TestInfoListItem>
                <TestInfoItemTitle>{language === 'EN' ? 'Author' : 'Автор'}:<InfoText>{author.name}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            <TestInfoListItem>
                <TestInfoItemTitle>{language === 'EN' ? 'Questions' : 'Питання'}:<InfoText>{questions.length}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            {score && 
            <TestInfoListItem>
                <TestInfoItemTitle>{language === 'EN' ? 'Passing score' : 'Прохідний бал'}:<InfoText>{score}%</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            }
            {time && 
            <TestInfoListItem>
                <TestInfoItemTitle>{language === 'EN' ? 'Time limit' : 'Час на проходження'}:<InfoText>{time}{language === 'EN' ? ' min.' : 'хв.'}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            }
            <TestInfoListItem>
                <TestInfoItemTitle>{language === 'EN' ? 'Best score' : 'Кращий результат'}:<InfoText>{maxScore ? `${maxScore}%` : '-'}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            <TestInfoListItem>
                <TestInfoItemTitle>{language === 'EN' ? 'Best time' : 'Кращий час'}:<InfoText>{bestTime ? `${getTime(bestTime)}` : '-'}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
        </TestInfoList>
    )
}