import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import SideBar from '../SideBar/SideBar';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-pink-700 my-12'>Our Courses</h2>
            <div className='md:flex mx-4'>
                <SideBar categories={courses}></SideBar>
                <div className='grid lg:grid-cols-3 gap-4 ml-5 mt-5 md:mt-0'>
                    {
                        courses?.map(course => <Course
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