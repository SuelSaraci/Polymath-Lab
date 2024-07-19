import React from 'react';
import Banner from './components/banner';
import ApplyForm from './components/apply-form';

// Define metadata for the ContactUs page
export const metadata = {
    title: 'Contact Us | Your Website Name',
    description:
        'Get in touch with us for any inquiries or support. Fill out our contact form and we will get back to you as soon as possible.',
    keywords: 'Contact Us, Support, Inquiry, Contact Form',
    author: 'Your Name or Company Name',
    // Additional metadata fields can be added here
};

const ContactUs = () => {
    return (
        <div>
            <Banner />
            <ApplyForm />
        </div>
    );
};

export default ContactUs;
