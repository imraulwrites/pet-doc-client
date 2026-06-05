import React from 'react';
import { BiCalendarCheck } from 'react-icons/bi';
import { BsClipboard2Check, BsHeartPulse } from 'react-icons/bs';

export default function Steps() {
  return (
    <section className="">
      <div className="bg-grain flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          <p className="text-primary uppercase text-sm font-semibold tracking-wider">
            How it works
          </p>
          <h2 className="text-foreground text-3xl font-bold pt-2">
            Three quiet steps to your visit
          </h2>
        </div>

        {/* 3 Steps Card Container */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 3 steps Card */}
          <div className="bg-card shadow-sm p-6 rounded-3xl border border-border">
            <div className="bg-primary w-fit p-3.5 mt-2 rounded-2xl">
              <BsHeartPulse className="text-primary-foreground" size="1.2rem" />
            </div>
            <div>
              <h3 className="font-display font-medium text-lg pt-5">1. Discover</h3>
              <p className="text-muted-foreground text-sm font-medium py-2">
                Browse specialists by hospital, rating, and availability.
              </p>
            </div>
          </div>

          <div className="bg-card shadow-sm p-6 rounded-3xl border border-border">
            <div className="bg-primary w-fit p-3.5 mt-2 rounded-2xl">
              <BiCalendarCheck className="text-primary-foreground" size="1.2rem" />
            </div>
            <div>
              <h3 className="font-display font-medium text-lg pt-5">2. Book</h3>
              <p className="text-muted-foreground text-sm font-medium py-2">
                Browse specialists by hospital, rating, and availability.
              </p>
            </div>
          </div>

          <div className="bg-card shadow-sm p-6 rounded-3xl border border-border">
            <div className="bg-primary w-fit p-3.5 mt-2 rounded-2xl">
              <BsClipboard2Check className="text-primary-foreground" size="1.2rem" />
            </div>
            <div>
              <h3 className="font-display font-medium text-lg pt-5">3. Visit</h3>
              <p className="text-muted-foreground text-sm font-medium py-2">
                Get reminders, manage bookings, and reschedule anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
