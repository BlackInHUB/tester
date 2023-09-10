import { List } from "./TestList.styled";
import { TestListItem } from "./TestListItem";

export const TestList = ({questions, shown, getAnswers, userAnswers}) => {

    return (
        <List>
            {questions.map((q, i) => <TestListItem userAnswers={userAnswers} getAnswers={getAnswers} key={i} q={q} i={i} shown={shown} />)}
        </List>
    );
};