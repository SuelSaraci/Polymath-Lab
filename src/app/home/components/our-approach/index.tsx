'use client';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ourApproachItems } from './helper';
import './styles.css';

const OurApproach = () => {
    const [active, setActive] = useState<string>('EXPLORE');

    const handleClick = (label: string) => {
        setActive(label);
    };

    const renderOurApproach = ourApproachItems.map((item, index) => {
        const { icon: Icon, label } = item;
        const isActive = active === label;

        return (
            <Col
                key={label}
                md={2}
                className='approach-item-container'
                onClick={() => handleClick(label)}
            >
                <div
                    className={`text-center approach-item ${
                        isActive ? 'approach-item-active' : 'approach-item-inactive'
                    }`}
                >
                    <Icon fillColor={isActive ? '#1f62ae' : '#ffffff'} />
                </div>
                <p className={`text-center ${isActive ? 'fw-semibold' : 'text-muted'}`}>{label}</p>
            </Col>
        );
    });

    return (
        <Container className='p-5 custom-container'>
            <Row>
                <Col>
                    <p className='text-center fs-2 text-muted'>Our Approach</p>
                    <hr className='text-center custom-hr-style mx-auto' />
                </Col>
            </Row>
            <Row className='d-flex justify-content-center mb-5'> {renderOurApproach}</Row>
            <Row>
                <Col>
                    <p className='text-center text-muted fw-light'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                        wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                        lobortis nisl ut aliquip ex ea commodo con- sequat. Duis autem vel eum
                        iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                        illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                        odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
                        te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                        con- sequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                        diam nonummy nibh euismod tincidunt ut
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default OurApproach;
