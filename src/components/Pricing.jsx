import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <section className="container section-padding" id="pricing">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '3.5rem' }}>Calculated <span style={{ fontStyle: 'italic', borderBottom: '2px solid var(--accent-blue)' }}>Investment</span></h2>
                <p style={{ marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>Transparent pricing packages designed to scale with your business needs.</p>
            </div>

            <div className="pricing-grid">
                {/* Starter */}
                <div className="pricing-card">
                    <h3>Starter</h3>
                    <div className="price">$2,500</div>
                    <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>Perfect for MVPs and small business sites.</p>
                    <button className="btn-outline" style={{ width: '100%', padding: '10px', marginBottom: '30px' }}>Get Started</button>
                    <ul className="features-list">
                        <li><Check /> 5-Page Website</li>
                        <li><Check /> Basic SEO Setup</li>
                        <li><Check /> Mobile Responsive</li>
                        <li><Check /> 1 Month Support</li>
                    </ul>
                </div>

                {/* Growth */}
                <div className="pricing-card" style={{ background: '#f0f4ff', borderColor: 'var(--accent-blue)' }}>
                    <div className="tape" style={{ top: '-15px', right: '50%', transform: 'translateX(50%) rotate(-2deg)' }}>POPULAR</div>
                    <h3>Growth</h3>
                    <div className="price">$5,000</div>
                    <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>For brands ready to scale aggressively.</p>
                    <button className="btn" style={{ width: '100%', padding: '10px', marginBottom: '30px' }}>Select Plan</button>
                    <ul className="features-list">
                        <li><Check /> 10-Page Custom Design</li>
                        <li><Check /> Advanced SEO & Analytics</li>
                        <li><Check /> CMS Integration</li>
                        <li><Check /> 3 Months Support</li>
                        <li><Check /> Social Media Kit</li>
                    </ul>
                </div>

                {/* Enterprise */}
                <div className="pricing-card">
                    <h3>Enterprise</h3>
                    <div className="price">Custom</div>
                    <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>Full-scale digital transformation.</p>
                    <button className="btn-outline" style={{ width: '100%', padding: '10px', marginBottom: '30px' }}>Contact Sales</button>
                    <ul className="features-list">
                        <li><Check /> Custom Web App Development</li>
                        <li><Check /> Dedicated Project Manager</li>
                        <li><Check /> 24/7 Priority Support</li>
                        <li><Check /> Cloud Infrastructure</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
