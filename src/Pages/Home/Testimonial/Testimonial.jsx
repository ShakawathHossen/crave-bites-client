import React, { useEffect, useState } from 'react';
import SectonTitle from '../../../components/SectonTitle/SectonTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectonTitle heading='TESTIMONIALS' subHeading='What Our Clients Say' />
            <div className='w-3/4 mx-auto'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review =>
                            <SwiperSlide
                                key={review._id}
                            >
                                <div className='text-center flex flex-col items-center w-3/4 mx-auto'>
                                    <p>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    </p>
                                    <p>
                                        {review.details}
                                    </p>
                                    <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;