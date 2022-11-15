import React from 'react';

const HomePatientReviews = ( { info } ) => {

    const { review, img, name, location } = info;

    return (
        <div className='bg-white drop-shadow-2xl p-7 rounded-xl text-black'>
            <div>
                <p className='my-6'>{review}</p>
            </div>
            <div className='flex justify-start'>
                <div className="avatar mr-8">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div>
                    <p className='block font-bold text-xl'>{name}</p>
                    <p className='block font-semibold text-lg'>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default HomePatientReviews;