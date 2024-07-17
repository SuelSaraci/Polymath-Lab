import ReusableButton from '@/components/button';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';

const PartnerNetwork = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Stack gap={2}>
                        <p>
                            Polymath Labs is a certified Standard Partner for Amazon Web Services.
                            Our certification means we’re up to date on all best practices and early
                            previewing new advancements to the AWS platform to benefits our clients’
                            businesses.
                        </p>
                        <ReusableButton text='PARTNERSHIP PAGE' />
                    </Stack>
                </Col>
                <Col>
                    <Image src={''} alt={''} />
                </Col>
            </Row>
        </Container>
    );
};

export default PartnerNetwork;
