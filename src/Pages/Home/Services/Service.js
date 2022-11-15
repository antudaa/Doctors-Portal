import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import cavity from '../../../assets/images/cavity.png';
import HomeServiceCard from './HomeServiceCard';


const Service = () => {

    const data = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            img: fluoride,
            description: "Fluoride treatments are a great way to prevent more cavities in patients who are already prone to ?"
        },
        {
            id: 2,
            title: 'Cavity Felling',
            img: cavity,
            description: "When you get a cavity filled, your dentist removes the existing tooth decay and restores the tooth ."
        },
        {
            id: 3,
            title: "Teeth Whitening",
            img: whitening,
            description: "Professional teeth whiteners are safe, effective, and done under the supervision of a dental professional."
        }
    ]


    return (
        <div>
            <div className='text-center my-16'>
                <h4 className='text-cyan-400 text-xl font-bold mb-6'>Our Services</h4>
                <h1 className='text-4xl  text-black dark:text-white'>Services We Provide</h1>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-12 px-6 pb-10 text-center`}>
                {
                    data.map((info) => <HomeServiceCard
                        key={info.id}
                        info={info}
                    ></HomeServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;