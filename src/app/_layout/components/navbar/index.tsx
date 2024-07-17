import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'next/image';
import PolyMathLogo from '../../../../../public/images/polyMathLogo.png';
import ReusableButton from '@/components/button';
import { useRouter } from 'next/navigation';

const CustomNavbar: React.FC = () => {
    const router = useRouter();

    const handleContactClick = () => {
        router.push('/contact');
    };

    return (
        <Navbar bg='light' expand='lg'>
            <Container className='d-flex justify-content-between'>
                <Navbar.Brand href='/'>
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
                        <Nav.Link href='/' className='mr-3'>
                            HOME
                        </Nav.Link>
                        <Nav.Link href='services' className='mr-3'>
                            SERVICES
                        </Nav.Link>
                        <Nav.Link href='blog' className='mr-3'>
                            BLOG
                        </Nav.Link>
                        <Nav.Link href='about' className='mr-3'>
                            ABOUT US
                        </Nav.Link>
                        <ReusableButton
                            onClick={handleContactClick}
                            text='CONTACT US'
                            variant='primary'
                        ></ReusableButton>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
