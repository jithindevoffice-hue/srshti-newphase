import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    return (
        <div className="page-content" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
                <h1 style={{ fontWeight: 200, margin: 0 }}>Portfolio</h1>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem', paddingBottom: '0.5rem' }}>
                    Our Work Speaks for Itself
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, position: 'relative' }}>

                <button className="carousel-nav" style={{
                    background: 'transparent', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', padding: '1rem'
                }}>
                    <ChevronLeft size={24} />
                </button>

                <motion.div
                    className="portfolio-card flex-1"
                    style={{
                        background: 'rgba(10, 6, 25, 0.5)',
                        borderRadius: '24px',
                        display: 'flex',
                        overflow: 'hidden',
                        height: '100%',
                        maxHeight: '450px',
                        border: '1px solid rgba(255,255,255,0.05)',
                    }}
                >
                    {/* Image Placeholder */}
                    <div style={{
                        flex: '1.5',
                        background: 'linear-gradient(135deg, #1A1525 0%, #0D0914 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0.1,
                            fontSize: '4rem',
                            fontWeight: 800,
                            letterSpacing: '0.2em'
                        }}>
                            PROJECT IMAGE
                        </div>
                        <div style={{
                            position: 'absolute',
                            bottom: 0, left: 0, right: 0, height: '40%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                        }}></div>
                    </div>

                    {/* Project Details */}
                    <div style={{ flex: '1', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{
                            color: 'var(--accent-cyan)',
                            fontSize: '1.4rem',
                            fontWeight: 400,
                            lineHeight: 1.4,
                            letterSpacing: '0.05em',
                            marginBottom: '2rem'
                        }}>
                            SACRED<br />
                            SCRIPT – BIBLE<br />
                            COMPANION APP
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                            <div><strong style={{ color: 'white', fontWeight: 500 }}>Client:</strong> <span style={{ color: 'var(--text-secondary)' }}>In-house</span></div>
                            <div><strong style={{ color: 'white', fontWeight: 500 }}>Platform:</strong> <span style={{ color: 'var(--text-secondary)' }}>iOS & Android</span></div>
                            <div><strong style={{ color: 'white', fontWeight: 500 }}>Services:</strong> <span style={{ color: 'var(--text-secondary)' }}>UI/UX Design, App Concept</span></div>
                        </div>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Sacred Script is a modern Bible companion app that blends daily devotionals, prayers, and emotional healing tools—helping users find comfort, clarity, and spiritual growth through a personalized experience.
                        </p>

                        <div style={{ marginTop: 'auto' }}>
                            <button style={{
                                background: 'rgba(0, 229, 255, 0.1)',
                                border: '1px solid var(--accent-cyan)',
                                color: 'var(--accent-cyan)',
                                borderRadius: '50px',
                                padding: '0.6rem 1.5rem',
                                fontSize: '0.8rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent-cyan)'; e.currentTarget.style.color = '#000'; }}
                                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(0, 229, 255, 0.1)'; e.currentTarget.style.color = 'var(--accent-cyan)'; }}
                            >
                                View Full Project
                            </button>
                        </div>
                    </div>
                </motion.div>

                <button className="carousel-nav" style={{
                    background: 'transparent', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', padding: '1rem'
                }}>
                    <ChevronRight size={24} />
                </button>

            </div>
        </div>
    );
};

export default Portfolio;
