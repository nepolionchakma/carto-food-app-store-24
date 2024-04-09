import React from 'react';
import Cover from '../Cover/Cover';
import Slider from '../Slider/Slider';
import HomeItems from '../HomeItems/HomeItems';
import BestServices from '../BestServices/BestServices';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Cover />
            <Slider />
            <HomeItems />
            <BestServices />
            <Reviews />
        </div>
    );
};

export default Home;