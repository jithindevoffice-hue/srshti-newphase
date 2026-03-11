import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Home } from 'lucide-react';
import Logo from './Logo';
import './Layout.css';

const navItems = [
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/connect', label: 'Connect' },
];

const Layout = () => {
    const location = useLocation();

    return (
        <div className="layout-container">
            <div className="layout-wrapper">

                {/* Top Right Icons */}
                <div className="top-nav-icons glass-panel">
                    <Phone size={20} className="icon-link" />
                    <Home size={20} className="icon-link" />
                </div>

                {/* Left Sidebar */}
                <div className="sidebar glass-panel">
                    <div className="sidebar-header">
                        <Logo width={80} height={80} />
                        <h2 className="brand-name">SRSHTI</h2>
                        <p className="brand-tagline">Where Innovation<br />Meets Creation</p>
                    </div>

                    <nav className="sidebar-nav">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-indicator"
                                                className="nav-active-indicator"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <span className="nav-label">{item.label}</span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* Main Content Area */}
                <div className="main-content glass-panel">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="page-transition-wrapper"
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            {/* Floating Action Button */}
            <div className="fab-container">
                <span className="fab-text">May i help you ?</span>
                <button className="fab-button">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
                </button>
            </div>
        </div>
    );
};

export default Layout;
