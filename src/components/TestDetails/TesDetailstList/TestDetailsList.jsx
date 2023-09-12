import { List, ListItem, Title } from "./TestDetailsList.styled";
import { TestDetailsListItem } from "./TestDetailsListItem";

export const TestDetailsList = ({test}) => {
    const {results} = test;

    return (
        <List>
            <ListItem>
                <Title>User</Title>
                <Title>Score</Title>
                <Title>Status</Title>
                <Title>Time</Title>
            </ListItem>
            {results.map((result, i) => <TestDetailsListItem key={i} result={result} />)}
        </List>
    )
};