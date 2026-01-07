
import React from 'react';

export type ConceptId = 'clean-tech' | 'fluid-gradient' | 'minimal-corporate' | 'bento-grid' | 'neon-professional';

export interface LandingConcept {
  id: ConceptId;
  name: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  // Added React import to resolve line 13 error
  icon: React.ReactNode;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}