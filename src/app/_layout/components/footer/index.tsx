import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import ReusableButton from '@/components/button';

import { socialIcons } from '@/app/contact/components/banner/helper';
import './styles.css';
import FooterLogoIcon from '@/assets/icons/footerLogoIcon';
import TopArrowIcon from '@/assets/icons/topArrowIcon';

const Footer = () => {
    const renderSocialIcons = socialIcons.map((item) => {
        const { icon: Icon } = item;

        return <Icon fillColor={'#ffffff'} />;
    });

    return (
        <Container fluid className='customize-footer p-0'>
            <Container className='mb-5'>
                <Row>
                    <Col>
                        <p className='fs-2 mt-5 text-white fw-lighter'>Call to action!</p>
                        <ReusableButton text='LOREM IPSUM >' variant='info' />
                    </Col>
                </Row>
            </Container>
            <hr className='text-white custom-hr-footer-style' />
            <Container className='mb-3'>
                <Row className='d-flex align-items-center'>
                    <Col>
                        <FooterLogoIcon fillColor={'#ffffff'} />
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Stack direction='horizontal' gap={3}>
                            {renderSocialIcons}
                        </Stack>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <Stack direction='horizontal' gap={2}>
                            <p className='text-white custom-font-size'>
                                BACK
                                <br />
                                ON TOP
                            </p>
                            <div>
                                <TopArrowIcon fillColor='#ffffff' />
                            </div>
                        </Stack>
                    </Col>
                </Row>
            </Container>

            <div className='custom-copyright'>
                <Container>
                    <Row className='d-flex align-items-center'>
                        <Col className='d-flex '>
                            <p className='text-white mb-0 custom-font-size'>
                                © Copyright 2024 Polymath Labs - All Rights Reserved
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
};

export default Footer;
