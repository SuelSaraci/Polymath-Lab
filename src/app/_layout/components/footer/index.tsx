import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import ReusableButton from '@/components/button';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <Stack gap={2}>
                            <p>Call to action!</p>
                            <ReusableButton text='LOREM IPSUM!' />
                        </Stack>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image
                            src='/path/to/image.jpg'
                            alt='Footer Image 1'
                            width={100}
                            height={100}
                        />
                    </Col>
                    <Col>
                        <Stack direction='horizontal' gap={2}>
                            <Image
                                src='/path/to/image2.jpg'
                                alt='Footer Image 2'
                                width={50}
                                height={50}
                            />
                            <Image
                                src='/path/to/image3.jpg'
                                alt='Footer Image 3'
                                width={50}
                                height={50}
                            />
                            <Image
                                src='/path/to/image4.jpg'
                                alt='Footer Image 4'
                                width={50}
                                height={50}
                            />
                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap={2}>
                            <p>
                                BACK
                                <br />
                                ON TOP
                            </p>
                            <Image
                                src='/path/to/image5.jpg'
                                alt='Footer Image 5'
                                width={50}
                                height={50}
                            />
                        </Stack>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>© Copyright 2024 Polymath Labs - All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
