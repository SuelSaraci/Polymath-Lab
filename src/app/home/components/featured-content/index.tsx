import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { featuredContentCards } from './helper';
import Image from 'next/image';

const FeaturedContent = () => {
    const renderFeaturedContentCards = featuredContentCards.map((item) => {
        const { image, date, person, folder, title } = item;
        return (
            <Col>
                <Stack gap={2}>
                    <Image src={''} alt={''} />

                    <Stack direction='horizontal' gap={3}>
                        <p> {date}</p>
                        <p>{person}</p>
                        <p>{folder}</p>
                    </Stack>

                    <p>{title}</p>
                </Stack>
            </Col>
        );
    });
    return (
        <Container>
            <Row>
                <Col>
                    <p>Featured content</p>
                </Col>
            </Row>
            <Row>{renderFeaturedContentCards}</Row>
        </Container>
    );
};

export default FeaturedContent;
