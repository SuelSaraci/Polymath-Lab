import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'next/image';
import PolyMathLogo from '../../../../../public/images/polyMathLogo.png';
import ReusableButton from '@/components/button';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import './styles.css';
import { navItems } from './helper';

const CustomNavbar: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleHomeClick = () => {
        // Use window.location.reload to force a page refresh
        window.location.href = '/';
    };

    const handleContactClick = () => {
        router.push('/contact');
    };

    return (
        <Navbar bg='light' expand='lg'>
            <Container className='d-flex justify-content-between'>
                <Navbar.Brand onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
                    <Image
                        src={PolyMathLogo}
                        height={50}
                        className='d-inline-block align-top'
                        alt='Polymath Labs logo'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                    <Nav>
                        {navItems.map(({ href, label, isDisabled }) => (
                            <Nav.Item key={href}>
                                {isDisabled ? (
                                    <span
                                        className={`nav-link nav-link-font-size ${
                                            pathname === href ? 'active' : ''
                                        }`}
                                    >
                                        {label}
                                    </span>
                                ) : (
                                    <Link
                                        href={href}
                                        className={`nav-link nav-link-font-size ${
                                            pathname === href ? 'active' : ''
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                )}
                            </Nav.Item>
                        ))}
                        <Nav.Item>
                            <ReusableButton
                                onClick={handleContactClick}
                                text='CONTACT US'
                                variant='primary'
                            />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
