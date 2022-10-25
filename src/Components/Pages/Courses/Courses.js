import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import SideBar from '../SideBar/SideBar';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-pink-700 my-12'>Our Courses</h2>
            <div className='courses mx-4'>
                <SideBar categories={courses}></SideBar>
                <div className='grid lg:grid-cols-3 gap-4'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;