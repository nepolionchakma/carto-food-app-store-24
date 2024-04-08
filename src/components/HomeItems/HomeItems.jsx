import { useEffect, useState } from 'react';
import HomeItem from './HomeItem';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const HomeItems = () => {
    const [data, setData] = useState([]);

    const loadedFoodData = data.slice(0, 10);
    // console.log(data?.meals);
    const foodData = async () => {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i');
        const dataLoad = await res.json();
        setData(dataLoad?.meals)
    }
    // console.log(loadedFoodData);
    useEffect(() => {
        foodData();
    }, [])
    return (
        <div className='max-w-6xl mx-auto p-5'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {
                    loadedFoodData?.map((items) => <HomeItem key={items.idMeal} items={items} />)
                }
            </div>
            <div className='flex items-center justify-center my-4'>
                <Link to={'/shops'}>View All</Link>
            </div>
        </div>
    );
};

export default HomeItems;