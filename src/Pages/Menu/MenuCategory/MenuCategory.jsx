import React from 'react';
import MenuItems from '../../../components/MenuItems/MenuItems';
import Cover from '../../../components/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img,subTitle }) => {
    return (
        <div>
            {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6 my-16'>
                {
                    items.map(item => <MenuItems
                        item={item}
                        key={item._id}
                    ></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}><button className='btn btn-outline border-0 border-b-4 text-slate-900'>ORDER YOUR FAVOURITE FOOD</button></Link>
        </div>
    );
};

export default MenuCategory;