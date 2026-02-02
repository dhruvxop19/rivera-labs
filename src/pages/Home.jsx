import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ShippingSection from '../components/ShippingSection';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <ShippingSection />
            <Pricing />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    );
};

export default Home;
