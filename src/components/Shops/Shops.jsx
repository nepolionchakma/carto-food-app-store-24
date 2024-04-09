
import { useEffect, useState } from 'react';
import AllShop from './AllShop';
import { useCarto } from "@/Context/CartContext";
import Breadcrumbs from "../Breadcrumb/Breadcrumb";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Shops = () => {
    const [data, setData] = useState([]);
    const loadedFoodData = data.slice(0, 20);
    // ----------------------------Pagination --------------
    const [currentPage, setCurrentPage] = useState(1)
    const itemPerPage = 9;
    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;
    const showDataPerPage = loadedFoodData?.slice(firstIndex, lastIndex);
    const numerOfPage = Math.ceil(loadedFoodData.length / itemPerPage);
    const numbers = [...Array(numerOfPage + 1).keys()].slice(1);
    const [isLoading, setIsLoading] = useState(true);
    const previousPage = (e) => {
        e.preventDefault()
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const changeNumberPage = (num) => {
        setCurrentPage(num)
    }
    const nextPage = (e) => {
        e.preventDefault()
        if (currentPage !== numerOfPage) {
            setCurrentPage(currentPage + 1)
        }
    }
    // favorite,cart--------------------


    const { favorite, cartFav } = useCarto()

    // -------------------------Data Load---------
    // console.log(data?.meals);
    const foodData = async () => {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i');
        const dataLoad = await res.json();
        setData(dataLoad?.meals)
        setIsLoading(false)
    }
    useEffect(() => {
        foodData();
    }, [])

    return (
        <div className='max-w-7xl mx-auto p-5'>
            <Breadcrumbs />
            {
                isLoading && <span className=' flex flex-col justify-center items-center'>
                    <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="" />
                    <img src="https://assets-v2.lottiefiles.com/a/ba3f8d16-1161-11ee-9146-ff1c243cfdd2/8M5yJUdrZC.gif" alt="" />
                </span>
            }
            <div className='flex gap-4 duration-700'>
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
                    <div className='max-w-6xl mx-auto  '>
                        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                showDataPerPage.length > 0 && showDataPerPage?.map(items => <AllShop key={items.idMeal} items={items} />)
                            }
                        </div>

                        <nav className="my-5 flex justify-center">
                            <ul className="flex gap-2 items-center">
                                <li onClick={previousPage} ><MdNavigateBefore className=" cursor-pointer" /></li>
                                {
                                    numbers.map((number, i) => (
                                        <li key={i} className={`disabled gap-3 py-2 border px-4 ${currentPage === number && 'border bg-orange-500'}`}><a href="#" onClick={() => changeNumberPage(number)}>{number}</a></li>
                                    ))
                                }
                                <li onClick={nextPage} ><MdNavigateNext className=" cursor-pointer" /></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shops;