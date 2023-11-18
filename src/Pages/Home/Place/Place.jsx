import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSafety } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { SiMastercomfig } from "react-icons/si";
import Packages from '../../Packages/Packages';

const Place = () => {
    return (
        <div className='mt-16 p-3' >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div >
                    <h2 className='text-4xl font-semibold text-[#4792C0]'>Experience The New Adventure</h2>
                    <p className='py-3 font-semibold'>Welcome to TripLeee, your gateway to an unforgettable trip experience in Bangladesh! Immerse yourself in the breathtaking beauty of this country with our meticulously crafted travel packages. At TripLeee,
                        we understand that travel is not just about the destination; it's about creating memories that last a lifetime.</p>
                    <div className='flex gap-x-10 py-3'>
                        <div><p className='text-6xl text-[#50CAEB]'><AiOutlineSafety /></p></div>
                        <div><h3 className='text-2xl font-semibold'>Safe Traveling</h3>
                        <p>Tripleee provides you the best packages that are designed to suit every traveler's preferences, whether you seek adventure, relaxation, or cultural exploration.</p>
                        </div>
                    </div>
                    <div className='flex gap-x-10 py-3'>
                        <div><p className='text-6xl  text-[#50CAEB]'><FaRegMoneyBillAlt /></p></div>
                        <div><h3 className='text-2xl font-semibold'>Affordable Price</h3>
                        <p>Enjoy a comfortable stay in handpicked hotels that complement your travel experience.</p>
                        </div>
                    </div>

                    <div className='flex gap-x-10 py-3'>
                        <div><p className='text-6xl  text-[#50CAEB]'><SiMastercomfig /></p></div>
                        <div><h3 className='text-2xl font-semibold'>Comfortable Accommodation</h3>
                        <p>We take care of all the details, from transportation to activities, so you can focus on making the most of your journey.</p>
                        </div>
                    </div>

                </div>
                {/* 2 */}
                <div >
                    <img className='rounded-2xl' src="https://images.unsplash.com/photo-1589307357647-4e11b161a2b3?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>

<Packages/>

            <div className=' pt-16 md:pt-32 gap-3 grid grid-cols-1 md:grid-cols-2'>
                <div className='text-4xl font-semibold text-[#50CAEB]'>Begin Your New Life Experience With Exploring New Destination</div>
                <div> <p className='py-3 font-semibold text-xl'> 
                TripLeee provides you the best packages that are designed to suit every traveler's preferences, whether you seek adventure, relaxation, or cultural exploration.</p>
                    <div className='flex gap-x-16 py-5'>
                        <Link to="about" className='btn  border border-blue-400 bg-[#50CAEB] hover:bg-[#4792C0]'>
                            ABOUT US
                        </Link>

                        <Link to="packages" className='btn dark:text-slate-400 border border-blue-400 bg-transparent hover:bg-[#50CAEB]'>
                            EXPLORE TRIP
                        </Link>
                    </div>
                    </div>

            </div>
        </div>
    );
};

export default Place;