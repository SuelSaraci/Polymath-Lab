import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { servicesCardItems } from './helper';
import ReusableButton from '@/components/button';

const Services = () => {
    const renderCardItems = servicesCardItems.map((item) => {
        const { title, description, icon } = item;

        return (
            <Col>
                <Stack gap={2}>
                    <div>{}</div>
                    <div>
                        <Stack gap={2}>
                            <p>{title}</p>
                            <p>{description}</p>
                        </Stack>
                    </div>
                </Stack>
            </Col>
        );
    });
    return (
        <Container>
            <Row>
                <Col>
                    <p>Services</p>
                </Col>
            </Row>

            <Row>{renderCardItems}</Row>

            <ReusableButton text='LEARN MORE' />
        </Container>
    );
};

export default Services;
