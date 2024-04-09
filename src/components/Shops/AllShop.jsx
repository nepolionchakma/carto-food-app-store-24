import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { MdFavoriteBorder, MdOutlineOpenInNew } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
import { IoCart, IoCartOutline, IoCartSharp } from "react-icons/io5";
import { useCarto } from '@/Context/CartContext';

const AllShop = ({ items }) => {
    const { strMeal, strMealThumb, idMeal } = items;
    const { carts, handleFav, handleCart, favorite, cartFav, addCart, deleteCart, addFromCart, deleteFromCart, ToastContainer } = useCarto()
    const [check, setCheck] = useState(false)

    // add and delete cart

    const handleAddCart = () => {
        addCart({ strMealThumb, strMeal, idMeal, id: Date.now(), price: Math.ceil(Math.random() * 100) })
        addFromCart()
    }
    const handleDelete = (id) => {
        deleteCart(id)
        deleteFromCart()
    }

    // check data if have true else for false

    const checkDataIfHave = () => {
        if (carts?.some(item => item?.cart?.idMeal === idMeal)) {
            return true
        } else {
            return false
        }
    }
    useEffect(() => {
        setCheck(checkDataIfHave)
    }, [carts])



    return (
        <div className='relative group'>
            <div className='absolute bottom-0 bg-opacity-50 bg-slate-200 flex flex-col w-full opacity-0 group-hover:opacity-100 items-center hover:!opacity-100 duration-1000'>
                <div className='my-3'>
                    <p className='font-bold'>{strMeal}</p>
                </div>
                {/* consition for cart/delete cart , favorite/unFavorite */}
                <div className="flex mb-9 gap-3" >
                    {favorite ? <MdFavorite className='text-4xl cursor-pointer' onClick={handleFav} /> : <MdFavoriteBorder className='text-4xl cursor-pointer' onClick={handleFav} />}

                    {!check ? <IoCartOutline className='text-4xl cursor-pointer' onClick={handleAddCart} /> : <span className='text-4xl cursor-pointer' onClick={() => handleDelete(idMeal)}><IoCart /></span>}

                    <Link to={`/details/${idMeal}`} ><MdOutlineOpenInNew className='text-4xl' /></Link>
                </div>
            </div>
            <Link to={`/details/${idMeal}`} className='cursor-pointer ' >
                <Card className='shadow-xl'>

                    <CardHeader>
                        <CardTitle></CardTitle>
                        {/* {strMeal.slice(0, 19)} {strMeal.length > 19 ? "..." : ""} */}
                        {/* <CardDescription>Card Description</CardDescription> */}
                    </CardHeader>
                    <CardContent >
                        <div className=' '>
                            <img src={strMealThumb} alt="" />

                        </div>
                    </CardContent>
                    <CardFooter>

                    </CardFooter>

                </Card>
            </Link>

        </div >
    );
};

export default AllShop;