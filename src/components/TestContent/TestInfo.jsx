import { useApp } from "../../appContext";
import { TestInfoList, TestInfoListItem, TestInfoItemTitle, InfoText } from "./TestContent.styled";

export const TestInfo = ({test}) => {
    const {users} = useApp();
    const {author, questions, options, category, maxScore, bestTime} = test;
    const {score, time} = options;
    
    const user = users?.find(u => u._id === author);

    return (
        <TestInfoList>
            <TestInfoListItem>
                <TestInfoItemTitle>Category:<InfoText>{category}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            <TestInfoListItem>
                <TestInfoItemTitle>Author:<InfoText>{user?.name}</InfoText></TestInfoItemTitle>
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
                <TestInfoItemTitle>Time for test:<InfoText>{time} minutes</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            }
            <TestInfoListItem>
                <TestInfoItemTitle>Max score:<InfoText>{maxScore ? `${maxScore}%` : '-'}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
            <TestInfoListItem>
                <TestInfoItemTitle>Best time:<InfoText>{bestTime ? `${bestTime}` : '-'}</InfoText></TestInfoItemTitle>
            </TestInfoListItem>
        </TestInfoList>
    )
}