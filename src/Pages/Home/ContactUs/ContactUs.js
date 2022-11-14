import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../../assets/images/appointment.png';
import SharedBtn from '../../../Components/SharedBtn/SharedBtn';



const ContactUs = () => {
    return (
        <div className="hero my-8"
            style={{
                background: `url(${background})`
            }}
        >
            <div className='text-center my-16 flex flex-col'>
                <h4 className='text-cyan-500 font-bold'>Contact Us</h4>
                <h1 className='text-3xl lg:text-4xl text-white mb-6'>Stay Connected With Us</h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Email" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <textarea className="textarea bg-white" placeholder="Your Message."></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <SharedBtn>Contact</SharedBtn>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;