import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto' >
            <h1 className='text-center text-4xl  text-[#50CAEB]'>About Us</h1>
            <hr className='my-5 container mx-auto' />
            <div>
                <h2 className='text-3xl font-semibold'>
                    Website Description :
                </h2>
                <p className='font-semibold py-4'>
                Welcome to TripLeee, your gateway to an unforgettable trip  experience in Bangladesh! 
                Immerse yourself in the breathtaking beauty of this country  with our meticulously crafted travel packages. At TripLeee,
                 we understand that travel is not just about the destination; it's about creating memories that last a lifetime.
                </p>

                <h2 className='text-2xl py-3 font-semibold'>
                    Why Choose Us:
                </h2>
                <p className='py-2' > <span className='font-semibold'> Tailored Packages : </span>  Tripleee provides
                 you the best packages that are designed to suit every traveler's preferences, whether you seek adventure, relaxation, or cultural exploration.
                </p>

                <p className='py-2'> <span className='font-semibold'>Expert Guidance : </span>   Trust our experienced travel experts to guide you through the best attractions, hidden gems, and local delicacies.
                </p>

                <p className='py-2'> <span className='font-semibold'>Quality Accommodation : </span>  Enjoy a comfortable stay in handpicked hotels that complement your travel experience.
                </p>

                <p className='py-2'> <span className='font-semibold'>Hassle-Free Planning : </span> We take care of all the details, from transportation to activities, so you can focus on making the most of your journey.
                </p>

                <p className='py-4'>Explore the wonders of Bangladesh with TripLeee and let us turn your travel dreams into reality!</p>
            </div>
        </div>
    );
};

export default About;