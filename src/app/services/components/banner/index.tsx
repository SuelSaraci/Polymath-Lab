import Image from 'next/image';
import React from 'react';
import { Container } from 'react-bootstrap';
import ServiceBannerImage from '../../../../../public/images/serviceBannerImage.jpg';
import './styles.css';

const Banner = () => {
    return (
        <Container fluid className='p-0 position-relative banner-container'>
            <div className='image-wrapper'>
                <Image
                    src={ServiceBannerImage}
                    alt='Contact Us Banner Image'
                    className='banner-image'
                />
            </div>
        </Container>
    );
};

export default Banner;
