import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Course = ({ course }) => {
    const { image, id, name } = course;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">Course Name: {name}</h2>
                    <p className="dark:text-gray-100"></p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Read more <FaArrowRight></FaArrowRight></button>
            </div>
        </div>
    );
};

export default Course;