import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const BlogsPage = () => {
    return (
        <div style={{ background: '#f8f8f8', minHeight: '100vh' }}>
            <Navbar />

            <div className="container" style={{ padding: '80px 20px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>Latest <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent-blue)' }}>Insights</span></h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '16px', color: '#666' }}>
                        Thoughts, trends, and strategies from the Rivera Labs team.
                    </p>
                </motion.div>

                <div style={{ textAlign: 'center', padding: '100px 0', border: '1px dashed #ccc', borderRadius: '8px' }}>
                    <p style={{ fontSize: '18px', color: '#888' }}>No posts found yet. Check back soon!</p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BlogsPage;
