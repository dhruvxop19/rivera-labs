import React from 'react';

const Footer = () => {
    return (
        <footer className="container" style={{ padding: '50px 20px', fontSize: '12px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eee', marginTop: '100px' }}>
            <div>&copy; 2026 RIVERA LABS DIGITAL AGENCY</div>
            <div>
                <a href="#" style={{ marginRight: '20px' }}>Instagram</a>
                <a href="#">LinkedIn</a>
            </div>
            <div>EST. 2024 — BEYOND DIGITAL</div>
        </footer>
    );
};

export default Footer;
