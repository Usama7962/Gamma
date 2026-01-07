
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  <button 
    onClick={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
    className="flex items-center cursor-pointer group select-none transition-transform hover:scale-[0.98]"
  >
    <div className="flex items-center gap-1 italic font-black text-2xl md:text-3xl tracking-tighter font-roboto">
      <span className="text-slate-900 dark:text-white uppercase font-black">Gamma</span>
      <span className="text-gammaAqua uppercase font-black">Sweep</span>
      <TriangleIcon className="text-slate-900 dark:text-white ml-0.5" />
    </div>
  </button>
);

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Features', id: 'features' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled || isMenuOpen
          ? 'bg-white/95 dark:bg-darkBg/95 backdrop-blur-xl border-slate-200 dark:border-white/10 py-0 shadow-lg' 
          : 'bg-transparent border-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          <Logo />
          
          <div className="hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400 font-inter">
            {navLinks.map(link => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.id)}
                className="hover:text-gammaBlue dark:hover:text-white transition-all relative group py-2"
              >
                {link.name}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-gammaBlue transition-all group-hover:w-full" 
                  initial={false}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-gammaBlue hover:text-white transition-all border border-slate-200 dark:border-white/10"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            
            <button 
              onClick={() => handleNavClick('contact')}
              className="hidden sm:flex bg-gammaBlue text-white text-[10px] md:text-[11px] font-black px-6 md:px-8 h-10 md:h-12 items-center rounded-xl hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-950 transition-all shadow-xl shadow-gammaBlue/20 uppercase tracking-[0.25em] whitespace-nowrap font-inter"
            >
              Get Started
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-900 dark:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-darkBg border-b border-slate-200 dark:border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-xl font-black text-slate-900 dark:text-white uppercase tracking-widest font-roboto py-2 border-b border-slate-100 dark:border-white/5"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-gammaBlue text-white text-center font-black py-4 rounded-xl uppercase tracking-widest font-inter"
              >
                Book Discovery
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
