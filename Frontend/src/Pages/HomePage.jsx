import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#1447E6]/30 overflow-x-hidden">

      {/* 🦸 2️⃣ HERO SECTION */}
      <section className="pt-24 lg:pt-32 pb-24 px-6 relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1447E6]/5 skew-x-12 -z-10 translate-x-20" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden" animate="visible" variants={stagger}
            className="space-y-8"
          >
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-extrabold text-blue-900 leading-[1.1] tracking-tight">
              AI-Powered First Response <br />
              <span className="text-[#1447E6]">Health Companion</span>
            </motion.h1>

            
            <motion.p variants={fadeIn} className="text-xl text-slate-600 max-w-lg leading-relaxed border-l-4 border-[#1447E6] pl-5">
              LifeLine AI analyzes symptoms, detects emergencies, suggests the right medical action, and connects users to nearby care — instantly.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-6">
              <button className="flex items-center gap-2 bg-[#1447E6] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[#1447E6]/30 transition-all group">
                Start Smart Diagnosis <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl font-bold text-lg border-2 border-slate-200 text-slate-700 hover:border-[#1447E6] hover:text-[#1447E6] bg-white transition-all">
                Learn How It Works
              </button>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-6 text-sm font-bold text-slate-700 pt-4">
              <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100"><CheckCircle2 className="w-4 h-4 text-[#1447E6]" /> Early Risk Detection</span>
              <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100"><CheckCircle2 className="w-4 h-4 text-[#1447E6]" /> Golden Hour Alerts</span>
              <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100"><CheckCircle2 className="w-4 h-4 text-[#1447E6]" /> Doctor Recommendations</span>
              <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100"><CheckCircle2 className="w-4 h-4 text-[#1447E6]" /> Multilingual Support</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative group"
>
  {/* Outer Glow Effect - Modified to use your Brand Blue #1447E6 */}
  <div className="absolute -inset-1 bg-gradient-to-r from-[#1447E6]/30 to-cyan-400/30 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-80 group-hover:blur-2xl transition duration-1000"></div>
  
  <div className="relative bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 aspect-square flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(20,71,230,0.1)]">
    
    {/* Internal Animated Border Design */}
    <div className="w-full h-full border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center relative bg-slate-50/50">
      
      {/* Background Pulse Circle */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute w-64 h-64 bg-[#1447E6] rounded-full blur-3xl -z-10"
      />

      {/* Main Heartbeat Icon */}
      <Activity className="w-32 h-32 text-[#1447E6] animate-pulse drop-shadow-[0_0_15px_rgba(20,71,230,0.3)]" />
      
      {/* UI Elements for "Intelligence" Feel */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
        <div className="space-y-1">
          <div className="h-1 w-12 bg-[#1447E6] rounded-full" />
          <div className="h-1 w-8 bg-slate-300 rounded-full" />
        </div>
        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
          Pulse_Monitor_V2
        </div>
      </div>
    </div>

    {/* Decorative Floating Dots */}
    <motion.div 
      animate={{ y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="absolute top-10 right-10 w-3 h-3 bg-cyan-400 rounded-full blur-[2px]"
    />
    <motion.div 
      animate={{ y: [0, 20, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-10 left-10 w-2 h-2 bg-[#1447E6] rounded-full blur-[1px]"
    />
  </div>
</motion.div>
        </div>
      </section>

      {/* 🧠 3️⃣ QUICK ACTION CARDS */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Stethoscope />, title: "Enter Symptoms", desc: "AI analyzes patient condition instantly", color: "text-[#1447E6]" },
            { icon: <AlertTriangle />, title: "Emergency Risk Check", desc: "Detect time-sensitive critical cases", color: "text-[#1447E6]" },
            { icon: <BarChart3 />, title: "View Health Insights", desc: "Track severity trends & reports", color: "text-[#1447E6]" }
          ].map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 ${card.color} group-hover:bg-[#1447E6] group-hover:text-white transition-colors`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-slate-500 font-medium">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🤖 4️⃣ AI TRIAGE PREVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white border-2 border-slate-100 rounded-[2rem] p-10 shadow-2xl relative"
          >
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
               <h4 className="font-bold text-slate-900">Likely Conditions</h4>
               <span className="text-xs font-black uppercase tracking-widest text-[#1447E6]">STIE Analysis</span>
            </div>
            <div className="space-y-6">
              {[
                { label: "Acute Bronchitis", risk: "Moderate", val: 55, color: "bg-orange-400" },
                { label: "Pneumonia", risk: "High Risk", val: 74, color: "bg-red-500" },
                { label: "Viral Fever", risk: "Low", val: 20, color: "bg-green-500" }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between font-bold text-sm">
                    <span>{item.label} — {item.risk}</span>
                    <span className="text-slate-400">{item.val}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.val}%` }} transition={{ duration: 1 }} className={`h-full ${item.color}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-5 bg-[#1447E6]/5 border-l-4 border-[#1447E6] rounded-r-xl">
               <p className="text-sm font-bold text-slate-700">Risk Level: 74% — High</p>
               <p className="text-sm text-slate-500 mt-1">Suggested Action: Refer to Pulmonologist</p>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-slate-900">AI-Powered Smart <br /> Triage Engine</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our Smart Triage Intelligence Engine (STIE) evaluates symptoms using structured AI reasoning and medical severity classification.
            </p>
            <p className="text-lg font-semibold text-[#1447E6]">It doesn’t just guess conditions — it prioritizes risk.</p>
          </div>
        </div>
      </section>

      {/* 🚨 5️⃣ EMERGENCY INTELLIGENCE */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[100px]" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-white">Golden Hour Emergency Detection</h2>
            <p className="text-lg text-slate-300">Kenkoo AI identifies stroke, cardiac events, severe infections, and other time-sensitive conditions.</p>
            <div className="space-y-4">
              {['Triggers Emergency Alert', 'Displays Nearest Hospitals', 'Shows Ambulance Numbers', 'Recommends Immediate Action'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="font-bold text-slate-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ rotate: -5 }}
            whileInView={{ rotate: 0 }}
            className="bg-white p-8 rounded-3xl border-4 border-red-500/50 shadow-[0_0_50px_rgba(239,68,68,0.3)]"
          >
            <div className="flex items-center gap-4 text-red-600 mb-6 animate-pulse">
              <AlertTriangle className="w-10 h-10" />
              <h3 className="text-2xl font-black">CRITICAL ALERT</h3>
            </div>
            <p className="text-slate-900 font-bold text-lg mb-4">Cardiac Pattern Detected</p>
            <div className="space-y-3">
              <button className="w-full py-4 bg-red-600 text-white rounded-xl font-black text-lg flex items-center justify-center gap-2">
                <PhoneCall className="w-5 h-5" /> Call 911 / EMS
              </button>
              <button className="w-full py-4 border-2 border-slate-200 text-slate-900 rounded-xl font-bold">Find Nearest ER</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🌍 6️⃣ ACCESSIBILITY & RURAL SUPPORT */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100">
              <PlusCircle className="w-12 h-12 text-[#1447E6] mb-6" />
              <h3 className="text-2xl font-bold mb-4">For Frontline Health Workers</h3>
              <ul className="space-y-3 text-slate-600 font-medium">
                <li>• Symptom Entry</li>
                <li>• AI Triage</li>
                <li>• Referral Assistance</li>
              </ul>
            </div>
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100">
              <WifiOff className="w-12 h-12 text-[#1447E6] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Offline Support for Remote Areas</h3>
              <ul className="space-y-3 text-slate-600 font-medium">
                <li>• Works without internet</li>
                <li>• Local sync</li>
                <li>• Lightweight architecture</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-12 text-lg font-bold text-slate-400 italic">Bridging healthcare gaps across urban and rural regions.</p>
        </div>
      </section>

      {/* 🔄 7️⃣ HOW IT WORKS */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest text-[#1447E6]">The Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { n: "1", t: "Enter Symptoms", i: <FileText /> },
              { n: "2", t: "AI Risk Analysis", i: <Zap /> },
              { n: "3", t: "Severity Classification", i: <Activity /> },
              { n: "4", t: "Doctor Recommendation", i: <UserCheck /> },
              { n: "5", t: "Emergency Detection", i: <AlertTriangle /> }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center text-[#1447E6] shadow-sm group-hover:bg-[#1447E6] group-hover:text-white group-hover:border-[#1447E6] transition-all mb-4">
                  {step.i}
                </div>
                <h4 className="text-sm font-black text-slate-400 mb-1 uppercase tracking-tighter">Step {step.n}</h4>
                <p className="text-slate-900 font-bold leading-tight">{step.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📈 8️⃣ IMPACT SECTION */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl font-extrabold text-slate-900">Designed to Reduce Delay Between Symptoms and Action</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { t: "Faster Risk Identification", i: <Zap /> },
              { t: "Smarter Care Navigation", i: <MapPin /> },
              { t: "Reduced Panic", i: <Heart /> },
              { t: "Better Referral Accuracy", i: <UserCheck /> }
            ].map((item, i) => (
              <div key={i} className="space-y-3 flex flex-col items-center">
                <div className="text-[#1447E6]">{item.i}</div>
                <p className="font-bold text-slate-800 leading-tight">{item.t}</p>
              </div>
            ))}
          </div>
          <p className="text-xl font-bold text-[#1447E6] italic">Because in healthcare, delay can cost lives.</p>
        </div>
      </section>

      {/* 🧩 9️⃣ END-TO-END INTEGRATIONS */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              "Symptom Smart Forms", "Voice Input", "Image Upload (Optional)", 
              "Doctor Network", "Smart AI Recommendations", "Health History Tracking", "PDF Medical Report"
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl text-center flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <PlusCircle className="w-5 h-5 text-[#1447E6]/40" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 🔟 CALL TO ACTION */}
      <section className="py-32 px-6">
        <motion.div 
          whileInView={{ scale: [0.95, 1] }}
          className="max-w-5xl mx-auto bg-[#1447E6] rounded-[3rem] p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Take Control of Health Decisions Today</h2>
          <button className="bg-white text-[#1447E6] px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform relative z-10 shadow-2xl">
            Start Free Diagnosis
          </button>
          <p className="mt-8 font-bold text-[#1447E6]/20 bg-white/10 inline-block px-4 py-1 rounded-full text-xs uppercase tracking-widest relative z-10 text-white">
            Not a replacement for doctors — a companion for informed action.
          </p>
        </motion.div>
      </section>

      {/* 🦶 11️⃣ FOOTER */}
      <footer className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Shield className="w-7 h-7 text-[#1447E6]" />
              <span className="text-2xl font-black tracking-tighter">Kenkoo AI</span>
            </div>
            <p className="text-slate-400 font-medium">Empowering Early Health Decisions with world-class medical intelligence.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Product</h5>
              <ul className="space-y-2 text-slate-500 font-bold text-sm">
                <li>Diagnosis</li>
                <li>Emergency Mode</li>
                <li>Health Insights</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Company</h5>
              <ul className="space-y-2 text-slate-500 font-bold text-sm">
                <li>About</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
             <h5 className="font-black text-slate-900 uppercase tracking-widest text-xs">Contact</h5>
             <p className="text-slate-500 font-bold text-sm">support@Kenkooai.com</p>
             <p className="text-slate-400 text-xs mt-10 font-bold uppercase tracking-widest">© 2026 Kenkoo AI – Empowering Early Health Decisions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;