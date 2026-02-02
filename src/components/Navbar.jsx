import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar container" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="nav-links" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                <Link to="/">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/pricing">Pricing</Link>
            </div>
            <div className="logo" style={{ flexShrink: 0, margin: '0 20px', textAlign: 'center' }}>
                <Link to="/">RIVERA LABS</Link>
            </div>
            <div className="nav-links" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Link to="/contact" className="btn-outline" style={{ padding: '8px 20px', fontSize: '12px', marginRight: 0 }}>Contact Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;
