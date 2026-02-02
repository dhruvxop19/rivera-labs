import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="cta-section" style={{ textAlign: 'center', padding: '150px 0', borderTop: '1px solid #ddd' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h2 style={{ fontSize: '4rem', marginBottom: '20px' }}>Take <span style={{ border: '1px solid black', padding: '0 20px', borderRadius: '50px', fontStyle: 'italic' }}>control</span> of your brand</h2>
                <p style={{ marginTop: '20px', fontSize: '16px' }}>Ready to start your next project? Let's talk.</p>
                <Link to="/contact">
                    <motion.button
                        className="btn"
                        style={{ marginTop: '30px' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        GET IN TOUCH
                    </motion.button>
                </Link>
            </motion.div>
        </section>
    );
};

export default CTA;
