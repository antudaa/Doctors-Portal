import React from 'react';
import location from '../../../assets/icons/marker.svg';
import clock from '../../../assets/icons/clock.svg';
import phone from '../../../assets/icons/phone.svg';


const CardInfo = () => {


    const data = [
        {
            id: 1,
            img : clock,
            title: "Opening Hours",
            class : 'bg-sky-400',  
            description: "Our service starts from morning 9.00 AM ends at evening 5.00 PM."
        },
        {
            id: 2,
            img : location,
            title: "Visit Our Location.",
            class : 'bg-cyan-900',
            description: "Dhaka, DN 1320, Bangladesh."
        },
        {
            id: 3,
            img : phone,
            title: "Contact Us",
            class : 'bg-sky-400',  
            description: "+0000110101010"
        }
    ]

    return (
        <div className= {`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-12 px-6 py-10`}>
            {
                data.map((info) => (
                    <div className={`rounded-xl ${info.class} p-7 flex drop-shadow-2xl`}>
                        <div className='flex  mr-6 w-1/3'>
                            <img src={info.img} alt="" />
                        </div>
                        <div className='text-white w-2/3'>
                            <h1>{info.title}</h1>
                            <p>{info.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CardInfo;