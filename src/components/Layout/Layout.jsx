import { LayoutWrapper, Main } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
  return (
    <Main>
      <AppBar />
      <LayoutWrapper>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </LayoutWrapper>
      <Footer />
    </Main>
  );
};
