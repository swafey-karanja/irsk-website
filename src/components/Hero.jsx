"use client"

import Image from 'next/image';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section className="relative h-screen w-full text-white">
      {/* Background Image */}
      <Image
        src="/images/image-1.jpg" // path relative to public/
        alt="BRICS Hero Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Navbar over hero */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-20 max-w-5xl ml-50">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          A forum for the exchange of ideas, <br />
          networking and programmatic initiatives.  
        </h1>
        <button className="border border-orange-400 px-6 py-2 rounded-full hover:bg-orange-400 text-white transition duration-500 cursor-pointer">
          Learn More about IRSK
        </button>
      </div>
    </section>
  );
}
