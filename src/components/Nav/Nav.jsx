import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CiMenuBurger, CiShoppingCart, CiTextAlignJustify } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCarto } from '@/Context/CartContext';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { CiTrash } from "react-icons/ci";



const Nav = () => {
    const { carts, deleteCart, deleteFromCart } = useCarto()
    const handleDelete = (id) => {
        deleteCart(id)
        deleteFromCart()
    }

    return (
        <div className=' bg-slate-600 text-white sticky top-0 duration-500 z-50'>

            <div className='max-w-7xl mx-auto p-5'>

                <div className="flex justify-between items-center py-2">
                    {/* logo */}
                    <div className="flex items-center gap-2">
                        <div className='md:hidden '>
                            <DropdownMenu>
                                <DropdownMenuTrigger className='flex items-center'>
                                    <CiMenuBurger className='text-xl m-1' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='ml-5 mt-3'>
                                    <DropdownMenuLabel>Carto Menu</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <NavLink to={"/shops"}>Shops</NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <NavLink to={"/adduser"}>Add User</NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />

                                    <DropdownMenuItem>
                                        <NavLink to={"/about"}>About</NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem><NavLink to={"/contact"}>Contact</NavLink></DropdownMenuItem>
                                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>


                        <Link to='/' className="flex gap-2 btn btn-ghost text-xl">

                            <div className='w-[30px]'>
                                <img src={Logo} alt="" />
                            </div>
                            <span className='uppercase tracking-tighter font-bold hidden md:inline-flex xl:inline-flex duration-500' >carto</span>
                        </Link>
                    </div>
                    {/* Link */}
                    <div className='gap-4 hidden md:inline-flex xl:inline-flex duration-500'>
                        <NavLink to={"/adduser"}>Add User</NavLink>
                        <NavLink to={"/shops"}>Shops</NavLink>
                        <NavLink to={"/about"}>About</NavLink>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </div>
                    {/* search */}
                    <div className="form-control smxl:hidden">
                        <input type="text" placeholder="Search" className=" p-2 rounded-lg input input-bordered w-34  md:w-auto" />
                    </div>
                    {/* profile */}
                    <div className='flex gap-3 items-center'>
                        <div className='relative'>


                            <Popover className='w-[200px]'>
                                <PopoverTrigger>
                                    <CiShoppingCart className='text-3xl' />
                                    <span className='flex justify-center items-center absolute -top-2 -right-2 bg-orange-600 rounded-full p-1 h-6 w-6'>{carts.length}</span>
                                </PopoverTrigger>
                                <PopoverContent>
                                    {
                                        carts.length ? <div>
                                            {
                                                carts.map((item) => (
                                                    <div key={item.cart.id} className='flex items-center gap-3 border-b-2 my-2 p-2 hover:bg-orange-300 rounded-xl shadow-md'>
                                                        <div className='w-[40px]'>
                                                            <img src={item.cart.strMealThumb} alt="" />
                                                        </div>
                                                        <span>{item.cart.strMeal}</span>
                                                        <span>{item.cart.price}</span>
                                                        <span className="cursor-pointer" onClick={() => handleDelete(item.cart.idMeal)}><CiTrash /></span>
                                                    </div>
                                                ))
                                            }
                                            <Link to={'/checkout'} className='flex justify-center bg-orange-500 rounded-lg hover:bg-orange-400'> Check Out</Link>
                                        </div>
                                            :
                                            <div>Empty Cart
                                                <p>Add Cart Please</p>
                                            </div>
                                    }
                                </PopoverContent>

                            </Popover>

                            {/* --------- */}
                        </div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;