import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonialsData = [
    {
        name: "ANKIT SHAH",
        role: "Chennai",
        text: '"Srshti helped us build a fully functional ERP system from scratch. Highly recommend their technical and design team!"',
        color: 'var(--accent-cyan)'
    },
    {
        name: "KARAN",
        role: "Startup Founder",
        text: "Srshti delivered beyond expectations. Their design clarity and technical execution helped us launch our mobile app on time with zero compromises.",
        color: 'var(--accent-cyan)'
    },
    {
        name: "DIVA MEHRA",
        role: "Dubai",
        text: '"They understood our brand vision and designed a seamless mobile app UI that users love."',
        color: 'var(--accent-cyan)'
    }
];

const Testimonials = () => {
    return (
        <div className="page-content" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
                <h1 style={{ fontWeight: 200, margin: 0 }}>Testimonials</h1>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem', paddingBottom: '0.5rem' }}>
                    What Our Clients Say
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, position: 'relative' }}>

                <button className="carousel-nav" style={{
                    background: 'transparent', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', padding: '1rem'
                }}>
                    <ChevronLeft size={24} />
                </button>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2rem',
                    flex: 1,
                    height: '100%',
                    maxHeight: '400px',
                    alignItems: 'stretch'
                }}>
                    {testimonialsData.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, scale: 1.02 }}
                            style={{
                                background: 'rgba(10, 6, 25, 0.6)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid rgba(255,255,255,0.05)',
                            }}
                        >
                            {/* Image Placeholder */}
                            <div style={{
                                height: '45%',
                                background: 'linear-gradient(180deg, #1A1525 0%, #0D0914 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{ color: 'rgba(255,255,255,0.1)', fontSize: '1rem', letterSpacing: '0.1em' }}>CLIENT PHOTO</div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ color: testimonial.color, fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.2rem', textTransform: 'uppercase' }}>
                                    {testimonial.name}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                                    {testimonial.role}
                                </p>

                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.6,
                                    fontStyle: 'italic'
                                }}>
                                    {testimonial.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <button className="carousel-nav" style={{
                    background: 'transparent', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', padding: '1rem'
                }}>
                    <ChevronRight size={24} />
                </button>

            </div>
        </div>
    );
};

export default Testimonials;
