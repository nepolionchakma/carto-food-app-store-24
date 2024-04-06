import React from 'react';
import CoverPhoto from '../../assets/cover meal 2.png'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const Cover = () => {
    return (
        <div className=' '>
            <div className='sm:p-[90px] flex bg-no-repeat bg-cover' style={{
                backgroundImage: `url(${CoverPhoto})`,
            }}>
                <Card className='lg:w-1/2 md:2/3 bg-white bg-cover bg-center  bg-opacity-25 bg-no-repeat text-white p-7 duration-500'>
                    <CardHeader>
                        <CardTitle><span className='text-xl font-bold'>New Arrival</span></CardTitle>
                        {/* <CardDescription><span className='text-xl font-bold'>Best ever</span></CardDescription> */}
                    </CardHeader>
                    <CardContent>
                        <div className='py-5'>
                            <h3 className='text-5xl font-bold'>Discover Our</h3>
                            <h3 className='text-5xl font-bold'>New Meal</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur asperiores id totam veritatis.</p>
                    </CardContent>
                    <CardFooter>
                        <button className='uppercase mt-9 px-6 py-4 bg-orange-500 rounded-md font-bold'>Buy Now</button>
                    </CardFooter>
                </Card>


                <div >




                </div>
            </div>
        </div>
    );
};

export default Cover;