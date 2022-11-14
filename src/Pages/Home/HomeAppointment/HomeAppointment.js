import React from 'react';
import appointmentBanner from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
import SharedBtn from '../../../Components/SharedBtn/SharedBtn';


const HomeAppointment = () => {
    return (
        <div className="hero banner my-20"
        style={{
            background : `url(${appointmentBanner})`
        }}
        >
            <div className="hero-content flex-col lg:flex-row w-4/5 gap-6">
                <div className='w-2/2 lg:w-1/2 -mt-32 hidden lg:block'>
                    <img src={doctor} className="rounded-lg " alt='' />
                </div>
                <div className='w-2/2 lg:w-1/2 text-white '>
                    <h4 className='text-xl font-bold text-cyan-500'>Appointment</h4>
                    <h1 className="text-4xl font-semi-bold drop-shadow-xl">Make an appointment Today.</h1>
                    <p className="py-6">Dental care or dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. Dentistry, the professional care of teeth, including professional oral hygiene and dental surgery.</p>
                    <SharedBtn>Take Appointment</SharedBtn>
                </div>
            </div>

        </div>
    );
};

export default HomeAppointment;