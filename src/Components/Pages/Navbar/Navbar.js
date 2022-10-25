import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaListAlt } from 'react-icons/fa';
import logo from '../../../assets/logo.svg';
import './Navbar.css'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const Navbar = () => {
    const { user , logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div>
            <header className="p-2 bg-none left-0 right-0 dark:text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <div className="flex">
                        <Link to="/" className="flex items-center p-2 text-4xl">
                            <img className='logo' src={logo} alt="" />
                        </Link>
                        <ul className="items-stretch hidden space-x-3 md:flex">
                            <li className="flex">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "flex items-center px-4 -mb-1" : undefined
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="flex">
                                <NavLink
                                    to="/courses"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center px-4 -mb-1 border-b-2 dark:text-violet-400 dark:border-violet-400"
                                            : "flex items-center px-4 -mb-1"
                                    }
                                >
                                    Courses
                                </NavLink>
                            </li>
                            <li className="flex">
                                <NavLink
                                    to="/faq"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center px-4 -mb-1 border-b-2 dark:text-violet-400 dark:border-violet-400"
                                            : "flex items-center px-4 -mb-1"
                                    }
                                >
                                    FAQ
                                </NavLink>
                            </li>
                            <li className="flex">
                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center px-4 -mb-1 border-b-2 dark:text-violet-400 dark:border-violet-400"
                                            : "flex items-center px-4 -mb-1"
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="items-center flex-shrink-0 hidden md:flex">
                        {user?.email ? (
                            <>
                                <Link
                                    to="/profile"
                                    className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                                >
                                    {user.displayName}
                                </Link>
                                <Link
                                    to="/login"
                                    className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                                >
                                    <button onClick={handleLogOut}>Log out</button>
                                </Link>
                            </>

                        ) : (
                            <>
                                <Link to="/registration" className="self-center px-8 py-3 rounded">
                                    Registration
                                </Link>
                                <Link
                                    to="/login"
                                    className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                                >
                                    Login
                                </Link>
                            </>
                        )}
                    </div>
                    <div className="dropdown dropdown-end md:hidden ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 dark:text-gray-100"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content transition bg-gray-200 rounded-box w-52"
                        >
                            <li className="flex">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "flex items-center px-4 -mb-1" : undefined
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="flex">
                                <NavLink
                                    to="/courses"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center px-4 -mb-1 border-b-2 dark:text-violet-400 dark:border-violet-400"
                                            : "flex items-center px-4 -mb-1"
                                    }
                                >
                                    Courses
                                </NavLink>
                            </li>
                            <li className="flex">
                                <NavLink
                                    to="/faq"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center px-4 -mb-1 border-b-2 dark:text-violet-400 dark:border-violet-400"
                                            : "flex items-center px-4 -mb-1"
                                    }
                                >
                                    FAQ
                                </NavLink>
                            </li>
                            <li className="flex">
                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center px-4 -mb-1 border-b-2 dark:text-violet-400 dark:border-violet-400"
                                            : "flex items-center px-4 -mb-1"
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                            {user?.email ? (
                                <>
                                <Link
                                    to="/profile"
                                    className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                                >
                                    {user.displayName}
                                </Link>
                                <Link
                                    to="/login"
                                    className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                                >
                                   <button onClick={handleLogOut}>Log out</button>
                                </Link>
                            </>
                            ) : (
                                <>
                                    <Link
                                        to="/registration"
                                        className="self-center px-8 mt-1 py-3 rounded"
                                    >
                                        Registration
                                    </Link>
                                    <Link
                                        to="/login"
                                        className="self-center px-8 mt-2 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                                    >
                                        Login
                                    </Link>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </header>


        </div>
    );
};

export default Navbar;