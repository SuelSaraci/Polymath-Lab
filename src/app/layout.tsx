import React from 'react';
import type { Metadata } from 'next';
import Layout from './_layout/layout';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Polymath Lab',
    description: 'Polymath Lab Assignment',
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
