import React from 'react';

const MenuItems = ({item}) => {
    const {name,recipe,image,price}=item;
    return (
        <div className='grid grid-cols-5 gap-5'>
           <div className='col-span-1'>
            <img style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />


           </div>
           <div  className='col-span-3'>
            <h1 className='uppercase'>{name}----------------</h1>
            <p>{recipe}</p>

           </div>
           <div  className='col-span-1'>
            <p>{price}</p>

           </div>
        </div>
    );
};

export default MenuItems;