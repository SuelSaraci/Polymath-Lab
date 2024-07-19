import ReusableButton from '@/components/button';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomePageBannerImage from '../../../../../public/images/homeBannerImage.jpg';
import './styles.css'; // Import the CSS file

const Banner = () => {
    return (
        <div className='banner-wrapper'>
            <Image
                src={HomePageBannerImage}
                layout='responsive'
                alt='Contact Us Banner Image'
                className='banner-image'
            />

            <Container className='banner-content-container'>
                <Row>
                    <Col xs={12} className='p-0'>
                        <div className='banner-content'>
                            <p className='p-4 fs-3 text-muted fw-light'>
                                Product Development on Amazon AWS Cloud
                            </p>
                            <ReusableButton text='CONTACT US >' variant='secondary' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
