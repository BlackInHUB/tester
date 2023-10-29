import {ListItem, Title, Text} from './TestsList.styled';
import { getTime } from '../helpers/helpers';

export const TestsListItem = ({test, handleClick, language, category}) => {
    const {author, _id, questions, options, passedUsers, maxScore, bestTime} = test;
    const {score, time} = options

    return (
        <ListItem onClick={() => handleClick(_id)}>
            <Title>{language === 'EN' ? 'Category' : 'Категорія'}: <Text>{category}</Text></Title>
            <Title>{language === 'EN' ? 'Questions' : 'Питання'}: <Text>{questions}</Text></Title>
            <Title>{language === 'EN' ? 'Author' : 'Автор'}: <Text>{author.name}</Text></Title>
            <Title>{language === 'EN' ? 'Passed by' : 'Тест пройшли'}: <Text>{passedUsers === 0 ? (language === 'EN' ? 'noone :(' : 'ніхто :(') : passedUsers > 1 ? `${passedUsers} ${language === 'EN' ? 'users' : 'користувачів'}` : (language === 'EN' ? '1 user' : '1 користувач')}</Text></Title>
            <Title>{language === 'EN' ? 'Passing score' : 'Прохідний бал'}: <Text>{score ? `${score}%` : (language === 'EN' ? 'not specified' : 'не встановлено')}</Text></Title>
            <Title>{language === 'EN' ? 'Max score' : 'Кращий результат'}: <Text>{maxScore ? `${maxScore}%` : '-'}</Text></Title>
            <Title>{language === 'EN' ? 'Time limit' : 'Час на тест'}: <Text>{time ? `${time} ${language === 'EN' ? 'min.' : 'хв.'}` : (language === 'EN' ? 'unlimited' : 'необмежено')}</Text></Title>
            <Title>{language === 'EN' ? 'Best time' : 'Кращий час'}: <Text>{bestTime ? `${getTime(bestTime)}` : '-'}</Text></Title>
        </ListItem>
    )
}