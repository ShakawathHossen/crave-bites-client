import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SectonTitle from '../../../components/SectonTitle/SectonTitle';

const Category = () => {
    return (
        <section>
            <SectonTitle heading='ORDER ONLINE' subHeading='From 11:00am to 10:00pm' />
             <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide> <img src="https://i.ibb.co/CMfG2qJ/slide1.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/X7ZH0HM/slide3.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/jJSV7yz/slide2.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/DMJkVJw/slide4.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;