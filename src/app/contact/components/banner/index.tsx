// Banner.js
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Image from 'next/image';

const Banner = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Image src='/path/to/image.jpg' alt='Footer Image 1' width={100} height={100} />
                </Col>
            </Row>
            <Container>
                <Row>
                    <p>Get in touch</p>
                </Row>
                <Row>
                    <Col>
                        <Stack gap={2}>
                            <p>
                                Want to chat with us to learn more,<br></br> brainstorm, or engage
                                us?
                            </p>
                            <p>
                                Drop us a line and we will get back to<br></br> you within one
                                business day.
                            </p>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap={2}>
                            <p>
                                Use the form below, or just send us<br></br> an email or give us a
                                call:
                            </p>
                            <p>
                                E: info@polymathlabs.co<br></br> P: +1.347.354.2872
                            </p>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap={2}>
                            <p>Follow us on Social Media:</p>
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
                                <Image
                                    src='/path/to/image4.jpg'
                                    alt='Footer Image 4'
                                    width={50}
                                    height={50}
                                />
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Banner;
