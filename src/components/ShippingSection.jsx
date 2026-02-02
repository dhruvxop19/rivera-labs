import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, PackageCheck } from 'lucide-react';
import fastShippingImg from '../assets/fast-shipping.png';

const ShippingSection = () => {
    return (
        <section className="container shipping-section">
            <div className="shipping-image-container">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="shipping-img-wrapper"
                >
                    <img src={fastShippingImg} alt="Fast Shipping" className="shipping-img" />
                    {/* Decorative elements */}
                    <div className="tape" style={{ top: '-15px', right: '-15px', transform: 'rotate(15deg)' }}>Excellence</div>
                    <div className="scribble" style={{ bottom: '-20px', left: '-20px' }}>
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="var(--accent-blue)" strokeWidth="2">
                            <path d="M10,90 Q50,10 90,90" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            <div className="shipping-content">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '30px' }}
                >
                    Lightning fast <span style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>deliveries.</span>
                </motion.h2>

                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '40px' }}>
                    We understand time is money. That's why we have optimized our workflow to deliver high-quality results in record time. No more waiting months for your product.
                </p>

                <ul className="features-list">
                    <motion.li
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Zap size={20} />
                        <span><strong>Ship within 7 days:</strong> From concept to deployment faster than ever.</span>
                    </motion.li>
                    <motion.li
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Clock size={20} />
                        <span><strong>Round the clock updates:</strong> Stay in the loop with real-time progress.</span>
                    </motion.li>
                    <motion.li
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <PackageCheck size={20} />
                        <span><strong>Quality Guaranteed:</strong> Speed doesn't mean cutting corners.</span>
                    </motion.li>
                </ul>

                <motion.button
                    className="btn"
                    style={{ marginTop: '40px' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started Now
                </motion.button>
            </div>
        </section>
    );
};

export default ShippingSection;
