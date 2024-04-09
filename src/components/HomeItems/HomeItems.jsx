import { useEffect, useState } from 'react';
import HomeItem from './HomeItem';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import AllShop from '../Shops/AllShop';

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
            <div className='py-8 flex flex-col items-center gap-4'>
                <h4 className='text-3xl font-bold uppercase text-orange-600'>Top Rating Food</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore sunt nihil nesciunt laudantium soluta?</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {
                    loadedFoodData?.map((items) => <AllShop key={items.idMeal} items={items} />)
                }
            </div>
            <div className='flex items-center justify-center my-4'>
                <Link to={'/shops'}><button className='uppercase mt-9 px-6 py-4 bg-orange-500 rounded-md font-bold text-white'>View All</button></Link>
            </div>
        </div>
    );
};

export default HomeItems;