import { Container } from "./UserTests.styled";
import { UsersCreatedTestsList } from "../../UsersTestsList/UsersTestsList";
import { useEffect, useState } from "react";
import { getUserCreatedTests } from "../../../services/testsApi";
import { useApp } from "../../../appContext";

const Created = () => {
    const {language, categories, setIsLoading} = useApp();
    const [tests, setTests] = useState(null);
    const titles = {
        en: [
            'Category',
            'Passed',
            'Max Score',
            'Best Time'
        ],
        ua: [
            'Категорія',
            'Пройдено',
            'Кращий Результат',
            'Кращий Час'
        ]
    };

    useEffect(() => {
        setIsLoading(true);
        getUserCreatedTests().then(setTests).finally(setIsLoading(false));
    }, [setIsLoading]);

    return (
        <Container>
            {tests && <UsersCreatedTestsList categories={categories} language={language} $col='5' tests={tests} titles={language === 'EN' ? titles.en : titles.ua} />}
        </Container>
    )
};

export default Created;