import React from 'react';
import { Quote } from 'lucide-react';

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
        }
    ];

    return (
        <section className="container section-padding" style={{ background: '#fff', marginTop: '100px' }}>
            <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '60px' }}>What our partners <br /><em>are saying</em></h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
                {testimonials.map((t, index) => (
                    <div key={index} className="testimonial-card">
                        <Quote className="quote-icon" style={{ opacity: 0.1, color: 'black' }} />
                        <p style={{ fontSize: '18px', fontStyle: 'italic', marginBottom: '30px', position: 'relative', zIndex: 2 }}>"{t.text}"</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '50px', height: '50px', background: t.color, borderRadius: '50%', marginRight: '15px' }}></div>
                            <div>
                                <h4 style={{ margin: 0 }}>{t.name}</h4>
                                <span style={{ fontSize: '12px', color: '#666' }}>{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
