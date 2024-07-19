import ReusableButton from '@/components/button';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import AmazonPartnershipImage from '../../../../../public/images/consultingPartnerAWS.png';
import './styles.css';

const PartnerNetwork = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col xs={12} md={6} className='d-flex align-items-center'>
                    <Stack gap={2} className='d-flex flex-col space-between'>
                        <p className='mb-3'>
                            Polymath Labs is a certified Standard Partner for Amazon Web Services.
                            Our certification means we’re up to date on all best practices and early
                            previewing new advancements to the AWS platform to benefit our clients’
                            businesses.
                        </p>
                        <ReusableButton
                            text='PARTNERSHIP PAGE >'
                            variant='secondary'
                            className='button'
                        />
                    </Stack>
                </Col>
                <Col
                    xs={12}
                    md={6}
                    className='d-flex justify-content-center justify-content-md-end mt-3 mt-md-0'
                >
                    <div className='imageWrapper'>
                        <Image
                            src={AmazonPartnershipImage}
                            alt={'Amazon Partnership'}
                            layout='responsive'
                            width={400}
                            height={200}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PartnerNetwork;
