import React from 'react';
import Banner from './components/banner';
import PolymathServices from './components/polymath-services';

// Define metadata for the Services page
export const metadata = {
    title: 'Services | Your Website Name',
    description:
        'Explore the services we offer. Learn about our expertise and how we can help you achieve your goals with our professional solutions.',
    keywords: 'Services, Professional Solutions, Expertise, Our Services',
    author: 'Your Name or Company Name',
    // Additional metadata fields can be added as needed
};

const Services = () => {
    return (
        <>
            <Banner />
            <PolymathServices />
        </>
    );
};

export default Services;
