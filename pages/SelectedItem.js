import React from 'react';
import { Element } from 'react-scroll';
import useItems from '../hooks/useItems';
import HomeItem from '../pages/HomeItem';

const SelectedItem = () => {
    const [items] = useItems();

    return (
        <>
            <Element id='price' name='price'>
                <div className="w-full my-20 h-auto flex flex-col justify-center items-center  ">
                    <p className="text-sm uppercase text-gray-400">Prices</p>
                    <h1 className="text-indigo-800 text-6xl font-bold text-center">
                        Service Prices
                    </h1>
                    
                    <div className='grid lg:grid-cols-3 gap-4 sm:grid-cols-1 mt-8 ml-6'>
                        {
                            items.slice(0, 6).map(item => <HomeItem
                                key={item._id}
                                item={item}
                            ></HomeItem>)
                        }
                    </div>
                </div>
            </Element>
        </>

    );
};

export default SelectedItem;