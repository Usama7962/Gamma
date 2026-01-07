
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant?: 'outline' | 'flat' | 'elevated';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, variant = 'elevated' }) => {
  const styles = {
    elevated: "bg-white dark:bg-slate-900/40 p-14 rounded-[4rem] border border-slate-200/50 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700 group relative overflow-hidden",
    outline: "bg-transparent p-14 rounded-[4rem] border-2 border-slate-200 dark:border-white/10 hover:border-gammaBlue hover:bg-white dark:hover:bg-white/5 transition-all duration-700 group",
    flat: "bg-slate-50 dark:bg-white/5 p-14 rounded-[4rem] border border-transparent hover:border-slate-200 dark:hover:border-white/10 hover:bg-white dark:hover:bg-slate-900 transition-all duration-700 group"
  };

  return (
    <div className={styles[variant]}>
      {/* Dynamic Background Highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-gammaBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="w-24 h-24 bg-gammaBlue/5 dark:bg-gammaBlue/10 rounded-[2.5rem] flex items-center justify-center mb-12 text-gammaBlue group-hover:bg-gammaBlue group-hover:text-white group-hover:scale-110 transition-all duration-700 shadow-sm border border-gammaBlue/10">
          {React.cloneElement(icon as React.ReactElement<any>, { className: "w-10 h-10" })}
        </div>
        
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter uppercase font-roboto leading-tight">
          {title}
        </h3>
        
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg font-medium font-inter mb-10">
          {description}
        </p>
        
        <motion.div 
          className="inline-flex items-center gap-3 text-gammaBlue font-black text-[11px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 font-inter"
        >
          Detailed Specifications <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </div>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

export default FeatureCard;
