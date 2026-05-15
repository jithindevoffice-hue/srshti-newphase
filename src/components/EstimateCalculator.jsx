import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, CheckCircle2, TrendingUp, Zap } from 'lucide-react';

const EstimateCalculator = () => {
    const [services, setServices] = useState({
        branding: false,
        uiux: false,
        erp: false,
        app: false,
        automation: false,
    });
    const [scale, setScale] = useState(1);

    const handleServiceToggle = (service) => {
        setServices(prev => ({ ...prev, [service]: !prev[service] }));
    };

    const calculateMetrics = () => {
        let costBase = 0, roiBase = 0, hoursSaved = 0;
        if (services.branding) { costBase += 50000; roiBase += 15; }
        if (services.uiux) { costBase += 75000; roiBase += 20; }
        if (services.erp) { costBase += 150000; roiBase += 35; hoursSaved += 20; }
        if (services.app) { costBase += 200000; roiBase += 25; }
        if (services.automation) { costBase += 100000; roiBase += 40; hoursSaved += 15; }
        const scaleMultiplier = scale === 1 ? 1 : scale === 2 ? 2.5 : 6;
        return {
            estimatedInvestment: costBase * scaleMultiplier,
            efficiencyGain: roiBase,
            weeklyHoursSaved: hoursSaved * (scale === 1 ? 1 : scale === 2 ? 1.5 : 3)
        };
    };

    const formatCurrency = (val) => '₹' + new Intl.NumberFormat('en-IN').format(val);
    const { estimatedInvestment, efficiencyGain, weeklyHoursSaved } = calculateMetrics();

    return (
        <section id="estimator" className="py-24 bg-slate-900 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-dental-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center space-x-2 border border-slate-700 rounded-full px-5 py-2 mb-6">
                        <Calculator className="w-4 h-4 text-dental-400" />
                        <span className="text-xs font-bold text-dental-200 tracking-wider uppercase">Project Estimator</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                        Estimate Your <span className="text-dental-400">Digital Transformation</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Select your requirements and see how Srshti can impact your business growth and efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Input Panel */}
                    <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
                        <div className="space-y-10">
                            <div>
                                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Select Services</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { id: 'branding', label: 'Identity & Branding' },
                                        { id: 'uiux', label: 'UI/UX Design' },
                                        { id: 'erp', label: 'ERPNext Implementation' },
                                        { id: 'app', label: 'App Development' },
                                        { id: 'automation', label: 'Workflow Automation' }
                                    ].map((service) => (
                                        <button
                                            key={service.id}
                                            onClick={() => handleServiceToggle(service.id)}
                                            className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                                                services[service.id]
                                                    ? 'bg-dental-600/10 border-dental-500 text-white'
                                                    : 'bg-transparent border-white/5 text-slate-400 hover:border-white/20'
                                            }`}
                                        >
                                            <span className="font-bold text-sm">{service.label}</span>
                                            {services[service.id] && <CheckCircle2 className="w-5 h-5 text-dental-400" />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Business Scale</label>
                                    <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                                        scale === 1 ? 'bg-emerald-500/10 text-emerald-400' :
                                        scale === 2 ? 'bg-dental-500/10 text-dental-400' :
                                        'bg-purple-500/10 text-purple-400'
                                    }`}>
                                        {scale === 1 ? 'Startup' : scale === 2 ? 'Mid-Sized' : 'Enterprise'}
                                    </span>
                                </div>
                                <input
                                    type="range" min="1" max="3" step="1" value={scale}
                                    onChange={(e) => setScale(Number(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-dental-500"
                                />
                                <div className="flex justify-between text-[10px] font-bold text-slate-500 mt-4 px-1">
                                    <span>STARTUP</span><span>MID-SIZED</span><span>ENTERPRISE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Panel */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-gradient-to-br from-dental-600 to-indigo-700 rounded-3xl p-8 shadow-2xl shadow-dental-600/20">
                            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Estimated Investment Range</p>
                            <h3 className="text-4xl font-black text-white mb-8">
                                {estimatedInvestment > 0 ? `${formatCurrency(estimatedInvestment)} – ${formatCurrency(estimatedInvestment * 1.3)}` : 'Select Services'}
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Efficiency Boost</p>
                                        <p className="text-white font-black">{efficiencyGain > 0 ? `${efficiencyGain}% +` : '—'}</p>
                                    </div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Weekly Admin Savings</p>
                                        <p className="text-white font-black">{weeklyHoursSaved > 0 ? `${weeklyHoursSaved} Hours` : '—'}</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-8 bg-white text-indigo-700 py-4 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all shadow-xl active:scale-[0.98]">
                                GET DETAILED QUOTE
                            </button>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                            <p className="text-slate-400 text-xs leading-relaxed italic">
                                * Estimates are based on industry averages and typical Srshti project delivery. Exact pricing depends on specific requirements and integrations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EstimateCalculator;
