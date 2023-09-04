import { Main } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
    return (
        <Main>
            <AppBar />
            <Suspense>
                <Outlet />
            </Suspense>
            <Footer />
        </Main>
    )
}