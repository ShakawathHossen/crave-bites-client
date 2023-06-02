import React from 'react';
import SectonTitle from '../../../components/SectonTitle/SectonTitle';
import './Featured.css'

const Featured = () => {
    return (
        <section className='background bg-fixed overlay py-10'>
            <SectonTitle heading='FROM OUR MENU' subHeading='Check it out' />
            <div className='grid grid-cols-2  justify-center items-center px-32 pb-10 pt-10 bg-black bg-opacity-50'>
                <div>
                    <img className='w-10/12' src="https://i.ibb.co/4tPDVnr/featured.jpg" alt="" />
                </div>
                <div className='text-white'>
                    <p className='pb-2'>March 20, 2023</p>
                    <p className='pb-2 font-bold text-xl'>WHERE CAN I GET SOME?</p>
                    <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn'>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;