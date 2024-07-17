import React from 'react';
import type { Metadata } from 'next';
import Layout from './_layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
    title: 'Polymath Lab',
    description: 'Polymath Lab Assignment',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className='layout_container'>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
