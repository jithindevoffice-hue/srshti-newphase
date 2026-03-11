import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const SplashScreen = () => {
    return (
        <motion.div
            className="splash-screen"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 50,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--bg-dark)'
            }}
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <Logo width={120} height={120} />
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    style={{
                        fontSize: '2.5rem',
                        fontWeight: 500,
                        marginTop: '1rem',
                        letterSpacing: '0.2em',
                        margin: '1rem 0 0 0'
                    }}
                >
                    SRSHTI
                </motion.h1>
            </motion.div>
        </motion.div>
    );
};

export default SplashScreen;
