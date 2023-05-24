import React from 'react';

const SectonTitle = ({heading,subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-3/12 my-8'>
            <marquee className="text-yellow-500" behavior="" direction="right">--- {subHeading} ---</marquee>
            <h1 className='border-y-2 uppercase mx-auto py-4 text-3xl'>{heading}</h1>
            
        </div>
    );
};

export default SectonTitle;