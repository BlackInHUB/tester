import { getTime } from "../helpers/helpers";
import { TestInfoList, TestInfoListItem, TestInfoItemTitle, InfoText } from "./TestContent.styled";

export const TestInfo = ({test}) => {
    const {author, questions, options, category, maxScore, bestTime} = test;
    const {score, time} = options;

    return (
        <TestInfoList>
            <TestInfoListItem>
                <TestInfoItemTitle>Category:<InfoText>{category}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            <TestInfoListItem>
                <TestInfoItemTitle>Author:<InfoText>{author.name}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            <TestInfoListItem>
                <TestInfoItemTitle>Questions:<InfoText>{questions.length}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            {score && 
            <TestInfoListItem>
                <TestInfoItemTitle>Pussing score:<InfoText>{score}%</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            }
            {time && 
            <TestInfoListItem>
                <TestInfoItemTitle>Time limit:<InfoText>{time} minutes</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            }
            <TestInfoListItem>
                <TestInfoItemTitle>Max score:<InfoText>{maxScore ? `${maxScore}%` : '-'}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            <TestInfoListItem>
                <TestInfoItemTitle>Best time:<InfoText>{bestTime ? `${getTime(bestTime)}` : '-'}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
        </TestInfoList>
    )
}