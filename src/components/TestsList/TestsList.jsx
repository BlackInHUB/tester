import { getCategoryName } from "../helpers/helpers";
import { List } from "./TestsList.styled";
import { TestsListItem } from "./TestsListItem";

export const TestsList = ({tests, handleClick, language, categories}) => {

    return (
        <List>
            {tests.map((t, i) => <TestsListItem category={getCategoryName(language, categories, t.category)} language={language} handleClick={handleClick} key={i} test={t} />)}
        </List>
    );
};