import ReusableButton from '@/components/button';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import AmazonPartnershipImage from '../../../../../public/images/consultingPartnerAWS.png';

const PartnerNetwork = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col xs={12} md={6} className='d-flex align-items-center'>
                    <Stack gap={2}>
                        <p>
                            Polymath Labs is a certified Standard Partner for Amazon Web Services.
                            Our certification means we’re up to date on all best practices and early
                            previewing new advancements to the AWS platform to benefit our clients’
                            businesses.
                        </p>
                        <ReusableButton text='PARTNERSHIP PAGE >' variant='secondary' />
                    </Stack>
                </Col>
                <Col xs={12} md={6} className='d-flex justify-content-center'>
                    <Image src={AmazonPartnershipImage} alt={'Amazon Partnership'} />
                </Col>
            </Row>
        </Container>
    );
};

export default PartnerNetwork;
