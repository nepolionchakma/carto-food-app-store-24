import React from 'react';
import { FaAnglesRight } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();

    return (
        <div className='flex gap-3 text-center max-w-6xl p-4 mx-auto justify-center my-6'>
            <Link to='/' className='flex items-center justify-center uppercase'>Home -</Link>
            <Link to={location.pathname}>{location.pathname}</Link>
        </div>
    );
};

export default Breadcrumbs;