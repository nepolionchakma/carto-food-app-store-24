import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { useCarto } from '@/Context/CartContext';

const RootComponent = () => {
    const { ToastContainer } = useCarto()
    return (
        <>
            <Nav />
            <Outlet />
            <ScrollToTop smooth color="orange" className='hover:text-white bg-orange-600 hover:bg-orange-500 h-10 w-10 rounded-full p-3 flex items-center font-bold duration-500' />
            <ToastContainer />
            <Footer />
        </>
    );
};

export default RootComponent;