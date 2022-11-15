import React from 'react';

const HomeCard = ( { info } ) => {

    const { cls, img, title, description } = info;

    return (
        <div className={`rounded-xl ${cls} p-7 flex drop-shadow-2xl`}>
            <div className='flex  mr-6 w-1/3'>
                <img src={img} alt="" />
            </div>
            <div className='text-white w-2/3'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default HomeCard;