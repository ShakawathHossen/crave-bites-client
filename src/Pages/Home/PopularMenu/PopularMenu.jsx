import SectonTitle from '../../../components/SectonTitle/SectonTitle';
import MenuItems from '../../../components/MenuItems/MenuItems';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu]= useMenu()
    const popular= menu.filter(item => item.category=== 'popular'); 
    return (
        <section>
            <SectonTitle heading='FROM OUR MENU' subHeading='Check it out' />
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    popular.map(item =><MenuItems
                    item={item}
                    key={item._id}
                    ></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;