import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="cta-section" style={{ textAlign: 'center', padding: '150px 0', borderTop: '1px solid #ddd' }}>
            <h2 style={{ fontSize: '4rem', marginBottom: '20px' }}>Take <span style={{ border: '1px solid black', padding: '0 20px', borderRadius: '50px', fontStyle: 'italic' }}>control</span> of your brand</h2>
            <p style={{ marginTop: '20px', fontSize: '16px' }}>Ready to start your next project? Let's talk.</p>
            <Link to="/contact">
                <button className="btn" style={{ marginTop: '30px' }}>GET IN TOUCH</button>
            </Link>
        </section>
    );
};

export default CTA;
