import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Rocket, PenTool } from 'lucide-react';
import tornPaper from '../assets/torn-paper.png';

const Services = () => {
    return (
        <section className="container services-section">
            <motion.div
                className="torn-paper-blue"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
                style={{
                    backgroundColor: 'var(--accent-blue)',
                    backgroundImage: `url(${tornPaper})`,
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'overlay',
                    minHeight: '600px',
                    clipPath: 'polygon(0% 0%, 100% 5%, 95% 45%, 100% 100%, 10% 95%, 0% 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '40px',
                    position: 'relative'
                }}>
                <div style={{ color: 'white', fontSize: '12px', maxWidth: '200px', zIndex: 2 }}>
                    MARKETING / SEO / ADS / SOCIAL / CONTENT
                    <br /><br />
                    We build things that last.
                </div>
            </motion.div>

            <div className="service-list">
                <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.2 }}
                        style={{ display: 'block' }}
                    >
                        Digital growth
                    </motion.span>
                    <motion.em
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        style={{ color: 'var(--accent-blue)', fontFamily: 'var(--font-serif)', display: 'block' }}
                    >
                        without compromise
                    </motion.em>
                </h2>

                {[
                    { icon: Layers, title: "Product & Engineering", desc: "From MVP development to full-scale web applications, we build robust, scalable solutions using the latest tech stacks like React, Next.js, and Node." },
                    { icon: Rocket, title: "Digital Marketing", desc: "Data-driven SEO, high-conversion ad campaigns, and social media handling that puts your brand in front of the right eyes." },
                    { icon: PenTool, title: "Content & Creative", desc: "Professional photography, persuasive content writing, and lead generation strategies tailored to your business goals." }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className="service-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: '40px' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <item.icon size={24} /> {item.title}
                        </h3>
                        <p style={{ fontSize: '14px', color: '#555' }}>
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
