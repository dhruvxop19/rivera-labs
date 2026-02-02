import React from 'react';
import { Layers, Rocket, PenTool } from 'lucide-react';
import tornPaper from '../assets/torn-paper.png';

const Services = () => {
    return (
        <section className="container services-section" style={{ padding: '100px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div className="torn-paper-blue" style={{
                background: 'var(--accent-blue)',
                minHeight: '600px',
                clipPath: 'polygon(0% 0%, 100% 5%, 95% 45%, 100% 100%, 10% 95%, 0% 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '40px',
                position: 'relative'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${tornPaper})`, opacity: 0.2, mixBlendMode: 'multiply', backgroundSize: 'cover' }}></div>
                <div style={{ color: 'white', fontSize: '12px', maxWidth: '200px', zIndex: 2 }}>
                    MARKETING / SEO / ADS / SOCIAL / CONTENT
                    <br /><br />
                    We build things that last.
                </div>
            </div>

            <div className="service-list">
                <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>Digital growth <em style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-serif)' }}>without compromise</em></h2>

                <div className="service-item" style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Layers size={24} /> Product & Engineering
                    </h3>
                    <p style={{ fontSize: '14px', color: '#555' }}>
                        From MVP development to full-scale web applications, we build robust, scalable solutions using the latest tech stacks like React, Next.js, and Node.
                    </p>
                </div>

                <div className="service-item" style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Rocket size={24} /> Digital Marketing
                    </h3>
                    <p style={{ fontSize: '14px', color: '#555' }}>
                        Data-driven SEO, high-conversion ad campaigns, and social media handling that puts your brand in front of the right eyes.
                    </p>
                </div>

                <div className="service-item">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <PenTool size={24} /> Content & Creative
                    </h3>
                    <p style={{ fontSize: '14px', color: '#555' }}>
                        Professional photography, persuasive content writing, and lead generation strategies tailored to your business goals.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
