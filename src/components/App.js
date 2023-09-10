import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout/Layout";
import { PrivatRoute } from "./PrivatRoute";
import { PublicRoute } from "./PublicRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../pages/HomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const TestSPage = lazy(() => import('../pages/Tests_Page'));
const TestPage = lazy(() => import('../pages/TestPage'));

function App() {
  return (
    <>
      <ToastContainer position="top-center" />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="authentication" element={<PublicRoute><AuthPage /></PublicRoute>} />
          <Route path="tests" element={<PrivatRoute><TestSPage /></PrivatRoute>} />
          <Route path='test/:_id' element={<TestPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
