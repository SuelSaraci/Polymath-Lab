import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { servicesCardItems } from './helper';
import ReusableButton from '@/components/button';
import './styles.css';

const Services = () => {
    const renderCardItems = servicesCardItems.map((item, index) => {
        const { title, description, icon: Icon } = item;

        return (
            <Col xs={12} md={6} lg={4} key={index} className='d-flex'>
                <div className='custom-col-services'>
                    <div>
                        <Icon fillColor='#0094D9' />
                    </div>
                    <div>
                        <Stack gap={2} className='d-flex flex-column justify-content-between h-100'>
                            <p className='custom-title'>{title}</p>
                            <p className='custom-description'>{description}</p>
                        </Stack>
                    </div>
                </div>
            </Col>
        );
    });

    return (
        <Container className='mt-5'>
            <Row className='mb-4'>
                <Col>
                    <p className='text-center fs-2 text-muted'>Services</p>
                    <hr className='text-center custom-hr-style-services mx-auto' />
                </Col>
            </Row>

            <Row className='g-4'>{renderCardItems}</Row>

            <ReusableButton text='LEARN MORE >' variant='secondary' className='mt-4' />
        </Container>
    );
};

export default Services;
