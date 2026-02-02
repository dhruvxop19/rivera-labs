import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "CEO, TechFlow",
            text: "Rivera Labs transformed our digital presence completely. Their collage-style design aesthetic gave us exactly the unique look we were aiming for.",
            color: "#acc8b4"
        },
        {
            name: "David Chen",
            role: "Founder, ArtSpace",
            text: "Reliable, creative, and technically sound. The team understood our vision from day one and executed it flawlessly.",
            color: "#f4a261"
        },
        {
            name: "Elena Rodriguez",
            role: "CMO, VentureX",
            text: "The best agency we've worked with. They don't just build websites; they build brands that people actually remember.",
            color: "#e2c08d"
        },
        {
            name: "Marcus Cole",
            role: "Director, Horizon",
            text: "Incredible attention to detail. The animations and interactions feel so premium.",
            color: "#8cabff"
        }
    ];

    // Duplicate list for infinite scroll effect
    const marqueeList = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="section-padding" style={{ background: '#fff', marginTop: '100px', overflow: 'hidden' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '3rem' }}>What our partners <br /><em>are saying</em></h2>
            </div>

            <div className="marquee-container">
                <div className="marquee-content">
                    {marqueeList.map((t, index) => (
                        <div key={index} className="testimonial-card marquee-card">
                            <Quote className="quote-icon" style={{ opacity: 0.1, color: 'black' }} />
                            <p className="testimonial-text">"{t.text}"</p>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px', background: t.color, borderRadius: '50%', marginRight: '15px', flexShrink: 0 }}></div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '16px' }}>{t.name}</h4>
                                    <span style={{ fontSize: '12px', color: '#666' }}>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Duplicate for seamless visual if needed, but CSS animation handles the loop */}
                <div className="marquee-content" aria-hidden="true">
                    {marqueeList.map((t, index) => (
                        <div key={`dup-${index}`} className="testimonial-card marquee-card">
                            <Quote className="quote-icon" style={{ opacity: 0.1, color: 'black' }} />
                            <p className="testimonial-text">"{t.text}"</p>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px', background: t.color, borderRadius: '50%', marginRight: '15px', flexShrink: 0 }}></div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '16px' }}>{t.name}</h4>
                                    <span style={{ fontSize: '12px', color: '#666' }}>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
