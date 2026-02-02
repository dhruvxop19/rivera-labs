import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images
import projectDashboard from '../assets/project-dashboard.png';
import projectLifestyle from '../assets/project-lifestyle.png';
import projectFintech from '../assets/project-fintech.png';

const ProjectsPage = () => {
    const projects = [
        {
            id: 1,
            title: "Nexus Dashboard",
            category: "SaaS / Analytics",
            image: projectDashboard,
            description: "A high-performance analytics dashboard for enterprise clients, featuring real-time data visualization and dark mode.",
            tags: ["React", "D3.js", "Tailwind"],
            color: "#e0e7ff"
        },
        {
            id: 2,
            title: "Chroma Magazine",
            category: "Editorial / E-commerce",
            image: projectLifestyle,
            description: "An award-winning editorial platform blending content and commerce with a unique collage aesthetic.",
            tags: ["Next.js", "Shopify", "Framer Motion"],
            color: "#fce7f3"
        },
        {
            id: 3,
            title: "Verde Finance",
            category: "Fintech / Mobile",
            image: projectFintech,
            description: "Secure and intuitive mobile banking interface designed for the next generation of investors.",
            tags: ["React Native", "Node.js", "Security"],
            color: "#dcfce7"
        }
    ];

    return (
        <div style={{ background: '#f8f8f8', minHeight: '100vh' }}>
            <Navbar />

            <div className="container" style={{ padding: '80px 20px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '80px', textAlign: 'center' }}
                >
                    <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>Selected <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', borderBottom: '3px solid var(--accent-blue)' }}>Works</span></h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '16px', color: '#666' }}>
                        A collection of digital experiences crafted with precision, passion, and a touch of the extraordinary.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px' }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <div style={{ marginTop: '100px', textAlign: 'center' }}>
                    <p style={{ marginBottom: '20px', fontSize: '18px', fontStyle: 'italic' }}>Have something in mind?</p>
                    <a href="/contact" className="btn">Start Your Project</a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ position: 'relative', cursor: 'pointer' }}
        >
            {/* Image Container */}
            <div style={{
                position: 'relative',
                height: '400px',
                overflow: 'hidden',
                borderRadius: '2px',
                boxShadow: isHovered ? '20px 20px 0px rgba(0,0,0,0.8)' : '10px 10px 0px rgba(0,0,0,0.1)',
                transition: 'all 0.4s ease',
                transform: isHovered ? 'translate(-5px, -5px)' : 'none',
                background: project.color
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.6s ease',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                }} />

                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.3)',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <button style={{
                        background: 'white',
                        padding: '15px 30px',
                        borderRadius: '30px',
                        border: 'none',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                        opacity: isHovered ? 1 : 0,
                        transition: 'all 0.4s ease 0.1s'
                    }}>
                        View Case Study
                    </button>
                </div>
            </div>

            {/* Content */}
            <div style={{ marginTop: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{project.title}</h3>
                    <div style={{ background: 'black', color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '12px' }}>
                        {project.category}
                    </div>
                </div>
                <p style={{ fontSize: '14px', color: '#555', marginBottom: '15px', lineHeight: '1.6' }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {project.tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '12px',
                            border: '1px solid #ddd',
                            padding: '4px 10px',
                            borderRadius: '4px',
                            color: '#666'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Floating Tape Effect for Detail */}
            <div className="tape" style={{
                top: '-15px',
                left: '20px',
                width: '80px',
                fontSize: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                transform: 'rotate(-5deg)'
            }}>
                PROJECT 0{project.id}
            </div>
        </motion.div>
    );
};

export default ProjectsPage;
