import React from 'react';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const PricingPage = () => {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: '50px' }}>
                <Pricing />
            </div>
            <CTA />
            <Footer />
        </div>
    );
};

export default PricingPage;
