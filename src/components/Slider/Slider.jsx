import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Slide from '../../assets/meal.jpg'
import imagesSlider from '../../assets/imagesSlider.json'


const Slider = () => {
    return (
        <div className='max-w-7xl mx-auto py-9 px-4'>
            <div className='py-8 flex flex-col items-center gap-4'>
                <h4 className='text-3xl font-bold uppercase'>Recipe Gallery</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore sunt nihil nesciunt laudantium soluta?</p>
            </div>
            <div className='flex justify-center py-7 m-9'>
                <Carousel className="w-full sm:max-w-4xl md:max-w-7xl">
                    <CarouselContent className=" ">
                        {imagesSlider.map((item, index) => (
                            <CarouselItem key={index} className=" w-full sm:basis-1/2 md:basis-1/4 lg:basis-1/5 ">
                                <div className="p-1">
                                    <div>
                                        <img src={item.img} alt="" />
                                    </div>
                                    {/* <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">

                                        </CardContent>
                                    </Card> */}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

        </div>
    );
};

export default Slider;