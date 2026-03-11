import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
    {
        number: "1.",
        title: "DESIGN",
        subtitle: "Creativity That\nCaptivates",
        items: [
            "UI/UX Design",
            "Graphics Design",
            "VFX & Video Editing",
            "3D Animation &\nVisualization"
        ]
    },
    {
        number: "2.",
        title: "SOFTWARE\nDEVELOPMENT",
        subtitle: "Tailored Technology,\nBuilt to Scale",
        items: [
            "Mobile Apps & Website",
            "Business Automation",
            "SaaS Product Design &\nDevelopment"
        ]
    },
    {
        number: "3.",
        title: "DIGITAL\nMARKETING",
        subtitle: "We help brands get\nseen and grow\nonline with proven\ndigital marketing\nstrategies tailored\nfor performance.",
        items: []
    }
];

const Services = () => {
    return (
        <div className="page-content" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ fontWeight: 200, marginBottom: '2.5rem' }}>What We Do</h1>

            <div className="services-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                flex: 1,
                alignItems: 'stretch'
            }}>
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card"
                        whileHover={{ y: -10, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{
                            background: 'rgba(10, 6, 25, 0.7)',
                            borderRadius: '24px',
                            padding: '2.5rem',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            border: '1px solid rgba(255,255,255,0.02)'
                        }}
                    >
                        <div style={{ fontSize: '4rem', fontWeight: 100, color: 'rgba(255,255,255,0.8)', lineHeight: 1, marginBottom: '1.5rem' }}>
                            {service.number}
                        </div>

                        <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', fontWeight: 500, letterSpacing: '0.05em', whiteSpace: 'pre-line', marginBottom: '1rem' }}>
                            {service.title}
                        </h3>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, whiteSpace: 'pre-line', marginBottom: '2rem' }}>
                            {service.subtitle}
                        </p>

                        {service.items.length > 0 && (
                            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, flex: 1 }}>
                                {service.items.map((item, i) => (
                                    <li key={i} style={{
                                        position: 'relative',
                                        paddingLeft: '1rem',
                                        marginBottom: '0.8rem',
                                        fontSize: '0.85rem',
                                        color: 'rgba(255,255,255,0.7)',
                                        whiteSpace: 'pre-line'
                                    }}>
                                        <span style={{ position: 'absolute', left: 0, top: '6px', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--text-secondary)' }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', paddingTop: '2rem' }}>
                            <ChevronDown size={24} className="text-cyan cursor-pointer hover:text-white transition-colors" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
