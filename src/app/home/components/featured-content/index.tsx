import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { featuredContentCards } from './helper';
import Image from 'next/image';
import './styles.css';

import ExploreIcon from '../../../../assets/icons/searchIcon';
import BuildIcon from '../../../../assets/icons/build';
import ReleaseIcon from '../../../../assets/icons/releaseIcon';

const FeaturedContent = () => {
    const renderFeaturedContentCards = featuredContentCards.map((item, index) => {
        const { image, date, person, folder, title } = item;
        return (
            <Col xs={12} md={6} lg={4} key={index} className='mb-4'>
                <div className='featured-card card-hover'>
                    <Image
                        src={image}
                        alt='Featured Content Images'
                        layout='responsive'
                        width={400}
                        height={250}
                    />

                    <div className='card-content mt-3'>
                        <Stack
                            direction='horizontal'
                            gap={2}
                            className='date-person-folder d-flex justify-content-between'
                        >
                            <p>
                                <ReleaseIcon fillColor='#878787' /> {date}
                            </p>
                            <p>
                                <BuildIcon fillColor='#878787' /> {person}
                            </p>
                            <p>
                                <ExploreIcon fillColor='#878787' /> {folder}
                            </p>
                        </Stack>
                    </div>
                    <p className='text-muted fw-light'>{title}</p>
                </div>
            </Col>
        );
    });

    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <p className='text-left fs-2 text-muted'>Featured content</p>
                    <hr className='text-left custom-hr-featured-style' />
                </Col>
            </Row>
            <Row>{renderFeaturedContentCards}</Row>
        </Container>
    );
};

export default FeaturedContent;
