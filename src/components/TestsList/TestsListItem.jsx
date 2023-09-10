import { useNavigate } from 'react-router-dom';
import { useApp } from '../../appContext';
import {ListItem, Title, Text} from './TestsList.styled';

export const TestsListItem = ({test}) => {
    const {users} = useApp();
    const {author, _id, questions, options} = test;
    const {score, time} = options
    const navigate = useNavigate();

    const {name} = users?.find(u => u._id === author);

    const handleClick = () => {
        navigate(`/test/${_id}`, {replace: true});
    };

    return (
        <ListItem onClick={handleClick}>
            <Title>Category: <Text>None</Text></Title>
            <Title>Questions: <Text>{questions}</Text></Title>
            <Title>Author: <Text>{name}</Text></Title>
            {score && <Title>Passing score: <Text>{score}%</Text></Title>}
            {time && <Title>Time for test: <Text>{time} minutes</Text></Title>}
        </ListItem>
    )
}