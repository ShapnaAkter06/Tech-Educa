import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { image, name, id } = course;
    return (
        <div className="max-w-full mr-5 md:mr-0 rounded-md shadow-md dark:bg-gray-100 dark:text-gray-900">
            <img
                src={image}
                alt=""
                className="saturate-200 bg-center bg-no-repeat bg-cover object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                </div>

                <Link to={`/details/${id}`} className='font-bold text-blue-900' >
                    See Details...
                </Link>
            </div>
        </div>
    );
};

export default Course;