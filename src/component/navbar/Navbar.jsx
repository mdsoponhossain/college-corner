import { NavLink } from "react-router-dom";
import './navbar.css'
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    const navItems = <>
        <li><NavLink className='ml-5 text-[#7D8577]  font-semibold text-md' to='/'>Home</NavLink></li>
        <li><NavLink className='ml-5 text-[#7D8577]  font-semibold text-md' to='/colleges'>Colleges</NavLink></li>
        <li><NavLink className='ml-5 text-[#7D8577]  font-semibold text-md' to='/admission'>Admission</NavLink></li>
        <li><NavLink className='ml-5 text-[#7D8577]  font-semibold text-md' to='/my-college'>My College</NavLink></li>
    </>
    return (
        <div className="relative">
            <div className="navbar border">
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
                            className=" menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <a className=" font-bold hover:cursor-pointer md:text-3xl text-[rgb(34,124,84)]">CollegeCorner</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end border-4 relative">
                    <IoSearchOutline className="md:absolute mr-5 md:mr-0 md:right-[30%] lg:right-[35%] text-2xl md:text-3xl hover:cursor-pointer border-4" id="search-icon" ></IoSearchOutline>
                    <NavLink to='/sign-up'>Sign Up</NavLink>
                </div>
            </div>
            {/* search container */}
            {/* <div className="border-4 border-red-500 h-[300px] absolute w-full top-[100px]"
            id="search-cotainer">

            </div> */}
        </div>
    );
};

export default Navbar;