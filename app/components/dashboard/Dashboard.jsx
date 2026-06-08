import React from 'react';
import { BiCalendarCheck } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa6';
import MyBookingCard from '../ui/MyBookingCard';

export default function Dashboard() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh]">
        <p className="text-primary uppercase tracking-wide text-sm font-semibold mb-3">Dashboard</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">Your Care, Organized.</h1>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1/5 flex md:flex-col gap-1 p-2 border border-border rounded-2xl text-sm">
            <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-primary text-primary-foreground tracking-wide">
              <span>
                <BiCalendarCheck />
              </span>
              <span className="font-bold">My Bookings</span>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-2xl">
              <span>
                <FaUser />
              </span>
              <span className="font-bold">My Profile</span>
            </div>
          </div>
          <div className="flex-4/5 py-1">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-display font-bold text-xl">My Bookings</h3>

              <p className="text-primary text-sm font-bold hover:underline cursor-pointer ">
                + Book New
              </p>
            </div>

            <MyBookingCard />
          </div>
        </div>
      </div>
    </section>
  );
}
