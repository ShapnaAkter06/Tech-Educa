import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-16">
                <figure><img className='w-full' src={details.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Course Name: {details.name}</h2>
                    <p>{details.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Get Premium Access</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;