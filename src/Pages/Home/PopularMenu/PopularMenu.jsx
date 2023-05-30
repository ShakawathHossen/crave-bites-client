import React, { useEffect, useState } from 'react';
import SectonTitle from '../../../components/SectonTitle/SectonTitle';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then (res => res.json())
        .then (data =>{
            const popularItems = data.filter(item => item.category=== 'popular');
            setMenu(popularItems);
            console.log(popularItems)
        })

    }, []);
    return (
        <section>
            <SectonTitle heading='FROM OUR MENU' subHeading='Check it out' />
            <div>
                {
                    menu.map(item =><></> )
                }
            </div>
        </section>
    );
};

export default PopularMenu;