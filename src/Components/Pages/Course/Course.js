import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { image, name } = course;
    return (
        <div className="max-w-xs p-6 rounded-md shadow-lg dark:bg-gray-900 dark:text-gray-50 border">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{name}</span>
                <Link className='font-bold text-blue-900'>See Details...</Link>
            </div>
        </div>
    );
};

export default Course;