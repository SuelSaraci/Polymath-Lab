import React from 'react';
import Banner from './components/banner';
import OurApproach from './components/our-approach';
import Services from './components/services';
import PartnerNetwork from './components/partner-network';
import PreviousWork from './components/previous-work';
import EngagementModel from './components/engagement-model';
import FeaturedContent from './components/featured-content';

const Home = () => {
    return (
        <>
            <Banner />
            <OurApproach />
            <Services />
            <PartnerNetwork />
            <PreviousWork />
            <EngagementModel />
            <FeaturedContent />
        </>
    );
};

export default Home;
