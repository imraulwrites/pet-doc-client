import Image from 'next/image';
import Hero from '@/public/images/hero-img.jpg';
import { BsStack, BsStar } from 'react-icons/bs';
import {
  FaArrowLeft,
  FaAward,
  FaClock,
  FaHospital,
  FaLocationDot,
  FaLocationPin,
  FaStar,
} from 'react-icons/fa6';
import Link from 'next/link';
import BookingModal from '../ui/BookingModal';

export default function Details() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh]">
      {/* Link Back to all doctors */}
      <p className="flex items-center mb-5">
        <Link
          href="/all-appointments"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <FaArrowLeft />
          Back to all doctors
        </Link>
      </p>

      <div className="flex flex-col md:flex-row gap-12  items-center justify-center ">
        {/* Doctors Image Card */}
        <div className="overflow-hidden border border-border rounded-3xl md:flex-2/5">
          {/* Doctors Image */}
          <div>
            <Image
              src={Hero}
              alt="doctor"
              className="w-full aspect-square object-cover object-center"
            />
          </div>
          <div className="p-6">
            <p className="flex items-center gap-2 text-foreground text-sm font-semibold">
              <span>
                <FaStar className="text-primary" size="1.1rem" />
              </span>
              4.9 (218 reviews)
            </p>
            <h4 className="mt-5 font-bold text-2xl font-display">$800</h4>
            <p className="text-xs mt-1">Consultaion fee</p>
          </div>
        </div>

        {/* Doctors Details */}
        <div className="md:flex-3/5">
          <p className="px-3 py-1 bg-secondary w-fit rounded-3xl text-xs font-semibold">
            Cardiologist
          </p>

          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3">Dr. Samir</h1>
          <p className="text-muted-foreground text-md mt-4 leading-relaxed">
            Highly experienced cardiologist specializing in heart diseases, preventive care, and
            patient-centered treatment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-8">
            <div className="bg-card border border-border shadow-md p-5 rounded-2xl">
              <div className="flex gap-3">
                <div className="w-11 h-11 bg-accent text-accent-foreground rounded-xl flex items-center justify-center">
                  <FaAward className="text-accent-foreground" size="1.1rem" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Experience</p>
                  <p className="text-sm font-bold mt-1">10 Years</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border shadow-md p-5 rounded-2xl">
              <div className="flex gap-3">
                <div className="w-11 h-11 bg-accent text-accent-foreground rounded-xl flex items-center justify-center">
                  <FaHospital className="text-accent-foreground" size="1.1rem" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Hospital</p>
                  <p className="text-sm font-bold mt-1">Labaid Cardiac Hospital</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border shadow-md p-5 rounded-2xl">
              <div className="flex gap-3">
                <div className="w-11 h-11 bg-accent text-accent-foreground rounded-xl flex items-center justify-center">
                  <FaLocationDot className="text-accent-foreground" size="1.1rem" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Location</p>
                  <p className="text-sm font-bold mt-1">Dhanmondi, Dhaka</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border shadow-md p-5 rounded-2xl">
              <div className="flex gap-3">
                <div className="h-11 w-11 bg-accent text-accent-foreground rounded-xl flex  items-center justify-center">
                  <FaClock className="text-accent-foreground" size="1rem" />
                </div>
                <div className="">
                  <p className="text-muted-foreground text-xs">Available</p>
                  <p className="text-sm font-bold mt-1 ">
                    09:00 AM - 12:00 PM
                    <br /> 04:00 PM - 07:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div>
              <BookingModal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
