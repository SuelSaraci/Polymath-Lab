import React from 'react';
import Layout from './_layout/layout';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';

const inter = Inter({ subsets: ['latin'] });

// Define metadata for the Home page
export const metadata = {
    title: 'Home | Your Website Name',
    description:
        'Welcome to our website! Explore our services, learn about our approach, and discover our previous work and partner network.',
    keywords:
        'Home, Services, Our Approach, Partner Network, Previous Work, Engagement Model, Featured Content',
    author: 'Your Name or Company Name',
    // Add more metadata fields as needed
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
