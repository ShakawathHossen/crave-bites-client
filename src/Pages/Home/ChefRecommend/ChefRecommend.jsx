import React from 'react';
import SectonTitle from '../../../components/SectonTitle/SectonTitle';

const ChefRecommend = () => {
    return (
        <section>
            <SectonTitle heading='CHEF RECOMMENDS' subHeading='Should Try' />
            <div className='flex justify-between items-center'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/1sg9ygL/Rectangle-5.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/1sg9ygL/Rectangle-5.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/1sg9ygL/Rectangle-5.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default ChefRecommend;