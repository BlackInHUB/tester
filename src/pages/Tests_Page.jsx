import { useApp } from "../appContext";
import { TestsContent } from "../components/TestsContent/TestsContent";

const TestSPage = () => {
    const { categories } = useApp();

    console.log(categories)

    return (
        <>
            {categories && <TestsContent categories={categories} />}
        </>
    )
};

export default TestSPage;