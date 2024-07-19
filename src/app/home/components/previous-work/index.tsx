import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { previousWorkItems } from './helper';
import './styles.css';

const PreviousWork = () => {
    const renderPreviousWorkImages = previousWorkItems.map((item, index) => {
        const { icon: Icon } = item;
        return (
            <Col className='d-flex justify-content-center' key={index}>
                <Icon fillProp='#ababab' key='Previous Work Images' />
            </Col>
        );
    });
    return (
        <Container className='mt-5 custom-previous-container p-5'>
            <Row>
                <Col>
                    <p className='text-center fs-2 text-muted'>Previous Work</p>
                    <hr className='text-center custom-hr-style mx-auto' />
                </Col>
            </Row>

            <Row>{renderPreviousWorkImages}</Row>
        </Container>
    );
};

export default PreviousWork;
