import { Item, List, ListItem, Title } from "./TestDetailsList.styled";
import {useApp} from '../../../appContext';
import { getTime } from "../../helpers/helpers";

export const TestDetailsList = ({test}) => {
    const {users} = useApp();
    const {results} = test;

    const getUsername = (id) => {
        return users.find(u => u._id === id).name;
    };

    return (
        <List>
            <ListItem>
                <Title>User</Title>
                <Title>Score</Title>
                <Title>Status</Title>
                <Title>Time</Title>
            </ListItem>
            {results.map(({user, score, status, time}) => 
            <ListItem>
                <Item>{getUsername(user)}</Item>
                <Item>{score}%</Item>
                <Item status={status}>{status}</Item>
                <Item>{getTime(time)}</Item>
            </ListItem>
            )}
        </List>
    )
};