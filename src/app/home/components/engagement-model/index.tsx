import Image from 'next/image';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { engagementCardsItems } from './helper';
import ReusableButton from '@/components/button';

const EngagementModel = () => {
    const renderEngagementCards = engagementCardsItems.map((item) => {
        const { title, description, icon } = item;

        return (
            <Col>
                <Stack>
                    <Image src={''} alt={''} />
                    <p>{title}</p>
                    <p>{description}</p>
                </Stack>
            </Col>
        );
    });

    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col>
                        <p>Engagement Model</p>
                    </Col>
                </Row>

                <Row>{renderEngagementCards}</Row>
                <ReusableButton text='LEARN MORE' />
            </Container>
        </Container>
    );
};

export default EngagementModel;
