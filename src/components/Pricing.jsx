import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <section className="container section-padding" id="pricing">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
                style={{ textAlign: 'center', marginBottom: '60px' }}
            >
                <h2 style={{ fontSize: '3.5rem' }}>Engagement <span style={{ fontStyle: 'italic', borderBottom: '2px solid var(--accent-blue)' }}>Models</span></h2>
                <p style={{ marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>Flexible packages tailored to your specific goals. Choose a path and let's craft a custom plan.</p>
            </motion.div>

            <div className="pricing-grid">
                {/* Website Development Package */}
                <motion.div
                    className="pricing-card"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h3>The Foundation</h3>
                    <div className="price" style={{ fontSize: '2rem' }}>Web Development</div>
                    <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>A high-performance website tailored to your brand.</p>
                    <Link to="/contact">
                        <button className="btn-outline" style={{ width: '100%', padding: '10px', marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            Request Web Quote <ArrowRight size={16} />
                        </button>
                    </Link>
                    <ul className="features-list">
                        <li><Check /> Custom UI/UX Design</li>
                        <li><Check /> Responsive & Mobile-First</li>
                        <li><Check /> CMS Integration</li>
                        <li><Check /> Basic SEO & Speed Optimization</li>
                        <li><Check /> 1 Month Post-Launch Support</li>
                    </ul>
                </motion.div>

                {/* Combined Package (Growth) */}
                <motion.div
                    className="pricing-card"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                    style={{ background: '#f0f4ff', borderColor: 'var(--accent-blue)' }}
                >
                    <div className="tape" style={{ top: '-15px', right: '50%', transform: 'translateX(50%) rotate(-2deg)' }}>BEST VALUE</div>
                    <h3>Total Growth</h3>
                    <div className="price" style={{ fontSize: '2rem' }}>Web + Marketing</div>
                    <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>The complete ecosystem: Build it, then scale it.</p>
                    <Link to="/contact">
                        <button className="btn" style={{ width: '100%', padding: '10px', marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            Get Combined Quote <ArrowRight size={16} />
                        </button>
                    </Link>
                    <ul className="features-list">
                        <li><Check /> <strong>Everything in Web Dev</strong></li>
                        <li><Check /> <strong>Everything in Marketing</strong></li>
                        <li><Check /> Integrated Analytics Dashboard</li>
                        <li><Check /> Unified Brand Strategy</li>
                        <li><Check /> Priority Support</li>
                    </ul>
                </motion.div>

                {/* Digital Marketing Package */}
                <motion.div
                    className="pricing-card"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h3>The Amplifier</h3>
                    <div className="price" style={{ fontSize: '2rem' }}>Digital Marketing</div>
                    <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>Drive traffic, leads, and revenue to your existing site.</p>
                    <Link to="/contact">
                        <button className="btn-outline" style={{ width: '100%', padding: '10px', marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            Request Marketing Quote <ArrowRight size={16} />
                        </button>
                    </Link>
                    <ul className="features-list">
                        <li><Check /> Comprehensive SEO Audit & Strategy</li>
                        <li><Check /> Social Media Management</li>
                        <li><Check /> Paid Ad Campaigns (Meta/Google)</li>
                        <li><Check /> Content Creation & Copywriting</li>
                        <li><Check /> Monthly Performance Reporting</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
