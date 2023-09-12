import { ListItem, Item } from "./TestDetailsList.styled";
import * as helpers from '../../helpers/helpers';
import {useApp} from '../../../appContext';

export const TestDetailsListItem = ({result}) => {
    const {user, score, status, time} = result;
    const {users} = useApp();

    if (!result || !users) {
        return;
    };

    return (
        <ListItem>
            <Item>{helpers.getUsername(users, user)}</Item>
            <Item>{score}%</Item>
            <Item $status={status}>{status}</Item>
            <Item>{helpers.getTime(time)}</Item>
        </ListItem>
    )
};