import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

const ContactPage = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <div className="container" style={{ flex: 1, paddingTop: '60px', paddingBottom: '100px' }}>
                <div style={{ position: 'relative', marginBottom: '80px' }}>
                    <h1 style={{ fontSize: '4rem', maxWidth: '800px' }}>
                        Let's start a <br />
                        <span style={{ fontStyle: 'italic', color: 'var(--accent-blue)', position: 'relative' }}>
                            conversation
                            <svg className="scribble" style={{ bottom: '-20px', left: 0, width: '100%', height: '20px' }} viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10 Q 50 20 100 10 T 200 10" fill="none" stroke="var(--accent-blue)" strokeWidth="2" />
                            </svg>
                        </span>
                    </h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px' }}>

                    {/* Contact Info Column */}
                    <div style={{ position: 'relative' }}>
                        <div className="tape" style={{ top: '-30px', left: '-20px', transform: 'rotate(-10deg)' }}>CONTACT</div>

                        <div style={{ background: 'white', padding: '40px', border: '1px solid #eee', position: 'relative' }}>
                            <div style={{ marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <MapPin size={20} color="var(--accent-blue)" /> Office
                                </h3>
                                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#555' }}>
                                    Rivera Labs HQ<br />
                                    123 Innovation Drive, Suite 400<br />
                                    San Francisco, CA 94103
                                </p>
                            </div>

                            <div style={{ marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Mail size={20} color="var(--accent-blue)" /> Email
                                </h3>
                                <p style={{ fontSize: '14px', color: '#555' }}>
                                    <a href="mailto:hello@riveralabs.com" style={{ textDecoration: 'underline' }}>hello@riveralabs.com</a><br />
                                    <a href="mailto:careers@riveralabs.com" style={{ textDecoration: 'underline' }}>careers@riveralabs.com</a>
                                </p>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Phone size={20} color="var(--accent-blue)" /> Phone
                                </h3>
                                <p style={{ fontSize: '14px', color: '#555' }}>
                                    +1 (555) 123-4567
                                </p>
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            width: '100%',
                            height: '100%',
                            border: '2px solid var(--text-main)',
                            zIndex: -1
                        }}></div>
                    </div>

                    {/* Contact Form Column */}
                    <div>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Name</label>
                                    <input type="text" placeholder="Jane Doe" style={{
                                        padding: '15px',
                                        background: 'transparent',
                                        border: 'none',
                                        borderBottom: '1px solid #ccc',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '16px',
                                        outline: 'none'
                                    }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Email</label>
                                    <input type="email" placeholder="jane@example.com" style={{
                                        padding: '15px',
                                        background: 'transparent',
                                        border: 'none',
                                        borderBottom: '1px solid #ccc',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '16px',
                                        outline: 'none'
                                    }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Subject</label>
                                <select style={{
                                    padding: '15px',
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid #ccc',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '16px',
                                    outline: 'none',
                                    borderRadius: 0
                                }}>
                                    <option value="">Select a topic...</option>
                                    <option value="project">Start a Project</option>
                                    <option value="career">Join the Team</option>
                                    <option value="other">General Inquiry</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Message</label>
                                <textarea placeholder="Tell us about your project..." rows="6" style={{
                                    padding: '15px',
                                    background: '#fff',
                                    border: '1px solid #eee',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '14px',
                                    outline: 'none',
                                    resize: 'vertical'
                                }}></textarea>
                            </div>

                            <button className="btn" style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                                SEND MESSAGE <Send size={16} />
                            </button>

                        </form>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactPage;
