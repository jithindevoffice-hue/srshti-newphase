import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950 min-h-screen flex items-center transition-colors duration-300">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-[-10%] left-[10%] w-[1000px] h-[1000px] bg-dental-100/30 dark:bg-dental-900/20 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], x: [0, -50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-purple-100/30 dark:bg-purple-900/20 rounded-full blur-[130px]"
                />
            </div>

            <div className="max-w-[100rem] mx-auto w-full px-8 md:px-16 lg:px-24 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Left Column */}
                <div className="w-full lg:w-[50%] xl:w-[45%] text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full px-5 py-2 mb-10 shadow-xl"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dental-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-dental-400"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Next-Gen Digital Solutions</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-6xl sm:text-7xl md:text-[5.5rem] lg:text-[6rem] font-black tracking-tight text-slate-900 dark:text-white mb-10 leading-[0.95]"
                    >
                        Design <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-600 via-indigo-600 to-purple-600">Driven.</span> <br />
                        Software <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-dental-600">Built.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mb-12 max-w-xl"
                    >
                        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-6">
                            We bridge the gap between high-end aesthetics and high-performance engineering.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['Identity', 'UX/UI', 'ERPNext', 'Custom Apps'].map((tag, i) => (
                                <span key={i} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-start gap-5 w-full"
                    >
                        <button 
                            onClick={() => {
                                const el = document.getElementById('contact');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group relative w-full sm:w-auto px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-2xl shadow-slate-900/20 overflow-hidden"
                        >
                            <span className="relative z-10">START A PROJECT</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-dental-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10 group-hover:text-white transition-colors" />
                        </button>
                        <button className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-transparent text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-2xl font-black text-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all flex items-center justify-center gap-3 shadow-lg">
                            EXPLORE SERVICES
                        </button>
                    </motion.div>
                </div>

                {/* Right Column: Visual Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="w-full lg:w-[50%] xl:w-[55%] flex flex-col relative"
                >
                    <div className="relative group">
                        <div className="relative transform transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-1 z-20">
                            <div className="w-full aspect-[4/3] bg-white dark:bg-slate-900 p-2 md:p-4 rounded-[2.5rem] border border-slate-200/60 dark:border-slate-700/60 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative">
                                <div className="w-full h-full bg-slate-50 dark:bg-slate-800 rounded-[2rem] overflow-hidden relative flex flex-col">
                                    {/* App Bar */}
                                    <div className="h-14 border-b border-slate-200/60 dark:border-slate-700/60 px-6 flex items-center justify-between bg-white/50 dark:bg-slate-900/50">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-400" />
                                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                                            <div className="w-3 h-3 rounded-full bg-green-400" />
                                        </div>
                                        <div className="h-5 w-32 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700" />
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1 p-8 grid grid-cols-12 gap-6">
                                        <div className="col-span-8 space-y-6">
                                            <div className="h-10 w-2/3 bg-slate-900 dark:bg-white rounded-xl" />
                                            <div className="h-32 w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 space-y-4">
                                                <div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                                <div className="h-2 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                                <div className="h-2 w-1/3 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="h-24 bg-dental-50 dark:bg-dental-950/50 rounded-2xl border border-dental-100 dark:border-dental-900" />
                                                <div className="h-24 bg-purple-50 dark:bg-purple-950/50 rounded-2xl border border-purple-100 dark:border-purple-900" />
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <div className="h-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col p-6 items-center justify-center gap-6">
                                                <div className="w-20 h-20 rounded-full border-4 border-dental-500 border-t-transparent animate-spin" />
                                                <div className="h-3 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-12 -right-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur shadow-2xl rounded-3xl p-6 border border-slate-100 dark:border-slate-700 z-30 hidden xl:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-dental-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-dental-500/20">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Aesthetic Focus</p>
                                    <p className="text-lg font-black text-slate-900 dark:text-white leading-tight">Pixel Perfect<br />Execution</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="absolute -bottom-10 -left-12 bg-slate-900 dark:bg-slate-800 shadow-2xl rounded-3xl p-6 border border-slate-800 dark:border-slate-700 z-30 hidden xl:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-dental-400 border border-white/20">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Robust Core</p>
                                    <p className="text-lg font-black text-white leading-tight">High Velocity<br />Systems</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Aura */}
                    <div className="absolute -inset-10 bg-gradient-to-br from-dental-200/40 via-purple-200/40 to-indigo-200/40 dark:from-dental-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 rounded-[4rem] blur-3xl opacity-60 -z-10 transition-opacity duration-1000"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
