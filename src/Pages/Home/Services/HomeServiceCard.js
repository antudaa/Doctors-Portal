import React from 'react';

const HomeServiceCard = ( { info } ) => {

    const { img, title, description } = info;

    return (
        <div className={`rounded-xl p-7 bg-white text-black drop-shadow-2xl`}>
            <div className='flex justify-center my-4 mr-6'>
                <img src={img} alt="" />
            </div>
            <div className=''>
                <h1 className='text-2xl font-bold my-3'>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default HomeServiceCard;