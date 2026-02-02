import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Code, Megaphone, ArrowUpRight, Check } from 'lucide-react';
import webDevCollage from '../assets/web_dev_collage.png';
import marketingCollage from '../assets/marketing_collage.png';

const ServiceCard = ({ title, items, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: false, amount: 0.1 }}
        whileHover={{ y: -5, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)' }}
        style={{
            background: 'white',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.3s ease'
        }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', letterSpacing: '-0.02em', margin: 0 }}>{title}</h3>
            <ArrowUpRight size={20} style={{ opacity: 0.3 }} />
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {items.map((item, i) => (
                <li key={i} style={{ fontSize: '14px', color: '#666', display: 'flex', alignItems: 'start', lineHeight: '1.5' }}>
                    <div style={{
                        flexShrink: 0,
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: 'var(--accent-blue)',
                        opacity: 0.1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '10px',
                        marginTop: '2px'
                    }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)' }}></div>
                    </div>
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

const CategorySection = ({ title, description, icon: Icon, services, image, imgAlt, index }) => (
    <section className="container" style={{ padding: '80px 20px 100px', borderTop: index !== 0 ? '1px solid #eee' : 'none' }}>
        <div className="category-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }}>

            {/* Sticky Left Column */}
            <div style={{ position: 'sticky', top: '120px' }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: 'white',
                        padding: '10px 20px',
                        borderRadius: '50px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                        marginBottom: '30px',
                        border: '1px solid #eee'
                    }}>
                        <Icon size={20} color="var(--accent-blue)" />
                        <span style={{ fontWeight: '600', fontSize: '14px', letterSpacing: '0.5px' }}>CATEGORY 0{index + 1}</span>
                    </div>

                    <h2 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-0.03em' }}>
                        {title.split(' ')[0]} <br /> <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent-blue)' }}>{title.split(' ').slice(1).join(' ')}</span>
                    </h2>

                    <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#666', marginBottom: '40px', maxWidth: '400px' }}>
                        {description}
                    </p>

                    {image && (
                        <div style={{ position: 'relative' }}>
                            {/* Decorative backdrop */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(135deg, rgba(226, 192, 141, 0.2) 0%, rgba(255,255,255,0) 100%)',
                                borderRadius: '20px',
                                zIndex: -1
                            }}></div>
                            <img src={image} alt={imgAlt} style={{ width: '100%', maxWidth: '350px', borderRadius: '12px', mixBlendMode: 'multiply' }} />
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Scrollable Right Column */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
                {services.map((service, idx) => (
                    <ServiceCard key={idx} index={idx} title={service.name} items={service.items} />
                ))}
            </div>
        </div>

        {/* Mobile styling injection since we are using inline styles mostly */}
        <style dangerouslySetInnerHTML={{
            __html: `
            @media (max-width: 1024px) {
                .category-layout {
                    grid-template-columns: 1fr !important;
                    gap: 40px !important;
                }
                .category-layout > div:first-child {
                    position: relative !important;
                    top: 0 !important;
                }
            }
        `}} />
    </section>
);

const ServicesPage = () => {
    const webDevServices = [
        {
            name: "Discovery & Strategy",
            items: ["Brand Workshops & Interviews", "KPI & Roadmap Planning", "Market & Competitor Analysis", "Tech Feasibility & Sitemaps"]
        },
        {
            name: "UI / UX Design",
            items: ["User Journey & Wireframing", "Interactive Prototypes", "Responsive Design", "Design Systems & UI Kits"]
        },
        {
            name: "Full-Stack Development",
            items: ["React, Next.js, Node.js", "CMS (WordPress, Contentful)", "API Production", "Static Sites & PWAs"]
        },
        {
            name: "E-Commerce",
            items: ["Shopify & WooCommerce", "Payment/Inventory Setup", "Checkout Optimization", "Multi-currency Support"]
        },
        {
            name: "Integrations",
            items: ["CRM (Salesforce, HubSpot)", "Booking & Chat Systems", "SSO Authentication", "Custom Dashboards"]
        },
        {
            name: "Security & Scale",
            items: ["SSL & Security Audits", "GDPR Compliance", "Page Speed Optimization", "DDoS Protection"]
        }
    ];

    const digitalMarketingServices = [
        {
            name: "SEO Strategy",
            items: ["Technical Audits", "Keyword Research", "Content Optimization", "Algorithm Monitoring"]
        },
        {
            name: "Paid Acquisition",
            items: ["Google PPC Campaigns", "Meta (FB/Insta) Ads", "LinkedIn B2B Ads", "Retargeting Pipelines"]
        },
        {
            name: "Social Media",
            items: ["Content Creation", "Reels & Short-form Video", "Community Management", "Organic Growth"]
        },
        {
            name: "Content Production",
            items: ["Professional Blogging", "SEO Copywriting", "Photography (50+ px)", "Videography & Editing"]
        },
        {
            name: "Brand Activations",
            items: ["Offline Campaigns", "Poster & Billboard Design", "Media Planning", "Event Strategy"]
        }
    ];

    return (
        <div style={{ background: '#fafafa', minHeight: '100vh' }}>
            <Navbar />

            {/* Hero Section */}
            <div className="services-hero" style={{ padding: '160px 20px 100px', textAlign: 'center', background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #f4f4f4 100%)' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '4px', color: '#999', textTransform: 'uppercase', marginBottom: '20px', display: 'block' }}>Our Capabilities</span>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: '1.1', marginBottom: '30px', fontWeight: '800', letterSpacing: '-0.03em' }}>
                        Digital solutions for <br />
                        <span style={{ position: 'relative', display: 'inline-block' }}>
                            modern brands
                            <svg width="100%" height="15" viewBox="0 0 200 15" style={{ position: 'absolute', bottom: '-5px', left: 0, width: '100%', fill: 'var(--accent-blue)', opacity: 0.3 }}>
                                <path d="M0,10 Q100,20 200,10 T400,10" stroke="none" />
                            </svg>
                        </span>
                    </h1>
                </motion.div>
            </div>

            <CategorySection
                index={0}
                title="Website Development"
                description="Engineered for performance and designed for impact. We build scalable, secure, and lightning-fast web experiences."
                icon={Code}
                services={webDevServices}
                image={webDevCollage}
                imgAlt="Web Dev Collage"
            />

            <CategorySection
                index={1}
                title="Digital Marketing"
                description="Data-driven strategies that convert. From SEO dominance to viral social campaigns, we amplify your voice continuously."
                icon={Megaphone}
                services={digitalMarketingServices}
                image={marketingCollage}
                imgAlt="Marketing Collage"
            />

            <Footer />
        </div>
    );
};

export default ServicesPage;
