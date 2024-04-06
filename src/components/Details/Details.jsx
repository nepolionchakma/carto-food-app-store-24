
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { useCarto } from '@/Context/CartContext';


const Details = () => {


    const [data, setData] = useState([]);
    const { idMeal, strArea, strInstructions, strMealThumb, strMeal, strTags, strSource, strYoutube } = data;
    const youtubeId = strYoutube?.slice(32,)
    // console.log(data);
    const idFood = useParams();
    const id = idFood.idMeal;
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setData(data.meals[0]))
    }, [])
    const [cart, setCart] = useState([])
    const { addCart } = useCarto()
    const handleAddCart = () => {
        addCart({ strMealThumb, strMeal, idMeal })
    }
    // console.log(cart.strArea);
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='py-7 px-2 flex items-center flex-col gap-5'>
                <div className='w-[100px]'>
                    <img src={strMealThumb} alt={strMeal} />
                </div>
                <span>Food Name: {strMeal}</span>
                <span>Area: {strArea}</span>
                <Button
                    onClick={() => handleAddCart({ strMealThumb, strMeal, strArea })}
                >add to cart</Button>
                <p>{strInstructions}</p>
            </div>
            <div className='w-1/2 flex '>
                {/* <video controls="true">
                    <source src={strYoutube} type="video/mp4"></source>
                </video> */}
            </div>
            <div className='my-7 gap-4'>
                {/* <YoutubeVideo id={!strYoutube ? "Not Available" : youtubeId} /> */}
                <br />
                <span>Tag : {!strTags ? "Not Available" : strTags}</span><br />
                <label>Source : {!strSource ? 'Now Available' : strSource}</label>
            </div>
        </div>
    );
};

export default Details;