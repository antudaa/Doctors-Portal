import React from 'react';
// import SharedBtn from '../../../Components/SharedBtn';


const AvailableAppointment = ({ appointment, setBookedAppointment }) => {

    const { name, slots } = appointment;

    return (
        <div className="card shadow-xl bg-white dark:bg-gray-800 ">
            <div className="card-body text-center">
                <h2 className=" text-cyan-500 font-bold text-2xl">{name}</h2>
                <p className='text-black dark:text-white'>{slots.length > 0 ? slots[0] : `No space available for Today.Please try another day.`}</p>
                <p className='text-black dark:text-white'>{slots.length} {slots.length > 1 ? `spaces` : `space `} for Today. </p>
                <div className="card-actions justify-center">
                    {/* Modal */}
                    <label htmlFor="booking-modal" className="btn text-white border-none bg-gradient-to-r from-sky-300 to-cyan-700"
                        onClick={() => setBookedAppointment(appointment)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;