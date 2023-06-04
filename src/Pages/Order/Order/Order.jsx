import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../../components/Cover/Cover';
const coverImg = 'https://i.ibb.co/hX23JgQ/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category}= useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu]= useMenu();


    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const soup = menu.filter(item=> item.category === 'soup')
    const dessert = menu.filter(item=> item.category === 'dessert')
    const drinks = menu.filter(item=> item.category === 'drinks')
    return (    
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Crave Bites-Order Food</title>
            </Helmet>
            <Cover img={coverImg} title='OUR SHOP' subTitle='Would You Like to Try A Dish ?' />

          <div className='text-center py-10'>
          <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                   <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
          </div>

        </div>
    );
};

export default Order;