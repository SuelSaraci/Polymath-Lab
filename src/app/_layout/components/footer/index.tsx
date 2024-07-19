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

        return <Icon fillColor={'#ffffff'} key={'Social Icons'} />;
    });

    return (
        <footer className='footer-wrapper'>
            <Container fluid className='customize-footer p-0'>
                <Container className='mb-5'>
                    <Row className='text-center text-md-start'>
                        <Col xs={12} md={6}>
                            <p className='fs-2 mt-5 text-white fw-lighter'>Call to action!</p>
                            <ReusableButton text='LOREM IPSUM >' variant='info' />
                        </Col>
                    </Row>
                </Container>
                <hr className='text-white custom-hr-footer-style' />
                <Container className='mb-3'>
                    <Row className='align-items-center text-center text-md-start'>
                        <Col xs={12} md={4} className='mb-3 mb-md-0 d-none d-md-block'>
                            <FooterLogoIcon fillColor={'#ffffff'} />
                        </Col>
                        <Col xs={6} md={4} className='d-flex justify-content-center mb-3 mb-md-0'>
                            <Stack
                                direction='horizontal'
                                gap={3}
                                className='justify-content-center'
                            >
                                {renderSocialIcons}
                            </Stack>
                        </Col>
                        <Col
                            xs={6}
                            md={4}
                            className='d-flex justify-content-center justify-content-md-end'
                        >
                            <Stack direction='horizontal' gap={2} className='align-items-center'>
                                <p className='text-white custom-font-size mb-0 text-center text-md-end'>
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
                        <Row className='d-flex justify-content-center'>
                            <Col xs={12} className='d-flex justify-content-center'>
                                <p className='text-white mb-0 custom-font-size text-center'>
                                    © Copyright 2024 Polymath Labs - All Rights Reserved
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
