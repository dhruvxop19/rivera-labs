import React from 'react';
import { motion } from 'framer-motion';
import heroCollageImg from '../assets/hero-collage.png';

const Collage = () => {
    return (
        <div className="collage-area" style={{ position: 'relative', height: '500px', width: '100%' }}>

            {/* Tape Element */}
            <motion.div
                className="tape"
                style={{ top: '-20px', right: '20px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.5 }}
            />

            {/* Main Image Container */}
            <motion.div
                className="main-img"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                    backgroundImage: `url(${heroCollageImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden'
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 1 }}
                    style={{
                        padding: '40px',
                        color: 'white',
                        fontFamily: 'Playfair Display',
                        fontSize: '80px',
                        fontWeight: 'bold',
                        mixBlendMode: 'overlay'
                    }}>
                    BUILD
                </motion.div>
            </motion.div>

            {/* Floating Circle */}
            <motion.div
                className="circle-crop animate-float"
                style={{ background: '#f4a261', right: '-40px', top: '20px' }}
            />

            {/* Decorative Box */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '-20px',
                    width: '100px',
                    height: '100px',
                    border: '1px solid black',
                    transform: 'rotate(15deg)',
                    zIndex: 0
                }}
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 15, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
            />
        </div>
    );
};

export default Collage;
