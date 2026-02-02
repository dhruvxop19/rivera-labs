import React from 'react';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const TestimonialsPage = () => {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: '50px' }}>
                <Testimonials />
            </div>
            <CTA />
            <Footer />
        </div>
    );
};

export default TestimonialsPage;
