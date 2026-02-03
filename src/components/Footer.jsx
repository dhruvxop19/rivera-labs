import React from 'react';

const Footer = () => {
    return (
        <footer className="container" style={{ padding: '50px 20px', fontSize: '12px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eee', marginTop: '100px' }}>
            <div>&copy; 2026 RIVERA LABS DIGITAL AGENCY</div>
            <div style={{ display: 'flex', gap: '20px' }}>
                <a href="#" className="hover-underline">Instagram</a>
                <a href="#" className="hover-underline">LinkedIn</a>
                <a href="https://wa.me/918908901008" target="_blank" rel="noopener noreferrer" className="hover-underline">WhatsApp</a>
                <a href="#" className="hover-underline">X</a>
            </div>
            <div>EST. 2026 — BEYOND DIGITAL</div>
        </footer>
    );
};

export default Footer;
