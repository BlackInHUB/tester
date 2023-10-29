import { useEffect, useState } from "react";
import { UsersPassedTestsList } from "../../UsersTestsList/UsersTestsList";
import { Container } from "./UserTests.styled";
import { getUserPassedTests } from "../../../services/testsApi";
import { useApp } from "../../../appContext";

const Passed = () => {
    const {language, categories, setIsLoading} = useApp();
    const [tests, setTests] = useState(null);
    const titles = {
        en: [
            'Category',
            'Author',
            'Passed',
            'Best Score'
        ],
        ua: [
            'Категорія',
            'Автор',
            'Пройдено',
            'Кращий Результат'
        ]
    };

    useEffect(() => {
        setIsLoading(true);
        getUserPassedTests().then(setTests).finally(setIsLoading(false));
    }, [setIsLoading]);

    return (
        <Container>
            {tests && <UsersPassedTestsList $col='4' categories={categories} language={language} titles={language === 'EN' ? titles.en : titles.ua} tests={tests} />}
        </Container>
    )
};

export default Passed;