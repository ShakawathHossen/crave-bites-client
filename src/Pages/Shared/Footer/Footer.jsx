import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='grid grid-cols-2'>
           <div className='bg-[#1F2937] text-white p-10'>
          <div className='flex flex-col gap-2 items-center justify-center align-items-center'>
          <h1 className='text-3xl'>Contact Us</h1>
        <p>123 ABS Street, Uni 21, Bangladesh</p>
        <p>+88 123456789</p>
        <p>Mon - Fri: 08:00 - 22:00</p>
        <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
           </div>
           <div className='bg-[#111827] text-white  p-10'>
           <div className='flex flex-col gap-6 items-center justify-center align-items-center'>
                <h1 className='text-3xl'>Follow Us</h1>
                <p className='text-xl'>Join us on social media</p>
                <div className='flex gap-6 text-2xl'>
                   <span><FaFacebook></FaFacebook></span>
                   <span><FaInstagram></FaInstagram></span>
                   <span><FaYoutube></FaYoutube></span>
                </div>
                </div>

           </div>
        </div>
    );
};

export default Footer;