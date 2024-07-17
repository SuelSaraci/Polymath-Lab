import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ourApproachItems } from './helper';

const OurApproach = () => {
    const renderOurApproach = ourApproachItems.map((item) => (
        <Col key={item.label} md={2} className='text-center'>
            <img src={item.icon} alt={item.label} />
            <p>{item.label}</p>
        </Col>
    ));

    return (
        <Container>
            <Row>
                <Col>
                    <p>Our Approach</p>
                </Col>
            </Row>
            <Row>{renderOurApproach}</Row>
            <Row>
                <Col>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                        wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                        lobortis nisl ut aliquip ex ea commodo con- sequat. Duis autem vel eum
                        iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                        illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                        odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
                        te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer
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
