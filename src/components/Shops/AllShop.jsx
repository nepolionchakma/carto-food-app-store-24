import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Link } from 'react-router-dom';

const AllShop = ({ items }) => {
    const { strMeal, strMealThumb, idMeal } = items;
    return (
        <div>
            <Link to={`/food/details/${idMeal}`} className='cursor-pointer'>
                <Card className='shadow-xl'>
                    <CardHeader>
                        <CardTitle>{strMeal.slice(0, 19)} {strMeal.length > 19 ? "..." : ""}</CardTitle>
                        {/* <CardDescription>Card Description</CardDescription> */}
                    </CardHeader>
                    <CardContent >
                        <div className=''>
                            <img src={strMealThumb} alt="" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        {/* <p>Card Footer</p> */}
                    </CardFooter>
                </Card>
            </Link>

        </div>
    );
};

export default AllShop;