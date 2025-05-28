import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useApp } from '../appContext';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const TestSPage = lazy(() => import('../pages/Tests_Page'));
const TestPage = lazy(() => import('../pages/TestPage'));
const MyTestsPage = lazy(() => import('../pages/MyTestsPage'));
const MyTests = lazy(() => import('../components/MyTests/MyTests'));
const TestDetailsPage = lazy(() => import('../pages/TestDetailsPage'));

function App() {
  const { isLoading } = useApp();

  return (
    <>
      {isLoading && <Loader />}
      <ToastContainer position="top-center" />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="authentication"
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route
            path="tests"
            element={
              <PrivateRoute>
                <TestSPage />
              </PrivateRoute>
            }
          />
          <Route
            path="mytests"
            element={
              <PrivateRoute>
                <MyTestsPage />
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to="created" replace />} />
            <Route
              path=":userstests"
              element={
                <PrivateRoute>
                  <MyTests />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="test/:_id"
            element={
              <PrivateRoute>
                <TestPage />
              </PrivateRoute>
            }
          />
          <Route
            path="details/:_id"
            element={
              <PrivateRoute>
                <TestDetailsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
