import React from 'react';
import SharedBtn from '../../../Components/SharedBtn/SharedBtn';
import { format } from 'date-fns';



const BookingModal = ({ bookedAppointment, setBookedAppointment, selectedDate }) => {

    const { name, slots } = bookedAppointment;

    const handleBookAppointment = (event) => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const time = form.time.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const info = {
            date: date,
            time: time,
            name: name,
            email: email,
            phone: phone
        }
        console.log(info);
        setBookedAppointment(null);
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-white text-center">{name}</h3>

                    <div className='mt-10'>
                        <form onSubmit={handleBookAppointment} className="card-body">
                            <div className="form-control">
                                <input name='date' type="text" value={format(selectedDate, 'PP')} className="input bg-white input-bordered text-black text-center" />
                            </div>
                            <select name='time' className="select select-info text-black text-center w-full bg-white">
                                {
                                    slots &&
                                    slots.map((slot, index) => <option
                                        key={index}
                                        value={slot}
                                    >{slot}</option>)
                                }

                            </select>
                            <div className="form-control">
                                <input name='name' type="text" placeholder="Full Name" className="input bg-white input-bordered text-center text-black" />
                            </div>
                            <div className="form-control">
                                <input name='email' type="text" placeholder="Email" className="input bg-white input-bordered text-center text-black" />
                            </div>
                            <div className="form-control">
                                <input name='phone' type="number" placeholder="Phone" className="input bg-white input-bordered text-center text-black" />
                            </div>
                            <div className='my-4'>
                                <button type='submit' className='btn btn-accent w-full'>Book</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;