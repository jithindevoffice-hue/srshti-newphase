import React from 'react';

const About = () => {
    return (
        <div className="page-content" style={{ height: '100%', overflowY: 'auto', paddingRight: '20px' }}>
            <h1 style={{ fontWeight: 200, marginBottom: '2.5rem' }}>About</h1>

            <div style={{ marginBottom: '3rem' }}>
                <h2 className="text-cyan" style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 300 }}>Who We Are</h2>
                <p style={{ maxWidth: '800px', fontSize: '0.95rem', lineHeight: 1.8 }}>
                    At Srshti, we are a multidisciplinary digital agency offering cutting-edge software development,
                    creative design solutions, and strategic digital marketing. With a passion for innovation and a
                    commitment to quality, we help businesses of all sizes grow through smart technology and
                    powerful visual storytelling.
                </p>
            </div>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '60%', margin: '0 0 3rem 0' }}></div>

            <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h2 className="text-cyan" style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 300 }}>Our Mission</h2>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                        To empower brands through intelligent<br />
                        software, bold design, and impactful<br />
                        digital experiences.
                    </p>
                </div>

                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h2 className="text-cyan" style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 300 }}>Our vision</h2>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                        To be a catalyst for digital<br />
                        transformation, one solution at a<br />
                        time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
