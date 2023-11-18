import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    return (
        <div className="bg-transparent text-[#4792C0]  font-semibold   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" >
            <nav >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <img className='w-32 md:w-48' src="https://i.ibb.co/CKYqqMm/Subheading-removebg-preview.png" alt="" />
                    <div className="flex md:order-2">
                        <div className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ">
                            {
                                user ? <>
                                    <div className='px-3'>
                                        <button onClick={handleLogOut} className="btn btn-sm bg-transparent text-[#4792C0] ">Log Out</button>
                                    </div>
                                    <label tabIndex={0} className="  avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                </> : <>
                                    <Link className='text-[]' to='/login' >LogIn</Link>
                                </>
                            }
                        </div>

                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-search"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`  items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-search">

                        <ul className=" text-[#4792C0] flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <NavLink  to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/packages">Packages</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"> About</NavLink>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
