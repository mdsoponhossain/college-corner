import { NavLink } from "react-router-dom";
import './navbar.css'
import { IoSearchOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../../contextProvider/ContextProvider";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const { currentUser, handleSignOut } = useContext(AuthContext);
    const [isSearching, setIsSearching] = useState(false);
    const navItems = <>
        <li><NavLink className='ml-5 text-[#7D8577]  font-semibold text-md' to='/'>Home</NavLink></li>
        <li><NavLink className='ml-5 text-[#7D8577]  font-semibold text-md' to='/colleges'>Colleges</NavLink></li>

        {
            currentUser && <li><NavLink className='ml-5 text-[#7D8577]  font-semibold text-md' to='/admission'>Admission</NavLink></li>

        }
        {
            currentUser && <li><NavLink className='ml-5 text-[#7D8577]  font-semibold text-md' to={`/my-college/${currentUser?.email}`}>My College</NavLink></li>

        }

    </>
    return (
        <div className="relative max-w-[1280px] mx-auto h-fit">
            <div className="navbar">
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
                            className=" menu-sm dropdown-content bg-white bg-opacity-80 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
                <div className="navbar-end relative">
                    <IoSearchOutline onClick={() => setIsSearching(true)} className="block md:absolute search-icon mr-2 md:mr-0 md:right-[30%] lg:right-[35%] text-2xl md:text-3xl hover:cursor-pointer"></IoSearchOutline>
                    {
                        !currentUser?.email ? <NavLink to='/sign-up'>Sign Up</NavLink> :
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn m-1">
                                    {
                                        currentUser?.photoURL ? <img className="h-10 w-10 rounded-[25px]" src={currentUser?.photoURL} alt="" /> : <h1>{currentUser?.email?.slice(0, 1)}</h1>
                                    }
                                </div>
                                <ul tabIndex={0} className="bg-white bg-opacity-80 dropdown-content menu  rounded-box z-[1] w-52 p-2 shadow">
                                    <li className="text-lg font-bold">{currentUser?.displayName}</li>
                                    <li onClick={handleSignOut} className="bg-green-800 text-white">Sign Out</li>
                                </ul>
                            </div>
                    }
                </div>
            </div>

            {/* search container */}
            <div className={isSearching ? "w-full h-40 bg-white  mt-[0.5px] absolute z-10" : "hidden"}>
                <div className={isSearching && "w-full relative right-0 grid justify-end"}>
                    <div onClick={() => setIsSearching(false)} className={isSearching && "h-14 w-14 grid justify-center items-center"}>
                        <RxCross1 className={isSearching ? "text-2xl md:text-3xl text-center" : "hidden"} />
                    </div>
                </div>

                {/* search form */}
                <div className={isSearching ? "w-[90%] md:w-[60%] lg:w-[40%] mx-auto" : "hidden"}>
                    <form className={isSearching ? "flex text-white" : "hidden"}>
                        <input type="text" name="searchText" className="text-white bg-green-700 pl-2 h-12 w-[80%]" placeholder="Your Search Text..." />
                        <button className="grid justify-center items-center w-[80px] h-12 bg-black text-2xl"><IoSearchOutline className="block text-white"></IoSearchOutline></button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Navbar;