import Image from 'next/image';
import React from 'react';
import Hero from '@/public/images/hero-img.jpg';
import { BsCalendarCheck, BsClock } from 'react-icons/bs';

export default function MyBookingCard() {
  return (
    <div className="flex gap-3 border border-border p-5 rounded-3xl">
      <div className="flex-1/5 md:flex-1/10   overflow-hidden">
        <Image src={Hero} alt="hero" className="w-36 md:w-40  aspect-square object-cover object-center rounded-2xl" />
      </div>

      <div className="flex-4/5 md:flex-9/10 p-2">
        <div className="flex justify-between mb-1">
          <h3 className="font-medium">Dr. Saif Mahmud</h3>
          <p className="font-medium text-sm">$900</p>
        </div>
        <p className="text-xs mb-3">Gastroenterologist · Popular Diagnostic Centre</p>
        <div className="text-xs flex gap-5">
          <div className="flex gap-1">
            <BsCalendarCheck />
            <span>2026-06-18</span>
          </div>
          <div className="flex gap-1">
            <BsClock />
            <span>05:00 PM - 09:00 PM</span>
          </div>
          <div className="flex gap-1">Patient:</div>
          {/* Mobile No. */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
