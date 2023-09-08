import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout/Layout";
import { PrivatRoute } from "./PrivatRoute";
import { PublicRoute } from "./PublicRoute";

const HomePage = lazy(() => import('../pages/Home'));
const AuthPage = lazy(() => import('../pages/Auth'));
const TestsPage = lazy(() => import('../pages/Tests'));
const TestPage = lazy(() => import('../pages/Test'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="authentication" element={<PublicRoute><AuthPage /></PublicRoute>} />
        <Route path="tests" element={<PrivatRoute><TestsPage /></PrivatRoute>} />
        <Route path='test/:_id' element={<TestPage />} />
      </Route>
    </Routes>
  );
}

export default App;
