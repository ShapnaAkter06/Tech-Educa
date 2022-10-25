import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ categories }) => {
    console.log(categories);
    return (
        <div>
            <aside className="w-full flex-col sm:w-60 dark:bg-gray-900 dark:text-gray-100 rounded-md shadow-lg border" data-aos="fade-right">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <h2 className="text-sm font-bold tracking-widest uppercase dark:text-gray-400 p-2 shadow-md">Select Your Course</h2>
                        <div className="flex flex-col space-y-1">
                            {
                                categories?.map(category => <li className='p-2 border shadow-md'>
                                    <Link key={category.id}>{category.name}</Link>
                                </li>)
                            }
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    );
};

export default SideBar;