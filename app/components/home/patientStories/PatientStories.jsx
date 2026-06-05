import Image from 'next/image';
import Hero from '@/public/images/hero-img.jpg';

export default function PatientStories() {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:gap-14 justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="md:flex-1">
          <Image
            src={Hero}
            alt="doctor4"
            className="max-h-96  object-center object-cover rounded-3xl"
          />
        </div>
        <div className='md:flex-1'>
          <div className="flex flex-col mt-12 gap-5">
            <p className="uppercase text-primary text-sm font-bold tracking-wider">
              patient stories
            </p>
            <h2 className="font-display text-3xl font-bold">
              “It felt like a friend booked it for me.”
            </h2>
            <p className="text-muted-foreground max-w-md text-base leading-relaxed">
              I had been putting off seeing a cardiologist for months. DocAppoint made it feel calm
              and simple — I found Dr. Rahman, picked a slot, and was done in 90 seconds.
            </p>
          </div>

          <div className="py-10 flex gap-5 items-center">
            <div className="relative w-20 h-20 rounded-full p-2 overflow-hidden">
              <Image src={Hero} alt="profile" fill className=" object-cover object-center" />
            </div>
            <div>
              <p className="text-base font-bold">Sadia Khan</p>
              <p className="text-muted-foreground text-xs">Booked a cardiology visit</p>
            </div>
          </div>
        </div>{' '}
      </div>
    </section>
  );
}
