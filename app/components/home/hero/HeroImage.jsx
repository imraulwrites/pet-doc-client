import Image from 'next/image';
import Hero from '@/public/images/hero-img.jpg';

export default function HeroImage() {
  return (
    <div className="rounded-2xl border overflow-hidden ">
      <Image src={Hero} alt="hero-image" />
    </div>
  );
}
