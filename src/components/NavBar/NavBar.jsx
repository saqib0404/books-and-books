import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
    const items =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink>Listed Books</NavLink></li>
            <li><NavLink>Pages to Read</NavLink></li>
        </>

    return (
        <div className="navbar bg-base-100 mb-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {items}
                    </ul>
                </div>
                <span className="btn font-bold btn-ghost text-xl"><NavLink to="/">Book Vibe</NavLink></span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mr-2 bg-green-600 text-white font-semibold rounded-lg">Sign in</a>
                <a className="btn bg-teal-500 text-white font-semibold rounded-lg">Sign up</a>
            </div>
        </div>
    )
}

export default NavBar