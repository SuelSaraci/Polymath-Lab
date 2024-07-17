import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { previousWorkItems } from './helper';
import Image from 'next/image';

const PreviousWork = () => {
    const renderPreviousWorkImages = previousWorkItems.map((item) => {
        return (
            <Col>
                <Image src={''} alt={''} />
            </Col>
        );
    });
    return (
        <Container>
            <Row>
                <Col>
                    <p>Previous work</p>
                </Col>
            </Row>

            <Row>{renderPreviousWorkImages}</Row>
        </Container>
    );
};

export default PreviousWork;
