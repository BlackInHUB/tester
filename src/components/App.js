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
const MyTestsPage = lazy(() => import('../pages/MyTestsPage'));

function App() {
  return (
    <>
      <ToastContainer position="top-center" />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='mytests' element={<PrivatRoute><MyTestsPage /></PrivatRoute>} />
          <Route path="authentication" element={<PublicRoute><AuthPage /></PublicRoute>} />
          <Route path="tests" element={<PrivatRoute><TestSPage /></PrivatRoute>} />
          <Route path='test/:_id' element={<PrivatRoute><TestPage /></PrivatRoute>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
