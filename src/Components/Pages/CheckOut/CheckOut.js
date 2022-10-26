import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const display = useLoaderData()
    return (
        <div className='flex justify-center items-center mt-16'>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={display?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='text-2xl mb-4'>Welcome To Tech Educa</h1>
                    <h2 className="card-title text-2xl"> Course name: {display?.name}</h2>
                    <p className='text-2xl'>ID Number: {display?.id} </p>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;