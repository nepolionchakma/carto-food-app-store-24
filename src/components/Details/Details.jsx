
import { useCarto } from '@/Context/CartContext';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumb/Breadcrumb';
import RelatedFood from '../RelatedFood/RelatedFood';
import { Button } from '../ui/button';

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from '../404/ErrorPage';


const Details = () => {


    const [data, setData] = useState([]);
    const [nullCheck, setNullCheck] = useState([])
    const { idMeal, strArea, strInstructions, strMealThumb, strMeal, strTags, strSource, strYoutube, strCategory } = data;
    // const youtubeId = strYoutube?.slice(32,)
    // console.log(data);
    const idFood = useParams();
    const id = idFood.idMeal;
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data?.meals[0]);
                setNullCheck(data);
            }
            )
    }, [id])
    // console.log(nullCheck?.length > 0, nullCheck?.meals?.length > 0);
    const { addCart, addFromCart } = useCarto()

    const handleAddCart = () => {
        addCart({ strMealThumb, strMeal, idMeal, id: Date.now(), price: Math.ceil(Math.random() * 100) })
        addFromCart()
    }

    return (
        <div>
            {
                nullCheck?.length > 0 || nullCheck?.meals?.length > 0 ?
                    <div className='max-w-6xl mx-auto'>
                        <Breadcrumbs />
                        <h4 className='text-center font-bold text-xl my-4' id='#home'>Details : {strMeal}</h4>
                        <hr className='border-[2px]' />
                        <div className='py-7 px-4 grid sm:grid-cols-2 gap-5'>
                            <div className='flex flex-col items-center justify-around gap-3 '>
                                <div className='w-[300px] flex flex-col justify-center gap-3'>
                                    <Carousel className="w-full max-w-xs">
                                        <CarouselContent>
                                            {Array.from({ length: 3 }).map((_, index) => (
                                                <CarouselItem key={index}>
                                                    <div className="p-1">
                                                        <Card>
                                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                                <img src={strMealThumb} alt={strMeal} />
                                                            </CardContent>
                                                        </Card>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                </div>
                                <Button
                                    onClick={handleAddCart}
                                >add to cart</Button>
                            </div>
                            <div>
                                <h4 className='text-center font-bold text-xl my-4'>Description</h4>
                                <span>Area: {strArea}</span><br />
                                <span>Category: {strCategory}</span>
                                <p className='my-4'>{strInstructions}</p>
                            </div>
                        </div>
                        <hr className='border-b-2' />
                        <div className='my-7 gap-4 py-7 px-4 grid sm:grid-cols-2'>
                            <div>
                                <ReactPlayer url={!strYoutube ? "Not Available" : strYoutube} width='100%'
                                    height='400px' />
                            </div>
                            <div>
                                <span>Tag : {!strTags ? "Not Available" : strTags}</span><br />
                                <label>Source : {!strSource ? 'Now Available' : strSource}</label>
                            </div>
                        </div>
                        <hr className='border-b-2' />
                        <RelatedFood strCategory={strCategory} />
                    </div>
                    :
                    <ErrorPage />
            }
        </div>
    );
};

export default Details;