import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Dribbble } from 'lucide-react';

const Connect = () => {
    return (
        <div className="page-content" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ fontWeight: 200, marginBottom: '1.5rem' }}>Connect</h1>

            <div style={{
                background: 'linear-gradient(135deg, rgba(20, 15, 40, 0.7) 0%, rgba(10, 6, 25, 0.7) 100%)',
                borderRadius: '24px',
                flex: 1,
                display: 'flex',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                overflow: 'hidden'
            }}>

                {/* Left Side: Contact Info */}
                <div style={{ flex: 1, padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>

                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{
                            color: 'var(--accent-cyan)',
                            fontSize: '1.6rem',
                            fontWeight: 400,
                            letterSpacing: '0.1em',
                            lineHeight: 1.4,
                            marginBottom: '1.5rem'
                        }}>
                            LET'S BUILD<br />SOMETHING<br />AMAZING<br />TOGETHER
                        </h2>
                        <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>Have a project in mind?</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>We'd love to hear about it.</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem', color: 'var(--text-secondary)', alignItems: 'center', marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <Mail size={16} /> <span>contact@srshti.io</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <Phone size={16} /> <span>+91-9567804584</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <MapPin size={16} /> <span>Kochi, India</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto' }}>
                        <Instagram size={20} className="text-secondary hover:text-white cursor-pointer transition-colors" />
                        <Linkedin size={20} className="text-secondary hover:text-white cursor-pointer transition-colors" />
                        <Dribbble size={20} className="text-secondary hover:text-white cursor-pointer transition-colors" />
                        <Facebook size={20} className="text-secondary hover:text-white cursor-pointer transition-colors" />
                        <Mail size={20} className="text-secondary hover:text-white cursor-pointer transition-colors" />
                    </div>

                    {/* Vertical Divider */}
                    <div style={{ position: 'absolute', right: 0, top: '20%', bottom: '20%', width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                </div>

                {/* Right Side: Form */}
                <div style={{ flex: 1, padding: '3rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.3rem', fontWeight: 400, marginBottom: '2.5rem' }}>Get Quote</h3>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', backgroundColor: 'var(--accent-cyan)', borderTopLeftRadius: '24px', borderBottomLeftRadius: '24px' }}></div>
                            <input type="text" placeholder="Name.." style={inputStyle} />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', backgroundColor: 'var(--accent-cyan)', borderTopLeftRadius: '24px', borderBottomLeftRadius: '24px' }}></div>
                            <input type="text" placeholder="Contact Num.." style={inputStyle} />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', backgroundColor: 'var(--accent-cyan)', borderTopLeftRadius: '24px', borderBottomLeftRadius: '24px' }}></div>
                            <input type="email" placeholder="Email.." style={inputStyle} />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', backgroundColor: 'var(--accent-cyan)', borderTopLeftRadius: '24px', borderBottomLeftRadius: '24px' }}></div>
                            <input type="text" placeholder="Project Brief.." style={inputStyle} />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                            <button type="button" style={{
                                background: 'rgba(0, 229, 255, 0.05)',
                                border: '1px solid rgba(0, 229, 255, 0.2)',
                                color: 'var(--accent-cyan)',
                                padding: '0.6rem 2.5rem',
                                borderRadius: '50px',
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(0, 229, 255, 0.2)'; e.currentTarget.style.border = '1px solid var(--accent-cyan)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(0, 229, 255, 0.05)'; e.currentTarget.style.border = '1px solid rgba(0, 229, 255, 0.2)'; }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.05)',
    padding: '1rem 1.5rem',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    outline: 'none',
    borderRadius: '24px',
};

export default Connect;
