import React from 'react';
import { motion } from 'framer-motion';
import Collage from './Collage';

const Hero = () => {
    return (
        <section className="container hero">
            <div className="hero-text">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    A seasoned team for high <span style={{ fontStyle: 'italic', color: 'var(--accent-blue)' }}>impact digital products</span>
                </motion.h1>

                <motion.div
                    className="sub-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
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
