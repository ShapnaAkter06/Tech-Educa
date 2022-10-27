import React from 'react';
import { Link } from 'react-router-dom';
import homeBg from '../../../assets/home.gif'

const Home = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-around items-center px-4 py-12 lg:py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24'>
            <div className='max-w-xl mb-6 lg:mt-8 font-semibold'>
                <h1 className='text-2xl font-bold mb-4 text-pink-700'>Welcome to Tech Educa</h1>
                <p>Learn modern Web Development fundamentals as well as advanced topics. Start today. Develop professional skills that position you at the top of the candidate list. Expert Instructors. Download To Your Phone. 30-Day Money Guarantee. Over 204,000 Courses</p>
                <Link to='/courses'>
                <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 bg-pink-700 text-white mt-4">Visit Course</button>
                </Link>
            </div>
            <div className='w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96 mt-4'>
                <img src={homeBg} alt="" />
            </div>
        </div>
    );
};

export default Home;