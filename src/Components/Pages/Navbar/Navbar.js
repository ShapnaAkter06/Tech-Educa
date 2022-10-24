import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaListAlt } from 'react-icons/fa';
import logo from '../../../assets/logo.svg';
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="navbar bg-pink-200 rounded-md z-10">
                    <div className="flex-1">
                        <img className='logo' src={logo} alt="" />
                    </div>
                    <div className="flex-none gap-2">
                        <div className="flex-none  hidden sm:block">
                            <ul className="menu menu-horizontal p-0 text-cyan-900 font-medium">
                                <li className="mx-2">
                                    <NavLink to={"/"}>Home</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"/courses"}>Courses</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"/Blog"}>Blog</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"/faq"}>FAQ</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"checkout"}>Check Out</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"/login"}>Log In</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"/registration"}>Registration</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-end sm:hidden">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="text-cyan-800">
                                    <FaListAlt></FaListAlt>
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li className="mx-2">
                                    <NavLink to={"/"}>Home</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"/courses"}>Courses</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"/Blog"}>Blog</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"/faq"}>FAQ</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"checkout"}>Check Out</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"/login"}>Log In</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"/registration"}>Registration</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;