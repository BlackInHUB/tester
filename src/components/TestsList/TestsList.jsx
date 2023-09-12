import { List } from "./TestsList.styled";
import { TestsListItem } from "./TestsListItem";

export const TestsList = ({tests, handleClick}) => {
    return (
        <List>
            {tests.map((t, i) => <TestsListItem handleClick={handleClick} key={i} test={t} />)}
        </List>
    );
};