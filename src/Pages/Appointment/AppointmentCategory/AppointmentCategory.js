import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AvailableAppointment from './AvailableAppointment';
import BookingModal from '../BookingModal/BookingModal';



const AppointmentCategory = ({ selectedDate }) => {

    const [availableAppointment, setAvailableAppointment] = useState([]);

    const [bookedAppointment, setBookedAppointment] = useState(null);

    useEffect(() => {
        fetch('AppointmentOption.json')
            .then(res => res.json())
            .then(data => setAvailableAppointment(data));
    }, [])

    return (

        <div className='my-16'>
            <h1 className='text-cyan-500 font-bold text-sm lg:text-xl text-center mb-16' >You have selected {format(selectedDate, 'PP')}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 mx-auto'>
                {
                    availableAppointment.map((appointment) => <AvailableAppointment
                        key={appointment._id}
                        appointment={appointment}
                        setBookedAppointment={setBookedAppointment}
                    ></AvailableAppointment>)
                }
            </div>
            {
                bookedAppointment &&
                <BookingModal
                setBookedAppointment={setBookedAppointment}
                selectedDate={selectedDate}
                bookedAppointment={bookedAppointment}
            ></BookingModal>
            }
        </div>
    );
};

export default AppointmentCategory;