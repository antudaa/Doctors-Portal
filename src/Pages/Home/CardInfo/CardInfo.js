import React from 'react';
import location from '../../../assets/icons/marker.svg';
import clock from '../../../assets/icons/clock.svg';
import phone from '../../../assets/icons/phone.svg';
import HomeCard from './HomeCard';


const CardInfo = () => {


    const data = [
        {
            id: 1,
            img: clock,
            title: "Opening Hours",
            cls: 'bg-sky-400',
            description: "Our service starts from morning 9.00 AM ends at evening 5.00 PM."
        },
        {
            id: 2,
            img: location,
            title: "Visit Our Location.",
            cls: 'bg-cyan-900',
            description: "Dhaka, DN 1320, Bangladesh."
        },
        {
            id: 3,
            img: phone,
            title: "Contact Us",
            cls: 'bg-sky-400',
            description: "+0000110101010"
        }
    ]

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-12 px-6 py-20`}>
            {
                data.map((info) => <HomeCard
                    key={info.id}
                    info={info}
                ></HomeCard>)
            }
        </div>
    );
};

export default CardInfo;