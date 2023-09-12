import { Navigate, Route, Routes } from "react-router-dom";
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
const MyTests = lazy(() => import('../components/MyTests/MyTests'));
const TestDetailsPage = lazy(() => import('../pages/TestDetailsPage'));

function App() {
  return (
    <>
      <ToastContainer position="top-center" />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="authentication" element={<PublicRoute><AuthPage /></PublicRoute>} />
          <Route path="tests" element={<PrivatRoute><TestSPage /></PrivatRoute>} />
          <Route path='mytests' element={<PrivatRoute><MyTestsPage /></PrivatRoute>}>
            <Route index element={<Navigate to='created' replace />} />
            <Route path=':userstests' element={<MyTests />} />
          </Route>
          <Route path='test/:_id' element={<PrivatRoute><TestPage /></PrivatRoute>} />
          <Route path='details/:_id' element={<TestDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
