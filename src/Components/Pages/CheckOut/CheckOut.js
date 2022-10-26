import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const display = useLoaderData()
    return (
        <div className='flex justify-center items-center mt-16'>
            <div>
                <h2 className='text-4xl text-pink-700 font-bold mb-4'>Congratulations!!</h2>
                <p className='text-2xl'>Your selected course is: <span className='text-pink-700 font-bold'>{display.name}</span></p>
            </div>
        </div>
    );
};

export default CheckOut;