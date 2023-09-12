import { getTime } from "../helpers/helpers";
import { Container, Item, Link, StyledIcon, TestsList, TestsListItem, Title } from "./UsersTestsList.styled";
import {BsArrowRightSquare} from 'react-icons/bs';

export const UsersTestsList = ({tests}) => {

    return (
        <Container>
            <TestsList>
                <TestsListItem>
                    <Title>Category</Title>
                    <Title>Passed</Title>
                    <Title>Max Score</Title>
                    <Title>Best Time</Title>
                </TestsListItem>
                {tests.map(({_id, maxScore, bestTime, passedUsers, category}) => 
                <TestsListItem key={_id}>
                    <Item>{category}</Item>
                    <Item>{passedUsers}</Item>
                    <Item>{maxScore ? maxScore : '-'}</Item>
                    <Item>{bestTime ? getTime(bestTime) : '-'}</Item>
                    <Link to={`/details/${_id}`}>Details<StyledIcon as={BsArrowRightSquare} /></Link>
                </TestsListItem>)}
            </TestsList>
        </Container>
    )
};

