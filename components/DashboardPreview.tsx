
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Jan', value: 3200 },
  { name: 'Feb', value: 4500 },
  { name: 'Mar', value: 4100 },
  { name: 'Apr', value: 6200 },
  { name: 'May', value: 5800 },
  { name: 'Jun', value: 8900 },
  { name: 'Jul', value: 9500 },
];

const DashboardPreview: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-[0_20px_50px_rgba(72,91,255,0.1)] border border-slate-100 dark:border-white/5 overflow-hidden w-full max-w-4xl mx-auto animate-float transition-colors">
      {/* OS Header */}
      <div className="bg-slate-50/50 dark:bg-white/5 border-b border-slate-100 dark:border-white/5 px-8 py-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
          <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
          <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
        </div>
        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Live Analytics Engine</div>
        <div className="w-6 h-6 rounded-full bg-gammaBlue/10 flex items-center justify-center">
           <div className="w-2 h-2 rounded-full bg-gammaBlue animate-pulse" />
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-5 rounded-2xl bg-gammaBlue/[0.03] dark:bg-gammaBlue/5 border border-gammaBlue/10">
            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase mb-2">Sweepstakes Staked</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">$2.4M</div>
            <div className="text-xs text-gammaBlue font-bold mt-1">↑ 12.4%</div>
          </div>
          <div className="p-5 rounded-2xl bg-gammaAqua/[0.03] dark:bg-gammaAqua/5 border border-gammaAqua/10">
            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase mb-2">Active Users</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">12,842</div>
            <div className="text-xs text-emerald-500 font-bold mt-1">Real-time</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase mb-2">Net Revenue</div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">$482K</div>
            <div className="text-xs text-slate-400 font-bold mt-1">This month</div>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#485BFF" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#485BFF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="currentColor" className="text-slate-100 dark:text-slate-800" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} 
                dy={10}
              />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 10px 25px rgba(0,0,0,0.05)', 
                  fontWeight: 'bold',
                  backgroundColor: '#0f172a',
                  color: '#fff'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#485BFF" 
                strokeWidth={4} 
                fillOpacity={1} 
                fill="url(#chartGradient)" 
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
