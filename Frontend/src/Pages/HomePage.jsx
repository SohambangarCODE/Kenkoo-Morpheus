import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    Activity, Shield, ChevronRight, Stethoscope,
    AlertTriangle, BarChart3, MapPin, PhoneCall,
    Zap, UserCheck, Globe, WifiOff, FileText, Heart,
    CheckCircle2, PlusCircle, ArrowRight
} from 'lucide-react';

// Animation Variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
};

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[white] text-slate-600 selection:bg-[#1447E6]/30 overflow-x-hidden font-sans flex flex-col items-center w-full">

            {/*TOP NAVBAR */}
            <nav className="w-full border-b border-slate-100 bg-[white]/80 backdrop-blur-md sticky top-0 z-50 flex justify-center">
                <div className="max-w-6xl w-full px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                        {/* Icon fallback since the logo might be needed */}
                        <div className="w-8 h-8 rounded-lg bg-[#1447E6]/10 flex items-center justify-center border border-[#1447E6]/20">
                            <Activity className="text-[#1447E6] w-5 h-5" />
                        </div>
                        <span className="text-slate-900 font-bold text-xl tracking-tight">Kenkoo AI</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => navigate('/login')}
                            className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors"
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-[#1447E6] hover:bg-[#04bd75] text-[white] px-5 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2"
                        >
                            Get Started <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </nav>

            <main className="w-full flex flex-col items-center">

                {/*HERO SECTION */}
                <section className="pt-24 lg:pt-20 pb-24 px-6 w-full max-w-6xl relative overflow-hidden flex flex-col items-center text-center">
                    <motion.div
                        initial="hidden" animate="visible" variants={stagger}
                        className="space-y-6 relative z-10 flex flex-col items-center max-w-4xl"
                    >
                        {/* Top Pill Accent */}
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[white] border border-[#1447E6]/30 text-[#1447E6] text-xs font-semibold tracking-wide mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1447E6] animate-pulse"></div>
                            Emergency Intelligence Engine
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                            AI-Powered First Response <br />
                            <span className="text-[#1447E6]">Health Companion</span>
                        </motion.h1>


                        <motion.p variants={fadeIn} className="text-base text-slate-500 max-w-2xl leading-relaxed">
                            Kenkoo AI analyzes symptoms, detects emergencies, suggests the right medical action, and connects users to nearby care - instantly.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-6 justify-center">
                            <button
                                onClick={() => navigate("/login")}
                                className="flex items-center gap-2 bg-[#1447E6] text-[white] px-8 py-3.5 rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(5,213,133,0.3)] transition-all group"
                            >
                                Start Smart Diagnosis <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-3.5 rounded-full font-bold text-base border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all">
                                Learn How It Works
                            </button>
                        </motion.div>

                        <motion.div variants={fadeIn} className="flex flex-wrap gap-4 text-xs font-bold text-slate-600 pt-6 justify-center">
                            <span className="flex items-center gap-1.5 bg-[white] px-3 py-1.5 rounded-full border border-slate-100"><CheckCircle2 className="w-3.5 h-3.5 text-[#1447E6]" /> Early Risk Detection</span>
                            <span className="flex items-center gap-1.5 bg-[white] px-3 py-1.5 rounded-full border border-slate-100"><CheckCircle2 className="w-3.5 h-3.5 text-[#1447E6]" /> Golden Hour Alerts</span>
                            <span className="flex items-center gap-1.5 bg-[white] px-3 py-1.5 rounded-full border border-slate-100"><CheckCircle2 className="w-3.5 h-3.5 text-[#1447E6]" /> Doctor Match</span>
                            <span className="flex items-center gap-1.5 bg-[white] px-3 py-1.5 rounded-full border border-slate-100"><CheckCircle2 className="w-3.5 h-3.5 text-[#1447E6]" /> Multilingual Support</span>
                        </motion.div>
                    </motion.div>
                </section>

                {/* QUICK ACTION CARDS */}
                < section className="py-24 px-6 w-full bg-[white]/30 flex justify-center" >
                    <div className="max-w-6xl w-full grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <Stethoscope />, title: "Enter Symptoms", desc: "AI analyzes patient condition instantly", color: "text-[#1447E6]" },
                            { icon: <AlertTriangle />, title: "Emergency Risk Check", desc: "Detect time-sensitive critical cases", color: "text-[#1447E6]" },
                            { icon: <BarChart3 />, title: "View Health Insights", desc: "Track severity trends & reports", color: "text-[#1447E6]" }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-8 bg-[white] border border-slate-100 hover:border-slate-200 rounded-[1.5rem] transition-all cursor-pointer group shadow-lg"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-[white] flex items-center justify-center mb-6 ${card.color}`}>
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{card.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section >

                {/* ðŸ¤– 4ï¸ âƒ£ AI TRIAGE PREVIEW */}
                < section className="py-24 px-6 w-full max-w-6xl" >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-[white] border border-slate-100 rounded-[2rem] p-8 shadow-2xl relative"
                        >
                            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                                <h4 className="font-bold text-slate-900">Likely Conditions</h4>
                                <span className="text-xs font-black uppercase tracking-widest text-[#1447E6]">STIE Analysis</span>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { label: "Acute Bronchitis", risk: "Moderate", val: 55, color: "bg-orange-400" },
                                    { label: "Pneumonia", risk: "High Risk", val: 74, color: "bg-red-500" },
                                    { label: "Viral Fever", risk: "Low", val: 20, color: "bg-[#1447E6]" }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between font-bold text-sm">
                                            <span className="text-slate-600">{item.label} <span className="text-slate-500 font-normal ml-1">â€” {item.risk}</span></span>
                                            <span className="text-slate-500">{item.val}%</span>
                                        </div>
                                        <div className="h-1.5 bg-[white] rounded-full overflow-hidden">
                                            <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.val}%` }} transition={{ duration: 1 }} className={`h-full ${item.color}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-4 bg-[#1447E6]/10 border-l-4 border-[#1447E6] rounded-r-xl">
                                <p className="text-sm font-bold text-slate-900">Risk Level: 74% â€” High</p>
                                <p className="text-sm text-slate-500 mt-1">Suggested Action: Refer to Pulmonologist</p>
                            </div>
                        </motion.div>

                        <div className="space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">AI-Powered Smart <br /> Triage Engine</h2>
                            <p className="text-lg text-slate-500 leading-relaxed max-w-md">
                                Our Smart Triage Intelligence Engine (STIE) evaluates symptoms using structured AI reasoning and medical severity classification.
                            </p>
                            <p className="text-lg font-semibold text-[#1447E6]">It doesnâ€™t just guess conditions â€” it prioritizes risk.</p>
                        </div>
                    </div>
                </section >

                {/* ðŸš¨ 5ï¸ âƒ£ EMERGENCY INTELLIGENCE */}
                < section className="py-24 px-6 w-full max-w-6xl" >
                    <div className="bg-[white] border border-red-500/20 rounded-[2rem] p-10 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px]" />
                        <div className="space-y-8 flex-1 relative z-10">
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Golden Hour Emergency Detection</h2>
                            <p className="text-lg text-slate-600 max-w-lg">Kenkoo AI identifies stroke, cardiac events, severe infections, and other time-sensitive conditions.</p>
                            <div className="space-y-4">
                                {['Triggers Emergency Alert', 'Displays Nearest Hospitals', 'Shows Ambulance Numbers', 'Recommends Immediate Action'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                                        <span className="font-medium text-slate-100">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ rotate: -3 }}
                            whileInView={{ rotate: 0 }}
                            className="bg-[white] p-8 rounded-3xl border border-red-500/30 shadow-[0_0_40px_rgba(239,68,68,0.15)] flex-1 w-full max-w-md relative z-10"
                        >
                            <div className="flex items-center gap-4 text-red-500 mb-6 animate-pulse">
                                <AlertTriangle className="w-8 h-8" />
                                <h3 className="text-xl font-black tracking-wider">CRITICAL ALERT</h3>
                            </div>
                            <p className="text-slate-900 font-bold text-lg mb-6">Cardiac Pattern Detected</p>
                            <div className="space-y-4">
                                <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-slate-900 rounded-xl font-black text-lg flex items-center justify-center gap-2 transition-colors">
                                    <PhoneCall className="w-5 h-5" /> Call +16183607978
                                </button>
                                <button className="w-full py-4 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl font-bold transition-colors">
                                    Find Nearest Hospital/Clinic
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section >

                {/* ðŸŒ 6ï¸ âƒ£ ACCESSIBILITY & RURAL SUPPORT */}
                < section className="py-24 px-6 w-full flex justify-center bg-[white]/30" >
                    <div className="max-w-6xl w-full">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-10 rounded-3xl bg-[white] border border-slate-100">
                                <PlusCircle className="w-12 h-12 text-[#1447E6] mb-6" />
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">For Frontline Health Workers</h3>
                                <ul className="space-y-3 text-slate-500 font-medium text-sm">
                                    <li>â€¢ Symptom Entry</li>
                                    <li>â€¢ AI Triage</li>
                                    <li>â€¢ Referral Assistance</li>
                                </ul>
                            </div>
                            <div className="p-10 rounded-3xl bg-[white] border border-slate-100">
                                <WifiOff className="w-12 h-12 text-[#1447E6] mb-6" />
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Offline Support for Remote Areas</h3>
                                <ul className="space-y-3 text-slate-500 font-medium text-sm">
                                    <li>â€¢ Works without internet</li>
                                    <li>â€¢ Local sync</li>
                                    <li>â€¢ Lightweight architecture</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-center mt-12 text-lg font-bold text-slate-500 italic">Bridging healthcare gaps across urban and rural regions.</p>
                    </div>
                </section >

                {/* ðŸ”„ 7ï¸ âƒ£ HOW IT WORKS */}
                < section className="py-24 px-6 w-full max-w-6xl" >
                    <h2 className="text-2xl font-black text-center mb-16 uppercase tracking-widest text-[#1447E6]">The Workflow</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {[
                            { n: "1", t: "Enter Symptoms", i: <FileText /> },
                            { n: "2", t: "AI Risk Analysis", i: <Zap /> },
                            { n: "3", t: "Severity Classification", i: <Activity /> },
                            { n: "4", t: "Doctor Recommendation", i: <UserCheck /> },
                            { n: "5", t: "Emergency Detection", i: <AlertTriangle /> }
                        ].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-[white] border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-[#1447E6] group-hover:text-[white] group-hover:border-[#1447E6] transition-all mb-6 shadow-lg">
                                    {step.i}
                                </div>
                                <h4 className="text-xs font-black text-slate-500 mb-2 uppercase tracking-tighter">Step {step.n}</h4>
                                <p className="text-slate-900 font-bold leading-tight text-sm">{step.t}</p>
                            </div>
                        ))}
                    </div>
                </section >

                {/* ðŸ“ˆ 8ï¸ âƒ£ IMPACT SECTION */}
                < section className="py-24 px-6 w-full text-center flex justify-center bg-[white]/30" >
                    <div className="max-w-4xl w-full space-y-12">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Designed to Reduce Delay Between Symptoms and Action</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { t: "Faster Risk Identification", i: <Zap /> },
                                { t: "Smarter Care Navigation", i: <MapPin /> },
                                { t: "Reduced Panic", i: <Heart /> },
                                { t: "Better Referral Accuracy", i: <UserCheck /> }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4 flex flex-col items-center">
                                    <div className="text-[#1447E6] w-12 h-12 rounded-full bg-[#1447E6]/10 flex items-center justify-center">{item.i}</div>
                                    <p className="font-bold text-slate-600 leading-tight text-sm">{item.t}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg font-bold text-[#1447E6] italic">Because in healthcare, delay can cost lives.</p>
                    </div>
                </section >

                {/* ðŸ§© 9ï¸ âƒ£ END-TO-END INTEGRATIONS */}
                < section className="py-24 px-6 w-full max-w-6xl" >
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {[
                            "Symptom Smart Forms", "Voice Input", "Image Upload",
                            "Doctor Network", "Smart AI Recommendations", "Health History", "PDF Medical Report"
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-[white] border border-slate-100 rounded-xl text-center flex flex-col items-center justify-center gap-3 hover:border-[#1447E6]/30 transition-colors">
                                <PlusCircle className="w-5 h-5 text-[#1447E6]/50" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                </section >

                {/* ðŸš€ ðŸ”Ÿ CALL TO ACTION */}
                <section className="py-32 px-6 w-full flex justify-center">
                    <motion.div
                        whileInView={{ scale: [0.95, 1] }}
                        className="max-w-5xl w-full bg-gradient-to-b from-[white] to-[white] border border-[#1447E6]/20 rounded-[3rem] p-12 lg:p-20 text-center shadow-[0_0_50px_rgba(5,213,133,0.1)] relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#1447E6]/10 blur-[120px] rounded-full pointer-events-none"></div>
                        <h2 className="text-3xl lg:text-5xl font-black mb-10 text-slate-900 relative z-10">Take Control of Health Decisions Today</h2>
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-[#1447E6] text-[white] px-10 py-5 rounded-full font-extrabold text-lg hover:scale-105 transition-transform relative z-10 shadow-2xl flex items-center gap-3 mx-auto"
                        >
                            Start Free Diagnosis <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="mt-8 font-bold text-[#1447E6] bg-[#1447E6]/10 inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest relative z-10">
                            Not a replacement for doctors â€” a companion for informed action.
                        </p>
                    </motion.div>
                </section>
            </main>

            {/* ðŸ¦¶ 11ï¸ âƒ£ FOOTER */}
            < footer className="w-full py-16 px-6 bg-[white] border-t border-slate-100 flex justify-center" >
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 grayscale opacity-80">
                            <Activity className="text-[#1447E6] w-6 h-6" />
                            <span className="text-slate-900 font-bold text-xl tracking-tighter">Kenkoo AI</span>
                        </div>
                        <p className="text-slate-500 font-medium text-sm">Empowering Early Health Decisions with world-class medical intelligence.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h5 className="font-black text-slate-600 uppercase tracking-widest text-xs">Product</h5>
                            <ul className="space-y-2 text-slate-500 font-medium text-sm">
                                <li className="hover:text-[#1447E6] cursor-pointer transition-colors">Diagnosis</li>
                                <li className="hover:text-[#1447E6] cursor-pointer transition-colors">Emergency Mode</li>
                                <li className="hover:text-[#1447E6] cursor-pointer transition-colors">Health Insights</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h5 className="font-black text-slate-600 uppercase tracking-widest text-xs">Company</h5>
                            <ul className="space-y-2 text-slate-500 font-medium text-sm">
                                <li className="hover:text-[#1447E6] cursor-pointer transition-colors">About</li>
                                <li className="hover:text-[#1447E6] cursor-pointer transition-colors">Privacy Policy</li>
                                <li className="hover:text-[#1447E6] cursor-pointer transition-colors">Terms</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h5 className="font-black text-slate-600 uppercase tracking-widest text-xs">Contact</h5>
                        <p className="text-[#1447E6] font-bold text-sm">support@kenkooai.com</p>
                        <p className="text-slate-600 text-[10px] mt-8 font-bold uppercase tracking-widest">Â© 2026 Kenkoo AI â€“ Empowering Early Health Decisions</p>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default HomePage;


