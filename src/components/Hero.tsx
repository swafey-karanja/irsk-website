"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section
      className="relative min-h-screen w-full text-white overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image-1.jpg"
          alt="International Relations Society of Kenya - A forum for exchange of ideas and networking"
          fill
          className={`object-cover transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          priority
          quality={85}
          sizes="100vw"
          onLoad={handleImageLoad}
        />

        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-pulse" />
        )}
      </div>

      {/* Gradient Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />

      {/* Additional overlay for mobile readability */}
      <div className="absolute inset-0 bg-black/20 sm:bg-black/10 z-10" />

      {/* Navbar over hero */}
      <header className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </header>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center">
        <div
          className={`px-4 md:px-6 lg:px-14 xl:px-18 max-w-7xl mx-auto w-full transition-all duration-1000 ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main Content Container */}
          <div className="max-w-4xl">
            {/* Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 lg:mb-8">
              <span className="block">A forum for the exchange of ideas,</span>
              <span className="block mt-2 lg:mt-3">
                networking and programmatic initiatives.
              </span>
            </h1>

            {/* Subtext for better context (optional enhancement) */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 lg:mb-10 max-w-3xl leading-relaxed font-light">
              International Relations Society of Kenya
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                className="group relative border-2 border-orange-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-orange-400 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-orange-400/25 focus:outline-none focus:ring-4 focus:ring-orange-400/50 focus:bg-orange-400 focus:text-white active:scale-95"
                type="button"
                aria-label="Learn more about International Relations Society of Kenya"
              >
                <span className="relative z-10">Learn More about IRSK</span>

                {/* Button background animation */}
                <div className="absolute inset-0 bg-orange-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
              </button>

              {/* Secondary CTA (optional enhancement) */}
              <button
                className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30 active:scale-95"
                type="button"
                aria-label="Explore our programs and initiatives"
              >
                <span className="relative z-10">Explore Programs</span>
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
            <div className="flex flex-col items-center animate-bounce">
              <span className="text-sm font-medium mb-2 text-gray-300">
                Scroll to explore
              </span>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse hidden lg:block" />
    </section>
  );
}
