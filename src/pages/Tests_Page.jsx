import { useApp } from '../appContext';
import { TestsContent } from '../components/TestsContent/TestsContent';

const TestSPage = () => {
  const { categories } = useApp();

  return <>{categories && <TestsContent categories={categories} />}</>;
};

export default TestSPage;
