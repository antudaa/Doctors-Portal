import React from 'react';
import chair from '../../../assets/images/chair.png';
import background from '../../../assets/images/bg.png';
import { format } from 'date-fns';
import { Day, DayPicker } from 'react-day-picker';



const AppointmentBanner = ({selectedDate, setSelectedDate}) => {


    return (
        <div className="hero min-h-screen banner"
            style={{
                background: `url(${background})`
            }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-2/2 lg:w-1/3'>
                    <img src={chair} className="rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='text-black dark:text-white w-2/2 lg:w-1/3'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    // footer={footer}
                    ></DayPicker>
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;