import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const isHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register') || location.pathname.includes('forgot');

    return (
        <div>
            {isHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;