import React from 'react';
import bannerImg from '../../../assets/images/chair.png';
import './Banner.css';
import bannerBackground from '../../../assets/images/bg.png';
import SharedBtn from '../../../Components/SharedBtn/SharedBtn';


const Banner = () => {


    return (
        <div className="hero min-h-screen banner"
            style={{
                background: `url(${bannerBackground})`
            }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-2/2 lg:w-1/2'>
                    <img src={bannerImg} className="rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='w-2/2 lg:w-1/2 text-black dark:text-white '>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <SharedBtn>Get Started</SharedBtn>
                </div>
            </div>

        </div>



    );
};

export default Banner;