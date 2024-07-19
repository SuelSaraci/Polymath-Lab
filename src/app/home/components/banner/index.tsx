import ReusableButton from '@/components/button';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomePageBannerImage from '../../../../../public/images/homeBannerImage.jpg';
import './styles.css';

const Banner = () => {
    return (
        <div className='banner-wrapper-home'>
            <Image
                src={HomePageBannerImage}
                layout='responsive'
                alt='Contact Us Banner Image'
                className='banner-image-home'
            />

            <Container className='banner-content-container-home'>
                <Row>
                    <Col xs={12} className='p-0'>
                        <div className='banner-content-home'>
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
