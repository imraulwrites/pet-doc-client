import React from 'react';
import { BsStars } from 'react-icons/bs';

export default function HeroContent() {
  return (
    <div>
      <div className="inline-flex items-center gap-1 bg-secondary px-3 py-1 rounded-full">
        <BsStars size="1.2em" className="text-primary" />
        <p className="text-xs font-semibold">Calm healthcare, on your terms</p>
      </div>

      <div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mt-5">
          Find your doctor. <br /> <span className="text-primary">Breathe easier.</span>
        </h1>
      </div>

      <div className="">
        <p className="text-muted-foreground text-lg max-w-md mt-5">
          DocAppoint helps you book trusted specialists across Dhaka without the back-and-forth.
          Browse, compare, and reserve in under a minute.
        </p>
      </div>
    </div>
  );
}
