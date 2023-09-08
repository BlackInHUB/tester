import { List } from "./TestsList.styled";
import { TestsListItem } from "./TestsListItem";

export const TestsList = ({tests}) => {
    return (
        <List>
            {tests.map((t, i) => <TestsListItem key={i} test={t} />)}
        </List>
    );
};