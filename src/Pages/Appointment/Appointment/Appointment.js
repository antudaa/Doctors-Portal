import React, { useState } from 'react';
import AppointmentCategory from '../AppointmentCategory/AppointmentCategory';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';


const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AppointmentCategory
            selectedDate={selectedDate}
            ></AppointmentCategory>
        </div>
    );
};

export default Appointment;