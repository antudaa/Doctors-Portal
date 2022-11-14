import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import img1 from '../../../assets/images/people1.png';
import img2 from '../../../assets/images/people2.png';
import img3 from '../../../assets/images/people3.png';



const PatientReview = () => {


    const data = [
        {
            id: 1,
            name: "Jemson",
            location: "Canada",
            review: "There are too good .There service is just awesome the price is also good...",
            img: img1
        },
        {
            id: 1,
            name: "Farnandez",
            location: "USA",
            review: "There are too good .There service is just awesome the price is also good...",
            img: img2
        },
        {
            id: 1,
            name: "Kareena",
            location: "Korea",
            review: "There are too good .There service is just awesome the price is also good...",
            img: img3
        }
    ]


    return (
        <div className='px-6 lg:px-16 py-16'>
            <div className='flex justify-between mb-24'>
                <div className=''>
                    <h4 className='text-cyan-500 text-xl font-bold'>Testimonial</h4>
                    <h1 className='text-4xl text-black dark:text-white font-semi-bold my-6'>What Our Patients Says</h1>
                </div>
                <div className=''>
                    <img className='w-40' src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    data.map((info) => (
                        <div className='bg-white drop-shadow-2xl p-7 rounded-xl text-black'>
                            <div>
                                <p className='my-6'>{info.review}</p>
                            </div>
                            <div className='flex justify-start'>
                                <div className="avatar mr-8">
                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={info.img} alt=''/>
                                    </div>
                                </div>
                                <div>
                                    <p className='block font-bold text-xl'>{info.name}</p>
                                    <p className='block font-semibold text-lg'>{info.location}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PatientReview;