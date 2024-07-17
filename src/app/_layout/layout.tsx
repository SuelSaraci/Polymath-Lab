'use client';
import CustomNavbar from './components/navbar';
import Footer from './components/footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <CustomNavbar /> {children} <Footer />
        </>
    );
};
export default Layout;
