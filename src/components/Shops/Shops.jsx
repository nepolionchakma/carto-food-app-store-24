import React, { useEffect, useState } from 'react';
import AllShop from './AllShop';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const Shops = () => {
    const [data, setData] = useState([]);

    const loadedFoodData = data.slice(0, 10);
    console.log(data?.meals);
    const foodData = async () => {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i');
        const dataLoad = await res.json();
        setData(dataLoad.meals)
    }
    console.log(loadedFoodData);
    useEffect(() => {
        foodData();
    }, [])
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <div className='flex gap-4'>
                <div className='w-[300px] h-[600px] sticky top-[100px] bg-slate-300 p-3'>
                    <label className=' '>Category</label>
                    <hr />

                    <div>
                        <div className=' '>
                            <div className='flex gap-2  items-center'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">All</label>
                            </div>
                            <div className='flex gap-2  items-center'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Beef</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Breakfast</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Chicken</label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <label className=' '>Price</label>
                    <hr />
                    <div>
                        <div className=' '>
                            <div className='flex gap-2  items-center'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">All</label>
                            </div>
                            <div className='flex gap-2  items-center'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Beef</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Breakfast</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Chicken</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='max-w-6xl mx-auto p-5'>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                loadedFoodData?.map((items) => <AllShop key={items.idMeal} items={items} />)
                            }
                        </div>

                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shops;