import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import img1 from '../../../assets/images/people1.png';
import img2 from '../../../assets/images/people2.png';
import img3 from '../../../assets/images/people3.png';
import HomePatientReviews from './HomePatientReviews';



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
            id: 2,
            name: "Farnandez",
            location: "USA",
            review: "There are too good .There service is just awesome the price is also good...",
            img: img2
        },
        {
            id: 3,
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
                    data.map((info) => <HomePatientReviews
                        key={info.id}
                        info={info}
                    ></HomePatientReviews>)
                }
            </div>
        </div>
    );
};

export default PatientReview;