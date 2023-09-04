import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout/Layout";

const HomePage = lazy(() => import('../pages/Home'));
const TestsPage = lazy(() => import('../pages/Tests'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tests" element={<TestsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
