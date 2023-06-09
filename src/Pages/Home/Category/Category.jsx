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
                slidesPerView={4}
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            
            >
                <SwiperSlide> 
                    <img src="https://i.ibb.co/CMfG2qJ/slide1.jpg" alt=""/>
                    <p className='text-3xl uppercase text-center -mt-12 text-white'>Salad</p>
                     </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/X7ZH0HM/slide3.jpg" alt="" />
                <p className='text-3xl uppercase text-center -mt-12 text-white text'>Soup</p> </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/CMfG2qJ/slide1.jpg" alt="" />
                <p className='text-3xl uppercase text-center -mt-12 text-white text'>Pizza</p> </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/jJSV7yz/slide2.jpg" alt="" /> 
                <p className='text-3xl uppercase text-center -mt-12 text-white text'>Desert</p></SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/X7ZH0HM/slide3.jpg" alt="" />
                <p className='text-3xl uppercase text-center -mt-12 text-white text'>Soup</p> </SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/DMJkVJw/slide4.jpg" alt="" /> 
                <p className='text-3xl uppercase text-center -mt-12 text-white text'>Desert</p></SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/jJSV7yz/slide2.jpg" alt="" /> 
                <p className='text-3xl uppercase text-center -mt-12 text-white text'>Pizza</p></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;