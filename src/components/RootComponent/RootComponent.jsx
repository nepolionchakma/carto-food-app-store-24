import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Breadcrumbs from '../Breadcrumb/Breadcrumb';

const RootComponent = () => {
    return (
        <>
            <Nav />
            <Breadcrumbs />
            <Outlet />
        </>
    );
};

export default RootComponent;