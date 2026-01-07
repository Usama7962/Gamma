
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import DashboardPreview from './components/DashboardPreview';
import FeatureCard from './components/FeatureCard';
import { FEATURES, PARTNERS } from './constants';
import { Sparkles, Shield, Globe, Cpu, ChevronDown } from 'lucide-react';

const TriangleIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 3l16 9-16 9z" />
  </svg>
);

const Logo = () => (
  <div className="flex items-center cursor-pointer group select-none" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
    {/* Large Screen: GAMMA SWEEP > */}
    <div className="hidden lg:flex items-center gap-1 italic font-black text-3xl tracking-tighter">
      <span className="text-slate-900 dark:text-white uppercase font-black">Gamma</span>
      <span className="text-gammaAqua uppercase font-black">Sweep</span>
      <TriangleIcon className="text-slate-900 dark:text-white ml-0.5" />
    </div>

    {/* Medium Screen: GAMMA / SWEEP > */}
    <div className="hidden md:flex lg:hidden flex-col italic font-black text-xl leading-[0.8] tracking-tighter">
      <span className="text-slate-900 dark:text-white uppercase font-black">Gamma</span>
      <div className="flex items-center gap-1 self-end translate-x-4">
        <span className="text-gammaAqua uppercase font-black">Sweep</span>
        <TriangleIcon className="text-slate-900 dark:text-white w-3 h-3" />
      </div>
    </div>

    {/* Small Screen: GS > */}
    <div className="flex md:hidden items-center gap-0.5 italic font-black text-2xl tracking-tighter">
      <span className="text-slate-900 dark:text-white uppercase font-black">G</span>
      <span className="text-gammaAqua uppercase font-black">s</span>
      <TriangleIcon className="text-slate-900 dark:text-white w-4 h-4" />
    </div>
  </div>
);

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-darkBg transition-colors duration-500 overflow-hidden font-inter">
      
      {/* Dynamic Background Mesh Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gammaBlue/5 dark:bg-gammaBlue/10 blur-[150px] rounded-full animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gammaAqua/5 dark:bg-gammaAqua/10 blur-[150px] rounded-full animate-blob [animation-delay:3s]" />
      </div>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main className="relative z-10 grid-pattern">
        
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-32">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gammaBlue/5 dark:bg-gammaBlue/10 rounded-full text-gammaBlue font-bold text-[11px] uppercase tracking-[0.25em] mb-10 border border-gammaBlue/10 backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Scalable Gaming Engine
              </motion.div>
              
              <h1 className="text-6xl md:text-[92px] font-black text-slate-900 dark:text-white leading-[0.9] mb-10 tracking-tighter heading-xl font-roboto">
                Scale Your <br /> 
                <span className="text-shimmer italic">Social Empire.</span>
              </h1>
              
              <p className="text-2xl text-slate-500 dark:text-slate-400 mb-14 max-w-xl leading-relaxed font-normal">
                High-performance B2B sweepstakes infrastructure. Engineered for founders who demand institutional-grade reliability and 100% compliance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.a 
                  whileHover={{ scale: 1.02, translateY: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact" 
                  className="bg-gammaBlue text-white font-bold px-12 py-5 rounded-xl shadow-2xl shadow-gammaBlue/20 transition-all text-lg tracking-wide text-center uppercase"
                >
                  Book Discovery
                </motion.a>
                <motion.button 
                  whileHover={{ backgroundColor: "rgba(15, 23, 42, 0.05)", translateY: -2 }}
                  className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold px-12 py-5 rounded-xl transition-all text-lg tracking-wide uppercase"
                >
                  View Technology
                </motion.button>
              </div>

              <div className="mt-20 flex items-center gap-14">
                {[
                  { label: "Partner Operators", val: "50+" },
                  { label: "Launch Speed", val: "4wks" },
                  { label: "Uptime SLA", val: "99.9%" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl font-black text-slate-900 dark:text-white leading-none font-roboto">{item.val}</span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-3 font-inter">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
              className="relative hidden lg:block"
            >
               <div className="absolute -inset-10 bg-gradient-to-br from-gammaBlue/10 to-gammaAqua/10 blur-[120px] rounded-full opacity-50" />
               <DashboardPreview />
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300 cursor-pointer hover:text-gammaBlue transition-colors"
            onClick={() => document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </section>

        {/* Brand Recognition Strip */}
        <section id="partners" className="py-24 bg-white/40 dark:bg-darkSurface/20 backdrop-blur-xl border-y border-slate-100 dark:border-white/5 relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6">
              <p className="text-center text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em] mb-16">Institutional Partnerships Across the Globe</p>
              <div className="flex flex-wrap justify-center lg:justify-between items-center gap-20">
                 {PARTNERS.map((p, i) => (
                   <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    key={p} 
                    className="text-2xl font-black tracking-tighter text-slate-400/60 dark:text-slate-600/60 hover:text-gammaBlue dark:hover:text-gammaAqua transition-all cursor-default uppercase font-roboto"
                   >
                     {p}
                   </motion.span>
                 ))}
              </div>
           </div>
        </section>

        {/* Feature Story Section */}
        <section id="services" className="py-40 scroll-mt-20">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-32 items-center">
                 <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                 >
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-10 leading-[1.05] tracking-tighter font-roboto">
                       SaaS DNA. <br /><span className="text-gammaBlue">Enterprise Reliability.</span>
                    </h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400 mb-16 max-w-xl font-medium leading-relaxed font-inter">
                       The social casino market demands perfection. GammaSweep provides the modular backbone to build, scale, and secure your platform with zero compromise on quality.
                    </p>
                    <div className="space-y-12">
                       {[
                         { title: "Native Compliance Engine", icon: <Globe />, desc: "Regulatory logic baked into the core. Launch in US and international markets with built-in sweepstakes management." },
                         { title: "Decoupled Architecture", icon: <Cpu />, desc: "Complete API control. Integrate any third-party provider or build custom UI skins on top of our hardened gaming core." },
                         { title: "Risk Safeguard Layer", icon: <Shield />, desc: "Advanced player monitoring and fraud prevention. Protect your ecosystem with enterprise-grade security protocols." }
                       ].map((item, i) => (
                         <motion.div 
                          key={i} 
                          whileHover={{ x: 10 }}
                          className="flex gap-8 group cursor-default"
                         >
                            <div className="w-20 h-20 shrink-0 rounded-[2rem] bg-gammaBlue/5 dark:bg-gammaBlue/10 flex items-center justify-center text-gammaBlue group-hover:bg-gammaBlue group-hover:text-white transition-all duration-500 shadow-sm border border-gammaBlue/10">
                               {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                            </div>
                            <div className="flex-1 pt-1">
                               <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight font-roboto uppercase">{item.title}</h4>
                               <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-lg font-inter">{item.desc}</p>
                            </div>
                         </motion.div>
                       ))}
                    </div>
                 </motion.div>

                 <div className="grid grid-cols-2 gap-8" id="about">
                    {[
                      { val: "99.9%", label: "Uptime SLA", color: "bg-white dark:bg-darkSurface", delay: 0 },
                      { val: "24/7", label: "Monitoring", color: "bg-gammaBlue text-white", delay: 0.1, featured: true },
                      { val: "4wks", label: "To Market", color: "bg-gammaAqua text-slate-900", delay: 0.2 },
                      { val: "13y", label: "Core Experience", color: "bg-slate-50 dark:bg-slate-800", delay: 0.3 }
                    ].map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: item.delay, duration: 0.5 }}
                        viewport={{ once: true }}
                        key={i} 
                        className={`aspect-square ${item.color} rounded-[3.5rem] p-12 flex flex-col justify-end border border-slate-200/50 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-700 group ${i % 2 !== 0 ? 'mt-16' : ''}`}
                      >
                         <div className={`text-6xl font-black mb-4 tracking-tighter font-roboto ${item.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{item.val}</div>
                         <div className={`text-[12px] font-black uppercase tracking-[0.3em] font-inter ${item.featured ? 'text-blue-100' : 'text-slate-400'}`}>{item.label}</div>
                      </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Technical Features Grid */}
        <section id="features" className="py-40 bg-slate-50/50 dark:bg-darkSurface/10 scroll-mt-20">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-32">
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="text-gammaBlue font-black text-[12px] uppercase tracking-[0.5em] mb-6 font-inter"
                 >
                    Advanced Modules
                 </motion.div>
                 <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-none font-roboto"
                 >
                    Technical Mastery.
                 </motion.h2>
                 <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-medium font-inter"
                 >
                    Our infrastructure handles the complexity so you can focus on user acquisition and brand growth.
                 </motion.p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                 {FEATURES.map((f, i) => (
                   <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    key={i}
                   >
                    <FeatureCard 
                      title={f.title} 
                      description={f.description} 
                      icon={f.icon} 
                      variant="elevated"
                    />
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Closing CTA */}
        <section id="contact" className="py-48 scroll-mt-20">
           <div className="max-w-7xl mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="bg-slate-950 dark:bg-slate-900 rounded-[5rem] p-20 md:p-32 relative overflow-hidden text-center shadow-[0_50px_100px_-20px_rgba(72,91,255,0.25)] border border-white/5"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-gammaBlue/30 via-transparent to-gammaAqua/20 opacity-40" />
                 
                 <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-6xl md:text-[110px] font-black text-white mb-14 tracking-tighter leading-[0.9] font-roboto">
                       Build Your <br /><span className="text-shimmer italic">Digital Legacy.</span>
                    </h2>
                    <p className="text-2xl text-slate-300 mb-20 font-medium leading-relaxed font-inter opacity-90">
                       Partner with GammaSweep to deploy the most sophisticated B2B social gaming business model available today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                       <motion.button 
                        whileHover={{ scale: 1.05, translateY: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto bg-gammaBlue text-white font-black px-20 py-8 rounded-2xl hover:bg-white hover:text-slate-950 transition-all text-2xl shadow-3xl shadow-gammaBlue/40 uppercase tracking-widest font-roboto"
                       >
                          Get Started
                       </motion.button>
                       <motion.button 
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", translateY: -3 }}
                        className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-black px-20 py-8 rounded-2xl transition-all text-2xl uppercase tracking-widest font-roboto"
                       >
                          Contact Sales
                       </motion.button>
                    </div>
                 </div>
              </motion.div>
           </div>
        </section>
      </main>

      <footer className="pt-48 pb-24 bg-white dark:bg-darkBg relative z-10 border-t border-slate-100 dark:border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-24 mb-32">
               <div className="col-span-1 md:col-span-1">
                  <div className="mb-12 group">
                    <Logo />
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs font-medium text-lg font-inter">
                    Institutional-grade infrastructure for professional B2B social gaming operators.
                  </p>
               </div>
               <div>
                  <h4 className="font-black text-slate-900 dark:text-white mb-12 uppercase text-[12px] tracking-[0.4em] font-roboto">Platform</h4>
                  <ul className="space-y-6 text-slate-500 dark:text-slate-400 font-bold text-sm font-inter">
                     <li><a href="#hero" className="hover:text-gammaBlue transition-colors uppercase tracking-widest">Core Engine</a></li>
                     <li><a href="#features" className="hover:text-gammaBlue transition-colors uppercase tracking-widest">Compliance API</a></li>
                     <li><a href="#features" className="hover:text-gammaBlue transition-colors uppercase tracking-widest">Game Library</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-black text-slate-900 dark:text-white mb-12 uppercase text-[12px] tracking-[0.4em] font-roboto">Resources</h4>
                  <ul className="space-y-6 text-slate-500 dark:text-slate-400 font-bold text-sm font-inter">
                     <li><a href="#" className="hover:text-gammaBlue transition-colors uppercase tracking-widest">Documentation</a></li>
                     <li><a href="#" className="hover:text-gammaBlue transition-colors uppercase tracking-widest">Market Insights</a></li>
                     <li><a href="#" className="hover:text-gammaBlue transition-colors uppercase tracking-widest">Compliance Hub</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-black text-slate-900 dark:text-white mb-12 uppercase text-[12px] tracking-[0.4em] font-roboto">Contact</h4>
                  <ul className="space-y-6 text-slate-500 dark:text-slate-400 font-bold text-sm font-inter">
                     <li className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm">partnership@gammasweep.com</li>
                     <li className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-slate-400">HQ: London, UK</li>
                  </ul>
               </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-20 border-t border-slate-100 dark:border-white/5 text-[11px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] font-inter">
               <div>© 2024 GammaSweep. Built for Performance.</div>
               <div className="flex gap-14">
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Service Terms</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
