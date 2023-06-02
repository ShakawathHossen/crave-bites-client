import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../../components/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectonTitle from '../../../components/SectonTitle/SectonTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const coverImg= 'https://i.ibb.co/k9hGDKY/banner3.jpg'
const dessertImg ='https://i.ibb.co/hXKY1CZ/dessert-bg.jpg'
const souptImg ='https://i.ibb.co/vxL2DmP/soup-bg.jpg'
const saladtImg ='https://i.ibb.co/PcBHxDc/salad-bg.jpg'
const pizzatImg ='https://i.ibb.co/sWcbgR3/pizza-bg.jpg'

const Menu = () => {
    const [menu]= useMenu();
    const dessert = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const offered = menu.filter(item=> item.category === 'offered')
    return (
        
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Crave Bites-All Menu</title>
            </Helmet>
            <Cover img={coverImg} title='OUR MENU' subTitle='Would You Like to Try A Dish ?' />
            <SectonTitle heading="TODAY'S OFFER" subHeading="Don't miss" />

            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title='Dessert' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rerum!' img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title='soup' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rerum!' img={pizzatImg}></MenuCategory>
            <MenuCategory items={salad} title='soup' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rerum!' img={saladtImg}></MenuCategory>
            <MenuCategory items={soup} title='soup' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rerum!' img={souptImg}></MenuCategory>
        </div>
    );
};

export default Menu;