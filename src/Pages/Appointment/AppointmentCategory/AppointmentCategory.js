import React from 'react';
import { format } from 'date-fns';



const AppointmentCategory = ( {selectedDate} ) => {

    return (

        <div className='my-16'>
            <h1 className='text-cyan-500 font-bold text-sm lg:text-xl text-center'>You have selected {format (selectedDate, 'PP')}</h1>
        </div>
    );
};

export default AppointmentCategory;