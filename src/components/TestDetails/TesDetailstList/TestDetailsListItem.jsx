import { ListItem, Item } from "./TestDetailsList.styled";
import * as helpers from '../../helpers/helpers';

export const TestDetailsListItem = ({result}) => {
    const {user, score, status, time} = result;

    return (
        <ListItem>
            <Item>{user.name}</Item>
            <Item>{score}%</Item>
            <Item $status={status}>{status}</Item>
            <Item>{helpers.getTime(time)}</Item>
        </ListItem>
    )
};