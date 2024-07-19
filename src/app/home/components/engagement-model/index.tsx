import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { engagementCardsItems } from './helper';
import ReusableButton from '@/components/button';
import './styles.css';

const EngagementModel = () => {
    const renderEngagementCards = engagementCardsItems.map((item) => {
        const { title, description, icon: Icon } = item;

        return (
            <Col xs={12} md={6} lg={4} key={title} className='mb-4'>
                <Stack className='bg-white p-4 text-center engagement-card'>
                    <div className='icon-container'>
                        <Icon fillProp='#0094d8' />
                    </div>
                    <p className='mt-3'>{title}</p>
                    <p>{description}</p>
                </Stack>
            </Col>
        );
    });

    return (
        <Container className='custom-engagement-model'>
            <Container>
                <Row className='p-4'>
                    <Col>
                        <p className='text-center fs-2 text-white'>Engagement Model</p>
                        <hr className='text-center custom-hr-style mx-auto' />
                    </Col>
                </Row>

                <Row>{renderEngagementCards}</Row>
                <Row className='mt-4 mb-4'>
                    <Col className='d-flex justify-content-center'>
                        <ReusableButton text='LEARN MORE >' variant='secondary' />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default EngagementModel;
