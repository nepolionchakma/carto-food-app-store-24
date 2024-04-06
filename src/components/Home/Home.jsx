import React from 'react';
import Cover from '../Cover/Cover';
import Slider from '../Slider/Slider';
import HomeItems from '../HomeItems/HomeItems';

const Home = () => {
    return (
        <div>
            <Cover />
            <Slider />
            <HomeItems />
        </div>
    );
};

export default Home;