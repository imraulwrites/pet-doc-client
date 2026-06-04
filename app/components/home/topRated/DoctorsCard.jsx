import Image from 'next/image';
import Hero from '@/public/images/hero-img.jpg';
import { FaLocationDot } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa';
export default function DoctorsCard() {
  return (
    <div className="overflow-hidden rounded-3xl flex flex-col border border-border shadow-md">
      <div className=" overflow-hidden ">
        <Image
          src={Hero}
          alt="doctor1"
          className="w-full max-h-96 md:max-h-64 object-cover object-center"
        />
      </div>

      <div className="flex flex-col p-5 border-b border-border">
        <h3 className="font-semibold">Dr. Ayesha Rahman</h3>
        <p className="text-xs mt-1">10 years experience · 218 reviews</p>
        <p className="text-xs mt-1 flex gap-1 items-center">
          <span>
            <FaLocationDot className="text-muted-foreground" />
          </span>
          Labaid Cardiac Hospital, Dhanmondi, Dhaka
        </p>
        <p className="text-xs mt-1 flex gap-1 items-center">
          <span>
            <FaClock className="text-muted-foreground" />
          </span>
          09:00 AM - 12:00 PM
        </p>
      </div>

      <div className="inline-flex justify-between p-5">
        <div>
          <p className="text-foreground font-extrabold">$800</p>
        </div>
        <div className="bg-foreground text-background px-3 py-2 text-xs rounded-3xl">
          View Details
        </div>
      </div>
    </div>
  );
}
