import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
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
        setMobileMenuOpen(false);
    }, [location.pathname, navigate]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Branding & Design', href: '/#design' },
        { name: 'Software Services', href: '/#software' },
        { name: 'Our Work', href: '/#work' },
        { name: 'Estimator', href: '/#estimator' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
                    isScrolled || mobileMenuOpen
                        ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-black/20 border-b border-slate-200/60 dark:border-slate-800/60'
                        : 'bg-transparent'
                }`}
            >
                <div className="w-full max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 cursor-pointer z-50 shrink-0">
                        <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Srshti</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex flex-1 items-center justify-center gap-8 px-4 min-w-0">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-dental-600 dark:hover:text-dental-400 transition-colors whitespace-nowrap cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Area */}
                    <div className="flex items-center gap-3 shrink-0 z-[1000]">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={theme}
                                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                                </motion.span>
                            </AnimatePresence>
                        </button>

                        {/* Desktop CTA */}
                        <div className="hidden lg:block">
                            <button 
                                onClick={(e) => scrollToSection(e, '/#contact')}
                                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-dental-600 dark:hover:bg-dental-400 dark:hover:text-white transition-all shadow-lg active:scale-95 whitespace-nowrap"
                            >
                                Contact Us
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-slate-800 dark:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden lg:hidden"
                        >
                            <div className="mx-4 mb-4 p-4 space-y-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-2xl">
                                {navLinks.map(link => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="flex items-center text-slate-900 dark:text-slate-100 font-bold text-base py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-dental-600 dark:hover:text-dental-400 transition-all cursor-pointer"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                                    <button 
                                        onClick={(e) => scrollToSection(e, '/#contact')}
                                        className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 px-4 rounded-xl font-bold text-sm transition-all"
                                    >
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navbar;
