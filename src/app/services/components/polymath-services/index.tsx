import ReusableButton from '@/components/button';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { polymathServicesItems } from './helper';

const PolymathServices = () => {
    const renderPolymathServicesCards = polymathServicesItems.map((item) => {
        const { icon, title, description, image } = item;
        return (
            <Row>
                <Col>
                    <Stack gap={3}>
                        <Image src={''} alt={''} />
                        <p>{title}</p>
                        <p>{description}</p>
                    </Stack>
                </Col>
                <Col>
                    <Image src={''} alt={''} />
                </Col>
            </Row>
        );
    });

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Stack gap={3}>
                        <p>Services</p>
                        <p>
                            Holistic cloud-native product development services for digital
                            businesses building products on Amazon AWS
                        </p>
                        <ReusableButton text='BOOK A MEETING WITH A POLYMATH' />
                    </Stack>
                </Col>
            </Row>
            {renderPolymathServicesCards}
        </Container>
    );
};

export default PolymathServices;
