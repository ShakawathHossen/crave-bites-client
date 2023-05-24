import React from 'react';

const SectonTitle = ({heading,subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <p className='text-yellow-600 mb-2'>---{subHeading}---</p>
            <h1 className='border-y-2 uppercase mx-auto py-4 text-3xl'>{heading}</h1>
            
        </div>
    );
};

export default SectonTitle;