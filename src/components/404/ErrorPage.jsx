import React from 'react';
import { Button } from '../ui/button';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Nav />
            <div className='grid md:grid-cols-2 gap-4 max-w-3xl justify-center mx-auto m-9 p-9 items-center'>
                <div className='flex flex-col items-start gap-4 my-4'>
                    <p className='text-3xl font-bold tracking-tighter'>Page Not Found</p>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, molestiae!</span>
                    <Link to='/'><Button className='uppercase'>Back To Home</Button></Link>
                </div>
                <div className='w-[400px]  my-4'>
                    <img src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;