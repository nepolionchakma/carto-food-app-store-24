import React from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Reviews = () => {
    return (

        <div className='bg-orange-300'>
            <div className='max-w-6xl mx-auto py-9 px-4'>
                <div>
                    <div className='md:w-1/2 mx-auto text-center m-5'>
                        <h4 className='text-xl uppercase opacity-50 tracking-tight'>Our Customer Reviews</h4>
                        <h2 className='text-5xl font-bold tracking-tight text-orange-500'>Here to make your life more easier</h2>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5 text-center'>
                        <div className='p-4 flex flex-col items-center justify-center shadow-xl rounded-xl bg-white'>
                            <div className='w-[80px] rounded-full border-gray-800 my-4 overflow-hidden'>
                                <img src="https://media.licdn.com/dms/image/C4E03AQHKORiG-MjX5Q/profile-displayphoto-shrink_800_800/0/1556137134085?e=2147483647&v=beta&t=27R1d8plR-qp9PMZKuFZxQsibBoRo0Lv2yh_YSE7sK0" alt="" />
                            </div>
                            <h4 className='font-bold text-xl tracking-tight my-3 flex items-center gap-2'>Ellen <RiVerifiedBadgeFill className='text-orange-600' /></h4>
                            <span className='my-1 border px-2 py-1 rounded-xl'>Santa Fe,NM</span>
                            <p className='opacity-50'>This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.</p>
                        </div>
                        <div className='p-4 flex flex-col items-center justify-center shadow-xl rounded-xl bg-white'>
                            <div className='w-[80px] rounded-full border-gray-800 my-4 overflow-hidden'>
                                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEnNZWvamLZsw/profile-displayphoto-shrink_800_800/0/1639150610634?e=2147483647&v=beta&t=eTLcvky-bVTgSJDg5djRxInlFbCuKqvHeSjfK0ofJFk" alt="" />
                            </div>
                            <h4 className='font-bold text-xl tracking-tight my-3 flex items-center gap-2'>Christopher<RiVerifiedBadgeFill className='text-orange-600' /></h4>
                            <span className='my-1 border px-2 py-1 rounded-xl'>Berlin, MD</span>
                            <p className='opacity-50'>This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority pretty good.</p>
                        </div>
                        <div className='p-4 flex flex-col items-center justify-center shadow-xl rounded-xl bg-white'>
                            <div className='w-[80px] rounded-full border-gray-800 my-4 overflow-hidden'>
                                <img src="https://i.insider.com/5154b2276bb3f78436000016" alt="" />
                            </div>
                            <h4 className='font-bold text-xl tracking-tight my-3 flex items-center gap-2'>Raxann<RiVerifiedBadgeFill className='text-orange-600' /></h4>
                            <span className='my-1 border px-2 py-1 rounded-xl'>West Fargo, ND</span>
                            <p className='opacity-50'>Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before.</p>
                        </div>
                        <div className='p-4 flex flex-col items-center justify-center shadow-xl rounded-xl bg-white'>
                            <div className='w-[80px] rounded-full border-gray-800 my-4 overflow-hidden'>
                                <img src="https://media.licdn.com/dms/image/D5603AQHfopi5KaATMA/profile-displayphoto-shrink_800_800/0/1696266385313?e=2147483647&v=beta&t=ZNp0a-AJcU7wRgqT6wZV_CVquyp7y-o-b3jjpc42XWw" alt="" />
                            </div>
                            <h4 className='font-bold text-xl tracking-tight my-3 flex items-center gap-2'>Alan K<RiVerifiedBadgeFill className='text-orange-600' /></h4>
                            <span className='my-1 border px-2 py-1 rounded-xl'>Delcobro, Dc</span>
                            <p className='opacity-50'>I have to say, I enjoyed every single bite of the meal in (RN). I had a 3 course meal, with a couple of beers. Considering the quality, the price is reasonable. Ideal for those who want a romantic night out. There was also plenty.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;