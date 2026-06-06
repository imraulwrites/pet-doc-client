import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import DoctorsCard from '../ui/DoctorsCard';

export default function AllAppointments() {
  return (
    <section>
      <div className="flex flex-col gap-10 justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col gap-3">
          <p className="uppercase text-primary text-sm tracking-wider font-semibold">
            All appointments
          </p>
          <h1 className="text-4xl font-bold font-display">Find the right doctor for you</h1>
          <p className="text-muted-foreground max-w-xl">
            Search by doctor name, specialty, or hospital. Sort by rating or fee.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Button */}

            <div className="relative md:w-3/4">
              <span className="absolute top-1/3 pl-5">
                <FaMagnifyingGlass className="text-muted-foreground text-sm" />
              </span>
              <input
                type="text"
                name="search"
                className="bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none w-full rounded-2xl px-12 py-3 text-sm tracking-wide"
                placeholder="Search doctor name, e.g Samir"
              />
            </div>

            {/* Sort Button */}
            <div className="md:w-1/4">
              <select
                name="sort"
                className="w-full bg-card border border-border px-5 py-3 rounded-2xl text-sm font-semibold"
              >
                <option value="top" defaultValue="top">
                  Sort: Top Rated
                </option>
                <option value="price-asc">Sort: Fee - low to high</option>
                <option value="price-desc">Sort: Fee - high to low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <DoctorsCard />
        </div>
      </div>
    </section>
  );
}
