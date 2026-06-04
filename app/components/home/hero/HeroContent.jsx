import Link from 'next/link';
import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { BsStar, BsStars } from 'react-icons/bs';
import { FaArrowRight, FaStar } from 'react-icons/fa';

export default function HeroContent() {
  return (
    <div>
      <div className="inline-flex items-center gap-1 bg-secondary px-3 py-1 rounded-full">
        <BsStars size="1.2em" className="text-primary" />
        <p className="text-xs font-semibold">Calm healthcare, on your terms</p>
      </div>

      {/* Main Heading */}
      <div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mt-5">
          Find your doctor. <br /> <span className="text-primary">Breathe easier.</span>
        </h1>
      </div>

      {/* Description */}
      <div className="">
        <p className="text-muted-foreground text-lg max-w-md mt-5">
          DocAppoint helps you book trusted specialists across Dhaka without the back-and-forth.
          Browse, compare, and reserve in under a minute.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="inline-flex flex-wrap mt-6 gap-3">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 transition text-primary-foreground font-semibold rounded-2xl">
          <Link href="./">Browse appointments</Link>{' '}
          <span>
            <FaArrowRight size={12} />
          </span>
        </div>
        <div className="inline-flex items-center px-6 py-3 bg-card hover:bg-secondary rounded-2xl font-semibold transition border border-border">
          <Link href="/">Create account</Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-10 flex gap-4">
        <div className="pr-4 border-r">
          <h2 className="text-2xl font-display font-bold text-primary">240+</h2>
          <p className="text-muted-foreground text-sm ">verified doctors</p>
        </div>

        <div className="pr-4 border-r">
          <h2 className="text-2xl font-display font-bold text-primary">15k</h2>
          <p className="text-muted-foreground text-sm ">happy patients</p>
        </div>

        <div className="">
          <h2 className="text-2xl font-display font-bold text-primary inline-flex items-center">
            4.5{' '}
            <span>
              <FaStar size="1rem" />
            </span>
          </h2>
          <p className="text-muted-foreground text-sm ">avg rating</p>
        </div>
      </div>
    </div>
  );
}
