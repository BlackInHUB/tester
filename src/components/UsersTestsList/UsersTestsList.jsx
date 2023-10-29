import { getTime, getCategoryName } from "../helpers/helpers";
import { Container, Item, Link, StyledIcon, TestsList, TestsListItem, Title, TitlesList, TitlesListItem } from "./UsersTestsList.styled";
import {BsArrowRightSquare} from 'react-icons/bs';

export const UsersCreatedTestsList = ({tests, $col, titles, language, categories}) => {

    return (
        <Container>
            <TestsList>
                <TestsListItem $col={$col}>
                    <TitlesList $col={$col}>
                        {titles.map((t, i) => <TitlesListItem key={i}><Title>{t}</Title></TitlesListItem>)}
                    </TitlesList>
                </TestsListItem>
                {tests.map(({_id, maxScore, bestTime, passedUsers, category}) => 
                <TestsListItem key={_id} $col={$col}>
                    <Item>{getCategoryName(language, categories, category)}</Item>
                    <Item>{passedUsers}</Item>
                    <Item>{maxScore ? maxScore : '-'}</Item>
                    <Item>{bestTime ? getTime(bestTime) : '-'}</Item>
                    <Link to={`/details/${_id}`}>{language === 'EN' ? 'Details' : 'Деталі'}<StyledIcon as={BsArrowRightSquare} /></Link>
                </TestsListItem>)}
            </TestsList>
        </Container>
    )
};

export const UsersPassedTestsList = ({tests, $col, titles, language, categories}) => {

    const getBestScore = (results) => {
        const scores = results.map(r => {
            return r.score;
        });
        return Math.max(...scores);
    };

    return (
        <Container>
            <TestsList>
                <TestsListItem $col={$col}>
                    <TitlesList $col={$col}>
                        {titles.map((t, i) => <TitlesListItem key={i}><Title>{t}</Title></TitlesListItem>)}
                    </TitlesList>
                </TestsListItem>
                {tests.map(({_id, category, author, results }) => 
                <TestsListItem key={_id} $col={$col}>
                    <Item>{getCategoryName(language, categories, category)}</Item>
                    <Item>{author.name}</Item>
                    <Item>{results.length}</Item>
                    <Item>{`${getBestScore(results)}%`}</Item>
                    {/* <Link to={`/details/${_id}`}>Details<StyledIcon as={BsArrowRightSquare} /></Link> */}
                </TestsListItem>)}
            </TestsList>
        </Container>
    )
};

