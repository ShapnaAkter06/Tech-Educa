import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { image, name, id } = course;
    return (
        <div className="max-w-xs p-6 rounded-md shadow-lg dark:bg-gray-900 dark:text-gray-50 border" data-aos="fade-left">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{name}</span>
                <Link to={`/details/${id}`} className='font-bold text-blue-900' course={course} key={course.id}>
                    See Details...
                </Link>
            </div>          
        </div>
    );
};

export default Course;