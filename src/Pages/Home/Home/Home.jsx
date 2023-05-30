import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Quotes from '../Quotes/Quotes';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Quotes/>
            <PopularMenu/>
        </div>
    );
};

export default Home;