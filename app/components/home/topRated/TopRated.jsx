import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import DoctorsCard from '../../ui/DoctorsCard';
// import DoctorsCard from './DoctorsCard';

export default function TopRated() {
  return (
    <section className="bg-grain">
      <div className="flex flex-col gap-4   justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div>
          <p className="text-primary text-sm font-semibold uppercase tracking-wide">Top Rated</p>
          <h2 className="text-foreground text-3xl md:text-4xl mt-2 font-bold">
            Doctors patients love
          </h2>
          <p className="text-muted-foreground mt-2 max-w-md">
            Hand-picked specialists with the highest satisfaction scores from real patient reviews.
          </p>

          <div className="text-primary hover:underline mt-2">
            <Link href="/" className="flex gap-1 items-center">
              See all doctors{' '}
              <span>
                <FaArrowRight size="0.6rem" className="text-base font-normal" />
              </span>{' '}
            </Link>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3">
          <li>
            <DoctorsCard />
          </li>
        </ul>
      </div>
    </section>
  );
}
