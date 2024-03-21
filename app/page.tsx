// pages/home.tsx
'use client';

import React from 'react';
import Navbar from './../components/nav';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}
