import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <section className="bg-grain">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12  items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}
