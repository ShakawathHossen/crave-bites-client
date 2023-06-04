 import React from 'react';
 
 const FoodCard = ({item}) => {
    const {name,recipe,image,price}=item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Food" /></figure>
        <p className='bg-slate-900 text-white absolute right-3 px-2 py-1 top-2'>${price }</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    );
 };
 
 export default FoodCard;