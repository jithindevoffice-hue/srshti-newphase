import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const caseStudies = [
    {
        id: 'icc',
        name: 'ICC Cables',
        industry: 'Manufacturing',
        title: 'End-to-End Production & BOM Automation',
        challenge: 'ICC struggled with disconnected systems, manual Bill of Materials (BOM) tracking, and frequent stockouts leading to delayed production cycles.',
        solution: 'Implemented a full-scale ERPNext manufacturing module with multi-level BOMs, automated material requests, and real-time shop floor tracking.',
        measurables: [
            { metric: '40%', label: 'Reduction in Production Delays' },
            { metric: '99.9%', label: 'Inventory Accuracy' },
            { metric: '100%', label: 'Traceability of Raw Materials' }
        ],
        workflow: ['Raw Material Procurement', 'Work Orders & BOM', 'Production & Routing', 'Quality Inspection', 'Finished Goods & Dispatch'],
        color: 'dental'
    },
    {
        id: 'blush',
        name: 'Blush & Glow',
        industry: 'Rental & Retail',
        title: 'Rental POS & Integrated Accountancy',
        challenge: 'Managing rental inventory availability, manual deposit handling, and reconciling raw material purchases was creating severe accounting bottlenecks.',
        solution: 'Deployed a customized ERPNext Point of Sale (POS) optimized for rentals, seamlessly integrated with backend accounting, purchasing, and invoicing.',
        measurables: [
            { metric: '3x', label: 'Faster Checkout Process' },
            { metric: '0', label: 'Lost Rental Items' },
            { metric: '100%', label: 'Automated Reconciliation' }
        ],
        workflow: ['Booking & Deposit', 'Dispatch / Rent Out', 'Return & Damage Check', 'Final Invoice', 'Raw Material Purchase Sync'],
        color: 'rose'
    },
    {
        id: 'smilecraft',
        name: "Pooja's Smilecraft",
        industry: 'Healthcare / Dental',
        title: 'Multi-Chair Clinic ERP & Automation',
        challenge: 'High patient no-show rates and fragmented patient records across multiple chairs caused revenue leakage and administrative fatigue.',
        solution: 'Configured a comprehensive clinic management ERP with automated WhatsApp reminders, integrated billing, and digital charting.',
        measurables: [
            { metric: '40%', label: 'Drop in No-shows' },
            { metric: '30%', label: 'Increase in Patient Retention' },
            { metric: '15 hrs', label: 'Saved per week on admin' }
        ],
        workflow: ['WhatsApp Booking', 'Consultation & Charting', 'Treatment Plan & Quote', 'Invoicing & Payments', 'Automated Follow-ups'],
        color: 'teal'
    }
];

const CaseStudies = () => {
    const [activeTab, setActiveTab] = useState(caseStudies[0].id);
    const activeCase = caseStudies.find(c => c.id === activeTab) || caseStudies[0];

    return (
        <section id="work" className="py-32 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
            <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center space-x-2 bg-dental-100 dark:bg-dental-900/40 text-dental-700 dark:text-dental-400 rounded-full px-4 py-1.5 mb-6">
                        <span className="text-xs font-black tracking-widest uppercase">Proven Results</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
                        How We Transform Businesses
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Detailed looks into how our tailored solutions solve complex industry challenges.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {caseStudies.map((study) => (
                        <button
                            key={study.id}
                            onClick={() => setActiveTab(study.id)}
                            className={`px-6 py-3 rounded-xl font-bold transition-all text-sm md:text-base ${
                                activeTab === study.id
                                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg scale-105'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                            }`}
                        >
                            {study.name}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200 dark:shadow-black/30 border border-slate-100 dark:border-slate-800 min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCase.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        >
                            {/* Left */}
                            <div className="space-y-8">
                                <div>
                                    <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3
                                        ${activeCase.color === 'dental' ? 'bg-dental-100 dark:bg-dental-900/50 text-dental-700 dark:text-dental-400' : ''}
                                        ${activeCase.color === 'rose' ? 'bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-400' : ''}
                                        ${activeCase.color === 'teal' ? 'bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-400' : ''}
                                    `}>
                                        {activeCase.industry}
                                    </span>
                                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                                        {activeCase.title}
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">The Challenge</h4>
                                            <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{activeCase.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Our Solution</h4>
                                            <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{activeCase.solution}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-800 pt-8">
                                    {activeCase.measurables.map((m, i) => (
                                        <div key={i} className="text-center">
                                            <p className={`text-3xl font-black mb-1
                                                ${activeCase.color === 'dental' ? 'text-dental-600 dark:text-dental-400' : ''}
                                                ${activeCase.color === 'rose' ? 'text-rose-600 dark:text-rose-400' : ''}
                                                ${activeCase.color === 'teal' ? 'text-teal-600 dark:text-teal-400' : ''}
                                            `}>{m.metric}</p>
                                            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">{m.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Workflow */}
                            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 flex flex-col justify-center">
                                <h4 className="text-center text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8">
                                    Implementation Workflow
                                </h4>
                                <div className="relative max-w-sm mx-auto w-full space-y-6">
                                    <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                                    {activeCase.workflow.map((step, idx) => (
                                        <div key={idx} className="relative flex items-center gap-6 z-10">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shrink-0 shadow-lg
                                                ${activeCase.color === 'dental' ? 'bg-gradient-to-br from-dental-500 to-dental-700' : ''}
                                                ${activeCase.color === 'rose' ? 'bg-gradient-to-br from-rose-500 to-rose-700' : ''}
                                                ${activeCase.color === 'teal' ? 'bg-gradient-to-br from-teal-500 to-teal-700' : ''}
                                            `}>
                                                {idx + 1}
                                            </div>
                                            <div className="bg-white dark:bg-slate-900 px-4 py-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex-1 font-bold text-slate-700 dark:text-slate-300">
                                                {step}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
