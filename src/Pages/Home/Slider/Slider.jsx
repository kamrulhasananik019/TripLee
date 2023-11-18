import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className=' ' style={{ background: 'url(https://images.unsplash.com/photo-1589307357838-9ce2259ac411?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center center/cover' }}>
    <div className=' md:py-96'>
        <h1 className='text-2xl md:text-5xl font-semibold  text-center text-white'> TripLeee</h1>
        <p className='py-5 text-3xl md:text-6xl font-bold text-center text-white'>Enjoy , Experience , Explore</p>
        <div className='flex justify-center gap-x-16 py-5'>
                        <Link to="about" className='btn  border text-white  border-blue-400 bg-[#50CAEB] hover:bg-[#4792C0]'>
                            ABOUT US
                        </Link>

                        <Link to="packages" className='btn text-white  border  border-blue-400 bg-transparent hover:bg-[#50CAEB]'>
                            EXPLORE TRIP
                        </Link>
                    </div>
    </div>
        </div>
    );
};

export default Slider;
