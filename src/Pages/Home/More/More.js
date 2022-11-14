import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import SharedBtn from '../../../Components/SharedBtn/SharedBtn';


const More = () => {
    return (
        <div className="hero min-h-screen banner">
            <div className="hero-content flex-col lg:flex-row w-4/5 gap-6">
                <div className='w-2/2 lg:w-1/2 drop-shadow-2xl'>
                    <img src={treatment} className="rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='w-2/2 lg:w-1/2 text-black dark:text-white '>
                    <h1 className="text-5xl font-bold drop-shadow-xl">Exceptional Dental Care , On Your Terms</h1>
                    <p className="py-6">Dental care or dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. Dentistry, the professional care of teeth, including professional oral hygiene and dental surgery.</p>
                    <SharedBtn>Get Started</SharedBtn>
                </div>
            </div>

        </div>
    );
};

export default More;