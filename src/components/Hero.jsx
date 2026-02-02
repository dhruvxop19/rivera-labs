import React from 'react';
import { motion } from 'framer-motion';
import Collage from './Collage';

const Hero = () => {
    return (
        <section className="container hero" style={{
            padding: '80px 20px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            minHeight: '80vh',
            alignItems: 'center'
        }}>
            <div className="hero-text">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '40px' }}
                >
                    A seasoned team for high <span style={{ fontStyle: 'italic', color: 'var(--accent-blue)' }}>impact digital products</span>
                </motion.h1>

                <motion.div
                    className="sub-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{ maxWidth: '300px', fontSize: '14px', marginTop: '40px' }}
                >
                    At Rivera Labs, we use an integrated approach to design, code, and scale MVPs, apps, and brands for the modern web.
                </motion.div>

                <motion.button
                    className="btn"
                    style={{ marginTop: '40px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Start a Project
                </motion.button>
            </div>

            <Collage />
        </section>
    );
};

export default Hero;
