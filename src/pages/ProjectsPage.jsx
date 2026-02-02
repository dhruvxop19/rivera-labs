import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectsPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container" style={{ padding: '100px 0', minHeight: '60vh' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '40px' }}>Our Work</h1>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                    <div style={{ background: '#eee', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Project Placeholder 1
                    </div>
                    <div style={{ background: '#eee', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Project Placeholder 2
                    </div>
                    <div style={{ background: '#eee', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Project Placeholder 3
                    </div>
                    <div style={{ background: '#eee', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Project Placeholder 4
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectsPage;
