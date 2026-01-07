
import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Settings2, 
  BarChart3, 
  LayoutDashboard, 
  Headphones, 
  Coins, 
  ShieldAlert, 
  FileJson,
  Users
} from 'lucide-react';
import { Feature, Stat } from './types';

export const FEATURES: Feature[] = [
  {
    title: "Ready-To-Launch Solutions",
    description: "Launch your social casino in as little as 4-6 weeks with our fully compliant, pre-built gaming platform.",
    icon: <Zap className="w-6 h-6 text-gammaBlue" />
  },
  {
    title: "On-Demand Customization",
    description: "Tailor every pixel to your brand. Custom mechanics, API integrations, and white-label options.",
    icon: <Settings2 className="w-6 h-6 text-gammaBlue" />
  },
  {
    title: "Legal & Compliance",
    description: "Navigate global regulations with our dedicated risk management and licensing assistance teams.",
    icon: <ShieldCheck className="w-6 h-6 text-gammaBlue" />
  },
  {
    title: "24/7 Ongoing Support",
    description: "Continuous monitoring, performance optimization, and technical maintenance for peak uptime.",
    icon: <Headphones className="w-6 h-6 text-gammaBlue" />
  },
  {
    title: "Admin Dashboard",
    description: "Powerful real-time analytics and player management tools to optimize your revenue flow.",
    icon: <LayoutDashboard className="w-6 h-6 text-gammaBlue" />
  },
  {
    title: "Anti-Fraud Systems",
    description: "Advanced fraud detection with machine learning algorithms protecting every transaction.",
    icon: <ShieldAlert className="w-6 h-6 text-gammaBlue" />
  }
];

export const STATS: Stat[] = [
  { label: "Games Available", value: "3,000", suffix: "+" },
  { label: "Active Providers", value: "50", suffix: "+" },
  { label: "Successful Deployments", value: "20", suffix: "+" },
  { label: "Years Experience", value: "13", suffix: "+" }
];

export const PARTNERS = [
  "TechCorp Gaming", "PlayMax Studios", "GrowthVentures", "SecurePlay", "RapidLaunch"
];
