import { useEffect, useState } from "react";
import { TestsContent } from "../components/TestsContent/TestsContent";
import { getCategories } from "../services/testsApi";

const TestSPage = () => {
    const [categories, setCategories] = useState([{name: 'All'}]);

    useEffect(() => {
        getCategories().then(response => setCategories(c => {return [...c, ...response]}));
    }, []);

    return (
        <TestsContent categories={categories} />
    )
};

export default TestSPage;