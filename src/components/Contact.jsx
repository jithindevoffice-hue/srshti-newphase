import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, Loader2, ArrowRight, Building2, Globe } from 'lucide-react';

const projectTypes = [
    { id: 'branding', label: 'Branding & Design' },
    { id: 'software', label: 'Software Services' },
    { id: 'erp', label: 'ERPNext Setup' },
    { id: 'app', label: 'Mobile App' },
    { id: 'other', label: 'Other Inquiries' }
];

const budgetRanges = [
    { id: 'small', label: 'Under ₹2L', desc: 'MVP / Small project' },
    { id: 'medium', label: '₹2L – ₹5L', desc: 'Standard business solution' },
    { id: 'large', label: '₹5L – ₹15L', desc: 'Scale / Enterprise app' },
    { id: 'enterprise', label: '₹15L+', desc: 'Full custom ecosystem' }
];

const Contact = () => {
    const [selectedType, setSelectedType] = useState('software');
    const [selectedBudget, setSelectedBudget] = useState('medium');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1800));
        
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after a delay
        setTimeout(() => {
            setFormData({ name: '', email: '', company: '', message: '' });
            setSubmitSuccess(false);
        }, 5000);
    };

    return (
        <section id="contact" className="relative py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-dental-500/10 dark:bg-dental-900/15 rounded-full blur-[130px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-900/15 rounded-full blur-[130px] animate-pulse-slow" />
            </div>

            <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-1.5 bg-slate-200 dark:bg-slate-800 rounded-full text-[10px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-6 shadow-sm"
                    >
                        Get in Touch
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-8"
                    >
                        Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-600 to-purple-600">remarkable.</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium"
                    >
                        Whether you need a brand redesign, custom workflow automation, or enterprise software, we are ready.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
                    
                    {/* Left Column: Contact Cards */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                        <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/80 rounded-[2.5rem] p-8 md:p-10 shadow-xl flex-1 flex flex-col justify-between relative overflow-hidden group">
                            {/* Decorative line */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-dental-500 to-purple-600" />
                            
                            <div>
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Contact Info</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-10">
                                    Have questions about how Srshti can elevate your software operations and design assets? Let's connect.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-6 group/item">
                                        <div className="w-14 h-14 rounded-2xl bg-dental-50 dark:bg-dental-950/40 border border-dental-100 dark:border-dental-900/50 flex items-center justify-center text-dental-600 dark:text-dental-400 shadow-md group-hover/item:scale-110 transition-transform">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                                            <a href="mailto:hello@srshti.in" className="text-lg font-bold text-slate-900 dark:text-white hover:text-dental-500 transition-colors">
                                                hello@srshti.in
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 group/item">
                                        <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-md group-hover/item:scale-110 transition-transform">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Call Us</p>
                                            <a href="tel:+919000000000" className="text-lg font-bold text-slate-900 dark:text-white hover:text-purple-500 transition-colors">
                                                +91 90000 00000
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 group/item">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-md group-hover/item:scale-110 transition-transform">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Our Studio</p>
                                            <p className="text-lg font-bold text-slate-900 dark:text-white">
                                                123 Tech Park, Bangalore, India
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between">
                                <div className="flex gap-4">
                                    {['twitter', 'linkedin', 'github'].map((platform) => (
                                        <a
                                            key={platform}
                                            href={`https://${platform}.com`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-850 text-slate-500 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all flex items-center justify-center text-xs font-bold uppercase tracking-wider"
                                        >
                                            {platform[0]}
                                        </a>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                                    <Globe className="w-4 h-4 animate-spin-slow" />
                                    <span>Global Delivery</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/80 rounded-[2.5rem] p-8 md:p-10 shadow-xl relative min-h-[600px] flex flex-col justify-center overflow-hidden">
                            
                            <AnimatePresence mode="wait">
                                {!submitSuccess ? (
                                    <motion.form
                                        key="contact-form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-8"
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {/* Name */}
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder=" "
                                                    className="peer w-full bg-slate-100/50 dark:bg-slate-850/50 border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl px-6 pt-6 pb-2 text-slate-900 dark:text-white placeholder-transparent focus:border-dental-500 dark:focus:border-dental-400 focus:outline-none transition-all font-semibold"
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="absolute left-6 top-1.5 text-xs text-slate-400 dark:text-slate-500 font-bold transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-dental-500 dark:peer-focus:text-dental-400"
                                                >
                                                    Your Name
                                                </label>
                                            </div>

                                            {/* Email */}
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder=" "
                                                    className="peer w-full bg-slate-100/50 dark:bg-slate-850/50 border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl px-6 pt-6 pb-2 text-slate-900 dark:text-white placeholder-transparent focus:border-dental-500 dark:focus:border-dental-400 focus:outline-none transition-all font-semibold"
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="absolute left-6 top-1.5 text-xs text-slate-400 dark:text-slate-500 font-bold transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-dental-500 dark:peer-focus:text-dental-400"
                                                >
                                                    Email Address
                                                </label>
                                            </div>
                                        </div>

                                        {/* Company */}
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                placeholder=" "
                                                className="peer w-full bg-slate-100/50 dark:bg-slate-850/50 border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl px-6 pt-6 pb-2 text-slate-900 dark:text-white placeholder-transparent focus:border-dental-500 dark:focus:border-dental-400 focus:outline-none transition-all font-semibold"
                                            />
                                            <label
                                                htmlFor="company"
                                                className="absolute left-6 top-1.5 text-xs text-slate-400 dark:text-slate-500 font-bold transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-dental-500 dark:peer-focus:text-dental-400 flex items-center gap-1"
                                            >
                                                <Building2 className="w-3.5 h-3.5" /> Company <span className="text-slate-300 dark:text-slate-600 font-normal">(Optional)</span>
                                            </label>
                                        </div>

                                        {/* Project Type */}
                                        <div>
                                            <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                                                What services are you looking for?
                                            </label>
                                            <div className="flex flex-wrap gap-3">
                                                {projectTypes.map((type) => (
                                                    <button
                                                        key={type.id}
                                                        type="button"
                                                        onClick={() => setSelectedType(type.id)}
                                                        className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border-2 ${
                                                            selectedType === type.id
                                                                ? 'bg-dental-500/10 border-dental-500 text-dental-600 dark:text-dental-400 shadow-md shadow-dental-500/5'
                                                                : 'bg-transparent border-slate-200 dark:border-slate-800 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700'
                                                        }`}
                                                    >
                                                        {type.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Budget Ranges */}
                                        <div>
                                            <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                                                Estimated Budget Range
                                            </label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                                {budgetRanges.map((range) => (
                                                    <button
                                                        key={range.id}
                                                        type="button"
                                                        onClick={() => setSelectedBudget(range.id)}
                                                        className={`p-4 rounded-2xl text-left transition-all border-2 flex flex-col justify-center ${
                                                            selectedBudget === range.id
                                                                ? 'bg-purple-500/10 border-purple-500 text-purple-600 dark:text-purple-400 shadow-md shadow-purple-500/5'
                                                                : 'bg-transparent border-slate-200 dark:border-slate-800 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700'
                                                        }`}
                                                    >
                                                        <span className="font-black text-sm mb-0.5">{range.label}</span>
                                                        <span className="text-[10px] opacity-75 font-semibold leading-none">{range.desc}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="relative">
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows="4"
                                                placeholder=" "
                                                className="peer w-full bg-slate-100/50 dark:bg-slate-850/50 border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl px-6 pt-6 pb-2 text-slate-900 dark:text-white placeholder-transparent focus:border-dental-500 dark:focus:border-dental-400 focus:outline-none transition-all font-semibold resize-none"
                                            />
                                            <label
                                                htmlFor="message"
                                                className="absolute left-6 top-1.5 text-xs text-slate-400 dark:text-slate-500 font-bold transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-dental-500 dark:peer-focus:text-dental-400"
                                            >
                                                Tell us about your project
                                            </label>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group relative w-full py-4.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-sm transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none shadow-xl flex items-center justify-center gap-2.5 overflow-hidden"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    <span>Sending Request...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        SEND ENQUIRY <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-dental-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <span className="relative z-10 group-hover:text-white transition-colors" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success-screen"
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.9, opacity: 0 }}
                                        transition={{ type: 'spring', damping: 15 }}
                                        className="text-center py-12 px-6 flex flex-col items-center justify-center"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white mb-8 shadow-xl shadow-emerald-400/20">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                            >
                                                <Check size={40} strokeWidth={3} />
                                            </motion.div>
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Message Sent!</h3>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium max-w-md mx-auto leading-relaxed">
                                            Thank you for reaching out. We have received your inquiry about <strong className="text-slate-900 dark:text-white font-bold">{projectTypes.find(t => t.id === selectedType)?.label}</strong> and will get back to you within 24 hours.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Contact;
