import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function AllAppointments() {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:gap-14 justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col gap-3">
          <p className="uppercase text-primary text-sm tracking-wider font-semibold">
            All appointments
          </p>
          <h1 className="text-4xl font-bold font-display">Find the right doctor for you</h1>
          <p className="text-muted-foreground max-w-xl">
            Search by doctor name, specialty, or hospital. Sort by rating or fee.
          </p>

          {/* Search Button */}
          <div className="relative">
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
          <div>
            <select
              name="sort"
              className="w-full bg-card border border-border px-5 py-3 rounded-2xl text-sm font-semibold"
            >
              <option value="top" selected>
                Sort: Top Rated
              </option>
              <option value="price-asc">Sort: Fee - low to high</option>
              <option value="price-desc">Sort: Fee - high to low</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
