import { useNavigate } from 'react-router-dom';
import { useApp } from '../../appContext';
import {ListItem, Title, Text} from './TestsList.styled';
import { getTime } from '../helpers/helpers';

export const TestsListItem = ({test}) => {
    const {users} = useApp();
    const {author, _id, questions, options, passedUsers, maxScore, bestTime, category} = test;
    const {score, time} = options
    const navigate = useNavigate();

    const {name} = users?.find(u => u._id === author);

    const handleClick = () => {
        navigate(`/test/${_id}`, {replace: true});
    };

    return (
        <ListItem onClick={handleClick}>
            <Title>Category: <Text>{category}</Text></Title>
            <Title>Questions: <Text>{questions}</Text></Title>
            <Title>Author: <Text>{name}</Text></Title>
            <Title>Passed by: <Text>{passedUsers === 0 ? 'noone :(' : passedUsers > 1 ? `${passedUsers} users` : '1 user'}</Text></Title>
            <Title>Passing score: <Text>{score ? `${score}%` : 'not specified'}</Text></Title>
            <Title>Max score: <Text>{maxScore ? `${maxScore}%` : '-'}</Text></Title>
            <Title>Time for test: <Text>{time ? `${time} minutes` : 'unlimited'}</Text></Title>
            <Title>Best time: <Text>{bestTime ? `${getTime(bestTime)}` : '-'}</Text></Title>
        </ListItem>
    )
}