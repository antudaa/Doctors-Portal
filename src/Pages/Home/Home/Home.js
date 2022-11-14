import React from 'react';
import Banner from '../Banner/Banner';
import CardInfo from '../CardInfo/CardInfo';
import ContactUs from '../ContactUs/ContactUs';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import More from '../More/More';
import PatientReview from '../PaitentReview/PatientReview';
import Service from '../Services/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardInfo></CardInfo>
            <Service></Service>
            <More></More>
            <HomeAppointment></HomeAppointment>
            <PatientReview></PatientReview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;