import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Quotes from '../Quotes/Quotes';
import PopularMenu from '../PopularMenu/PopularMenu';
import Callus from '../Callus/Callus';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Crave Bites-Home</title>
            </Helmet>

            <Banner/>
            <Category/>
            <Quotes/>
            <PopularMenu/>
            <Callus/>
            <ChefRecommend/>
            <Featured/>
            <Testimonial/>
        </div>
    );
};

export default Home;