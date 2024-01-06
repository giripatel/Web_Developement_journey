import React from "react";
import {Outlet} from 'react-router-dom'
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

export function Layout(){

    <>
    <Home />
    <Outlet />
    <Footer />
    </>
}