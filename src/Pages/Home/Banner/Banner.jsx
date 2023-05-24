import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
       <div className='text-center '>
         <Carousel>
                <div>
                    <img src="https://i.ibb.co/DK4h2Wh/02.jpg" />
                   
                </div>
            
                <div>
                    <img src="https://i.ibb.co/HN5C3GN/05.png" />
                 
                </div>
                <div>
                    <img src="https://i.ibb.co/XC0vKF3/04.jpg" />
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/vsDQwQv/01.jpg" />
                   
                </div>
            </Carousel>
       </div>
    );
};

export default Banner;