import React from 'react';
import Slider from '../Slider/Slider';
import Place from '../Place/Place';


const Home = () => {
    return (
        <div >
            <Slider />
            <div className='container mx-auto' >

                <Place />
            </div>

        </div>
    );
};

export default Home;