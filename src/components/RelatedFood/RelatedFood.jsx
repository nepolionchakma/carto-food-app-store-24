import { useEffect, useState } from 'react';
import AllShop from '../Shops/AllShop';

const RelatedFood = (strCategory) => {

    const [foodItem, setFoodItem] = useState([])
    const loadRequre = strCategory?.strCategory;
    const relatedMeals = foodItem.meals;
    const sliceRelatedItem = relatedMeals?.slice(0, 6)
    // www.themealdb.com/api/json/v1/1/search.php?s=

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${loadRequre}`)
            .then(res => res.json())
            .then(data => setFoodItem(data))
    }, [loadRequre])
    // console.log(sliceRelatedItem);
    return (
        <div className=' my-7 m-6'>
            <h4 className='text-center text-2xl font-bold my-6 underline tracking-tighter'>Related Food </h4>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    sliceRelatedItem?.map(items => <AllShop key={items.idMeal} items={items} />)
                }
            </div>
        </div>
    );
};

export default RelatedFood;