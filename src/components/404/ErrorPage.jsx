import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import RelatedFood from '../RelatedFood/RelatedFood';

const ErrorPage = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(res => res.json())
            .then(data => {
                setData(data?.meals);
            }
            )
    }, [])
    return (
        <div>
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
            <div className='w-[700px] mx-auto'>
                <div>
                    <h4 className='text-center font-bold text-xl'>Random</h4>
                    {
                        data.map((item, i) => <RelatedFood key={i} strCategory={item.strCategory} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;