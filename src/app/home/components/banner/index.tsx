import ReusableButton from '@/components/button';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Image src={''} alt={''} />
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <p>Product Development on Amazon AWS Cloud</p>
                            <ReusableButton text='CONTACT US' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Banner;
