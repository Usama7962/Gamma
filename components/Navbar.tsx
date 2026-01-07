
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const TriangleIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 3l16 9-16 9z" />
  </svg>
);

const Logo = () => (
  <div className="flex items-center cursor-pointer group select-none" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
    {/* Large Screen: GAMMA SWEEP > */}
    <div className="hidden lg:flex items-center gap-1 italic font-black text-3xl tracking-tighter font-roboto">
      <span className="text-slate-900 dark:text-white uppercase font-black">Gamma</span>
      <span className="text-gammaAqua uppercase font-black">Sweep</span>
      <TriangleIcon className="text-slate-900 dark:text-white ml-0.5" />
    </div>

    {/* Medium Screen: GAMMA / SWEEP > */}
    <div className="hidden md:flex lg:hidden flex-col italic font-black text-xl leading-[0.8] tracking-tighter font-roboto">
      <span className="text-slate-900 dark:text-white uppercase font-black">Gamma</span>
      <div className="flex items-center gap-1 self-end translate-x-4">
        <span className="text-gammaAqua uppercase font-black">Sweep</span>
        <TriangleIcon className="text-slate-900 dark:text-white w-3 h-3" />
      </div>
    </div>

    {/* Small Screen: GS > */}
    <div className="flex md:hidden items-center gap-0.5 italic font-black text-2xl tracking-tighter font-roboto">
      <span className="text-slate-900 dark:text-white uppercase font-black">G</span>
      <span className="text-gammaAqua uppercase font-black">s</span>
      <TriangleIcon className="text-slate-900 dark:text-white w-4 h-4" />
    </div>
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-white/90 dark:bg-darkBg/90 backdrop-blur-xl border-slate-200 dark:border-white/10 py-0 shadow-sm' 
          : 'bg-transparent border-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <Logo />
          
          {/* Nav Links - Centered */}
          <div className="hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400 font-inter">
            {['services', 'about', 'features', 'contact'].map(link => (
              <a 
                key={link} 
                href={`#${link}`} 
                className="hover:text-gammaBlue dark:hover:text-white transition-all relative group py-2"
              >
                {link}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-gammaBlue transition-all group-hover:w-full" 
                  initial={false}
                />
              </a>
            ))}
          </div>

          {/* Action Section */}
          <div className="flex items-center gap-6">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-gammaBlue hover:text-white transition-all border border-slate-200 dark:border-white/10"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            
            <motion.a 
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="bg-gammaBlue text-white text-[11px] font-black px-8 h-12 flex items-center rounded-xl hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-950 transition-all shadow-xl shadow-gammaBlue/20 uppercase tracking-[0.25em] whitespace-nowrap font-inter"
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
