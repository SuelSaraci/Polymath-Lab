import ReusableButton from '@/components/button';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { polymathServicesItems } from './helper';
import './styles.css';

const PolymathServices = () => {
    const renderPolymathServicesCard = (
        { icon: Icon, title, description, image }: any,
        index: number,
    ) => {
        const isImageOnLeft = index % 2 !== 0; // Determines layout for image

        return (
            <Row
                className={`mb-4 gx-0 service-container ${
                    isImageOnLeft ? 'flex-md-row-reverse' : 'flex-md-row'
                }`}
                key={index}
            >
                <Col md={6} className='d-flex justify-content-center align-items-center'>
                    <Image
                        src={image}
                        alt='Service Image'
                        layout='responsive'
                        className='custom-img h-100'
                    />
                </Col>
                <Col md={6} className='d-flex flex-column justify-content-center'>
                    <Stack className='p-4' gap={3}>
                        <Icon fillColor='#0094d9' className='custom-icon' />
                        <p className='text-muted'>{title}</p>
                        <p className='service-description'>{description}</p>
                    </Stack>
                </Col>
            </Row>
        );
    };

    return (
        <Container className='bg-white shadow-lg p-4 mb-5'>
            <Row className='mb-5'>
                <Col>
                    <p className='text-left fs-2 text-muted'>Services</p>
                    <hr className='text-left custom-hr-services-style' />
                    <p className='text-muted'>
                        Holistic cloud-native product development services for digital businesses
                        <br />
                        building products on Amazon AWS
                    </p>
                    <ReusableButton text='BOOK A MEETING WITH A POLYMATH >' variant='secondary' />
                </Col>
            </Row>
            <div>{polymathServicesItems.map(renderPolymathServicesCard)}</div>
        </Container>
    );
};

export default PolymathServices;
