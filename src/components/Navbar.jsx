import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar container">
            <div className="nav-links">
                <Link to="/">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/testimonials">Testimonials</Link>
                <Link to="/pricing">Pricing</Link>
            </div>
            <div className="logo">
                <Link to="/">RIVERA LABS</Link>
            </div>
            <div className="nav-links">
                <Link to="/contact" className="btn-outline" style={{ padding: '8px 20px', fontSize: '12px' }}>Contact Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;
