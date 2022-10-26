import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const display = useLoaderData()
    return (
        <div className='flex justify-center items-center mt-16'>
            {/* <div>
                <h2 className='text-4xl text-pink-700 font-bold mb-4'>Congratulations!!</h2>
                <p className='text-2xl'>Your selected course is: <span className='text-pink-700 font-bold'>{display?.name}</span></p>
            </div> */}
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={display?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='text-2xl mb-4'>Welcome To Tech Educa</h1>
                    <h2 className="card-title text-4xl"> <span className='text-2xl'>Course name:</span> {display?.name}</h2>
                    <p className='text-2xl font-semibold'>ID Number: {display?.id} </p>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;