import { useState } from "react";
import { List, ListItem, SortBtn, StyledIcon, Title, TitleContainer } from "./TestDetailsList.styled";
import { TestDetailsListItem } from "./TestDetailsListItem";
import {FaSort} from 'react-icons/fa';

export const TestDetailsList = ({test, language}) => {
    const [results, setResults] = useState(test.results);
    const [order, setOrder] = useState('asc');

    const handleSortClick = (e) => {
        const {name} = e.currentTarget;
        if (order === 'asc') {
            setOrder('desc');
        } else {
            setOrder('asc');
        };

        if (name === 'user') {
            setResults(results => results.sort((a, b) => a[name].name.localeCompare(b[name].name)));

            if (order === 'desc') {
                setResults(results => results.reverse());
            };
        } else {
            setResults(results => results.sort((a, b) => {
                if (a[name] < b[name]) {
                    return -1;
                } else if (a[name] > b[name]){
                    return 1;
                } else {
                    return 0;
                };
            }));

            if (order === 'desc') {
                setResults(results => results.reverse());
            };
        };
    };

    return (
        <List>
            <ListItem>
                <TitleContainer><Title>{language === 'EN' ? 'User' : 'Користувач'}<SortBtn type='button' onClick={handleSortClick} name='user'><StyledIcon as={FaSort} /></SortBtn></Title></TitleContainer>
                <TitleContainer><Title>{language === 'EN' ? 'Score' : 'Результат'}<SortBtn type='button' onClick={handleSortClick} name='score'><StyledIcon as={FaSort} /></SortBtn></Title></TitleContainer>
                <TitleContainer><Title>{language === 'EN' ? 'Status' : 'Статус'}<SortBtn type='button' onClick={handleSortClick} name='status'><StyledIcon as={FaSort} /></SortBtn></Title></TitleContainer>
                <TitleContainer><Title>{language === 'EN' ? 'Time' : 'Час'}<SortBtn type='button' onClick={handleSortClick} name='time'><StyledIcon as={FaSort} /></SortBtn></Title></TitleContainer>
            </ListItem>
            {results.map((result, i) => <TestDetailsListItem key={i} result={result} />)}
        </List>
    );
};