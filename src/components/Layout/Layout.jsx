import { LayoutWrapper, Main } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import { Footer } from "../Footer/Footer";
import { Loader } from "../Loader/Loader";

export const Layout = () => {
    return (
        <Main>
            <AppBar />
            <LayoutWrapper>
                <Suspense fallback={<Loader $size='50px' />}>
                    <Outlet />
                </Suspense>
            </LayoutWrapper>
            <Footer />
        </Main>
    )
}