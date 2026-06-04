import React, { useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = useCallback((e, href) => {
        e.preventDefault();
        const sectionId = href.replace('/#', '');
        const doScroll = () => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        };
        if (location.pathname === '/') {
            doScroll();
        } else {
            navigate('/');
            setTimeout(doScroll, 400);
        }
    }, [location.pathname, navigate]);

    return (
        <footer className="bg-slate-900 dark:bg-black pt-20 pb-10 border-t border-slate-800 dark:border-slate-900 transition-colors duration-300">
            <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-block mb-6" onClick={() => window.scrollTo(0, 0)}>
                            <span className="text-3xl font-black tracking-tight text-white">Srshti</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Premium design and software agency crafting digital excellence for forward-thinking brands.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="/#design" onClick={(e) => scrollToSection(e, '/#design')} className="text-slate-400 hover:text-white transition-colors text-sm">Branding & Identity</a></li>
                            <li><a href="/#design" onClick={(e) => scrollToSection(e, '/#design')} className="text-slate-400 hover:text-white transition-colors text-sm">UI/UX Design</a></li>
                            <li><a href="/#software" onClick={(e) => scrollToSection(e, '/#software')} className="text-slate-400 hover:text-white transition-colors text-sm">Custom Software</a></li>
                            <li><a href="/#software" onClick={(e) => scrollToSection(e, '/#software')} className="text-slate-400 hover:text-white transition-colors text-sm">ERP Implementation</a></li>
                            <li><a href="/#software" onClick={(e) => scrollToSection(e, '/#software')} className="text-slate-400 hover:text-white transition-colors text-sm">App Development</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</a></li>
                            <li><a href="/#work" onClick={(e) => scrollToSection(e, '/#work')} className="text-slate-400 hover:text-white transition-colors text-sm">Our Work</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Careers</a></li>
                            <li><a href="/#contact" onClick={(e) => scrollToSection(e, '/#contact')} className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
                        <ul className="space-y-4">
                            <li className="text-slate-400 text-sm">hello@srshti.in</li>
                            <li className="text-slate-400 text-sm">+91 90000 00000</li>
                            <li className="text-slate-400 text-sm mt-4">
                                123 Tech Park,<br />
                                Bangalore, India
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Srshti Softwares and Design. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="/privacy" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                        <Link to="/terms" className="text-slate-500 hover:text-white transition-colors text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
