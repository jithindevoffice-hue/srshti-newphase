import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layout, Palette, Box, Smartphone, Layers, Server, Settings, Code, Workflow, Terminal } from 'lucide-react';

const Services = () => {
    return (
        <section className="py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300" id="services">
            <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-slate-200 dark:bg-slate-800 rounded-full text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6"
                    >
                        Capabilities
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-8">Our Expertise</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        We deliver end-to-end solutions, combining world-class design with robust engineering.
                    </p>
                </div>

                {/* Branding & Design */}
                <div className="mb-32" id="design">
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 shadow-lg shadow-purple-100 dark:shadow-purple-900/20">
                            <Palette size={32} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-4xl font-black text-slate-900 dark:text-white">Branding & Design</h3>
                        <div className="h-1.5 w-24 bg-purple-200 dark:bg-purple-800 rounded-full mt-4" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ServiceCard icon={<PenTool size={28} />} title="Identity Design" desc="Logos, typography, and visual systems that make your brand unforgettable." color="purple" />
                        <ServiceCard icon={<Layout size={28} />} title="UI/UX Design" desc="Intuitive user interfaces and seamless experiences for web and mobile." color="purple" />
                        <ServiceCard icon={<Box size={28} />} title="Packaging Design" desc="Striking packaging that stands out on the shelf and delights customers." color="purple" />
                        <ServiceCard icon={<Layers size={28} />} title="Graphic Design" desc="Marketing collateral, illustrations, and print materials with impact." color="purple" />
                    </div>
                </div>

                {/* Software Services */}
                <div id="software">
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="w-16 h-16 rounded-2xl bg-dental-100 dark:bg-dental-900/50 flex items-center justify-center text-dental-600 dark:text-dental-400 mb-6 shadow-lg shadow-dental-100 dark:shadow-dental-900/20">
                            <Code size={32} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-4xl font-black text-slate-900 dark:text-white">Software Services</h3>
                        <div className="h-1.5 w-24 bg-dental-200 dark:bg-dental-800 rounded-full mt-4" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ServiceCard icon={<Workflow size={28} />} title="Workflow Automation" desc="Streamline operations and eliminate manual tasks with custom automation." color="dental" />
                        <ServiceCard icon={<Settings size={28} />} title="ERP Implementation" desc="Tailored ERPNext solutions for manufacturing, retail, and services." color="dental" />
                        <ServiceCard icon={<Smartphone size={28} />} title="App Development" desc="Native and cross-platform mobile applications that users love." color="dental" />
                        <ServiceCard icon={<Server size={28} />} title="Cloud Infrastructure" desc="Scalable, secure, and highly available cloud architecture." color="dental" />
                        <div className="lg:col-start-2 lg:col-span-2">
                            <ServiceCard icon={<Terminal size={28} />} title="Custom Software Solutions" desc="Bespoke web applications built to solve your unique business challenges with precision and scale." color="dental" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ icon, title, desc, color }) => {
    const colorClasses = {
        purple: 'hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-100 dark:hover:shadow-purple-900/20 group',
        dental: 'hover:border-dental-300 dark:hover:border-dental-700 hover:shadow-2xl hover:shadow-dental-100 dark:hover:shadow-dental-900/20 group',
    };
    const iconColorClasses = {
        purple: 'bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 dark:group-hover:bg-purple-500 group-hover:text-white',
        dental: 'bg-dental-50 dark:bg-dental-900/40 text-dental-600 dark:text-dental-400 group-hover:bg-dental-600 dark:group-hover:bg-dental-500 group-hover:text-white',
    };

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={`p-10 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] shadow-sm transition-all duration-500 flex flex-col items-center text-center ${colorClasses[color]}`}
        >
            <div className={`w-20 h-20 rounded-2xl ${iconColorClasses[color]} flex items-center justify-center mb-8 transition-all duration-500`}>
                {icon}
            </div>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{title}</h4>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{desc}</p>
        </motion.div>
    );
};

export default Services;
