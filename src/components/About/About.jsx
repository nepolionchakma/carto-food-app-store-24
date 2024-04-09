import React from 'react';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { FaEye } from "react-icons/fa6";
import { IoRocket } from "react-icons/io5";
import { BiCheese } from "react-icons/bi";

const About = () => {
    return (
        <div className='max-w-5xl mx-auto px-5 py-9'>
            <h4 className='text-3xl uppercasetracking-tight font-bold text-orange-500 text-center my-5 underline'>About <span className='uppercase '>Carto</span></h4>
            <div>
                <img src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/314996721_686998679459096_8197440729435449450_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFTdyOl7YzJa5T6bHOO4_90AoDhqf0dcAsCgOGp_R1wC2v3Lw9VKSVLMA3NmCOyAeEHY_czjCYLoA5RusqDFUHe&_nc_ohc=__5LwVK9HXkAb5pVv1-&_nc_ht=scontent-sin6-4.xx&oh=00_AfDescdEG3xhxcKPHuPoO0V_ukcgqOAfy7Q8_z6cvvPG0Q&oe=661AA3A3" alt="" />
            </div>
            <p>True Foods is proudly an 100% Australian owned and operated family business that was established in 2001 as a specialist manufacturer of flat bread products. From humble beginnings, we have grown to become the largest Australian owned manufacturer of Tortilla Wraps, Naan and Roti breads. Supporting this is a supply chain that distributes significant volumes of shelf stable, ambient and frozen products nation-wide to all major customers including Coles, Woolworths, Aldi, Metcash, KFC, Subway, PFD and Bidfood.</p>
            <br />
            <p>
                In late 2011 we purchased a major production facility in Maryborough, regional Victoria. The 27 acre site has 3 acres under roof, and has facilitated enormous growth in our workforce and production capabilities. Through segregated production spaces, we are able to produce specialist Gluten Free and Organic Wraps along with our high volume flatbread lines.
            </p>
            <br />
            <p>
                We recently invested in our own onsite solar farm which consists of more than 3,300 panels covering all points of our bakery. With sustainability being a core value of our business, we made the move in 2020 to communicate our solar initiative on our Simson's Pantry products through our new '100% powered by solar' logo. This logo and our True Foods story is now displayed on our new packaging as 100% of the energy used to make our Simson's Pantry products is powered by the Australian sun.
            </p>
            <br />
            <p>Innovation is a driving force of True Foods, and we are proud of the many successful products that we have developed and continue to produce for a broad range of customers across retail, foodservice and QSR channels both domestically and internationally. With a healthy appetite for growth, we continue to invest in new capabilities and capacity to bring innovative new products to market for our customers and consumers. In 2020 we launched our new premium wraps brand Simson's Pantry 'Better for You', which is available nationally in the major retailers. This new range of premium healthy wraps provide healthier and better options to our loyal consumers, with our new High Protein Low Carb 5pk wraps and Lite Low Carb Super Grains 5pk combining to now be the #1 premium wraps range in Coles.</p>
            <div>

            </div>
            <div>
                <div className='max-w-6xl mx-auto py-9 px-4'>
                    <div>
                        <div className='md:w-1/2 mx-auto text-center m-5'>
                            <h4 className='text-3xl uppercasetracking-tight font-bold text-orange-500'> OurVision</h4>
                            <h2 className=' tracking-tight opacity-50 '>To be Australia’s partner of choice through Quality, Service and Innovation driven by consumer insights</h2>
                        </div>
                        <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-4 m-5 text-center'>
                            <div className='p-4 flex flex-col items-center justify-center shadow-xl rounded-xl hover:bg-orange-300'>
                                <FaEye className='text-orange-600 text-6xl' />
                                <h4 className='font-bold text-xl tracking-tight my-3 flex items-center gap-2'>Vision </h4>

                                <p className='opacity-50'>This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes.</p>
                            </div>
                            <div className='p-4 flex flex-col items-center justify-center shadow-xl rounded-xl hover:bg-orange-300'>
                                <IoRocket className='text-orange-600 text-6xl' />
                                <h4 className='font-bold text-xl tracking-tight my-3 flex items-center gap-2'>Mission</h4>

                                <p className='opacity-50'>This place is great! Atmosphere is chill and cool but the staff is also really friendly.</p>
                            </div>
                            <div className='p-4 flex flex-col items-center justify-center shadow-xl rounded-xl hover:bg-orange-300'>
                                <BiCheese className='text-orange-600 text-6xl' />
                                <h4 className='font-bold text-xl tracking-tight my-3 flex items-center gap-2'>Values</h4>

                                <p className='opacity-50'>Excellent food. Menu is extensive and seasonal to a particularly high standard.</p>
                            </div>
                            <div className='p-4 flex flex-col items-center justify-center shadow-xl rounded-xl hover:bg-orange-300'>
                                <RiVerifiedBadgeFill className='text-orange-600 text-6xl' />
                                <h4 className='font-bold text-xl tracking-tight my-3 flex items-center gap-2'>Verify</h4>

                                <p className='opacity-50'>I have to say, I enjoyed every single bite of the meal in (RN). I had a 3 course meal.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-[1px] my-4' />
            </div>
            <div className='text-center'>
                <div>
                    <h4 className='text-3xl uppercasetracking-tight font-bold text-orange-500 my-4'> Delivering The Goods</h4>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <p>True Foods supplies around 40% of the Tortilla Wraps sold in the Retail bakery category, under our own Simson's Pantry brand and a number of well-known household brands. This is complemented by a large and growing presence in the Australian Foodservice market.Part of our success is an understanding and commitment to efficiently managing the national distribution requirements of our partners. We understand that making the best products is worthless, if we cannot get them to the right place at the right price.Our Supply Chain Team is highly experienced in moving vast volumes of ambient and frozen product around Australia, and dealing directly with all major Retail, Foodservice and QSR partners.</p>
                    <div>
                        <img src="https://www.truefoods.com.au/sites/default/files/Company-profile-pic04.jpg" alt="" />
                    </div>
                </div>
                <hr className='border-[1px] my-4' />
            </div>
            <div className='text-center'>
                <div>
                    <h4 className='text-3xl uppercasetracking-tight font-bold text-orange-500 my-4'> STRATEGIC FOCUS</h4>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <p>True Foods continues to focus on major growth opportunities and making new investments that will enhance our offering.</p>
                    <p>
                        We continue to invest in all areas of the business – in new capacity, in diversifying our production capabilities with related products, and constantly up skilling our staff and driving cost out of everything we do – we really are Australia’s
                    </p>
                    <p>
                        “go-to” provider of specialty and value-added bakery products.
                    </p>
                    <div>
                        <img src="https://www.truefoods.com.au/sites/all/themes/truefoods/images/overlay/company-profile-02.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;