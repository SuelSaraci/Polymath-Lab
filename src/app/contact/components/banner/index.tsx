'use client';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import ContactUsBannerImage from '../../../../../public/images/contactUsBannerImage.jpg';
import Image from 'next/image';
import { socialIcons } from './helper';
import './styles.css';

const Banner = () => {
    const renderSocialIcons = socialIcons.map((item) => {
        const { icon: Icon, alt } = item;
        return <Icon key={alt} fillColor={'#1f62ae'} />;
    });

    return (
        <Container fluid className='p-0 position-relative banner-container'>
            <div className='image-wrapper'>
                <Image
                    src={ContactUsBannerImage}
                    alt='Contact Us Banner Image'
                    className='banner-image'
                />
            </div>
            <Container className='position-absolute bottom-0 start-50 translate-middle-x bg-white p-4 mb-5 banner-content'>
                <Row>
                    <Col>
                        <p className='text-center fs-2 text-muted'>Get in touch</p>
                        <hr className='text-center custom-hr-style mx-auto' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Stack gap={2}>
                            <p className='text-muted'>
                                Want to chat with us to learn more,
                                <br /> brainstorm, or engage us?
                            </p>
                            <p className='text-muted'>
                                Drop us a line and we will get back to
                                <br /> you within one business day.
                            </p>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap={2}>
                            <p className='text-muted'>
                                Use the form below, or just send us
                                <br /> an email or give us a call:
                            </p>
                            <p className='text-muted'>
                                E: info@polymathlabs.co
                                <br /> P: +1.347.354.2872
                            </p>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap={2}>
                            <p>Follow us on Social Media:</p>
                            <Stack direction='horizontal' gap={3}>
                                {renderSocialIcons}
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Banner;
