"use client";

import Image from "next/image";
import { useState } from "react";

interface Speaker {
  id: number;
  name: string;
  title: string;
  image: string;
}

export default function Speakers() {
  // Sample speakers data - in a real application, this would likely come from an API or database
  const [speakers] = useState<Speaker[]>([
    {
      id: 1,
      name: "AMIR BEN YAHMED",
      title: "Chief Executive Officer, Jeune Afrique Media Group",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "MAKHTAR DIOP",
      title: "Managing Director, IFC",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "H.E. AZIZ AKHANNOUCH",
      title: "Head of Government, Morocco",
      image:
        "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "JEREMY AWORI",
      title: "Group CEO, Ecobank",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "PHILIPPE LABONNE",
      title: "President, Africa Global Logistics",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      name: "CLARE AKAMANZI",
      title: "CEO, NBA Africa",
      image:
        "https://images.unsplash.com/photo-1536896407451-6e3dd976edd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 7,
      name: "AIGBOJE AIG-IMOUKHUEDE",
      title: "Access Holdings",
      image:
        "https://images.unsplash.com/photo-1531901599143-df5010ab9438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 8,
      name: "TONNY BAO",
      title: "Vice President, Huawei",
      image:
        "https://images.unsplash.com/photo-1559172802-f5de3d1ed91d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 9,
      name: "SOREN TOFT",
      title: "Chief Executive Officer, MSC MEDITERRANEAN SHIPPING COMPANY",
      image:
        "https://images.unsplash.com/photo-1566165335512-bb5ba58365b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 10,
      name: "SAMAILA ZUBAIRU",
      title:
        "President and Chief Executive Officer, Africa Finance Corporation",
      image:
        "https://images.unsplash.com/photo-1581257856116-7cae1a9fee60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww",
    },
  ]);

  return (
    <section className="container mx-auto px-4 pt-2 pb-12 max-w-7xl">
      {/* Header with blue line accent */}
      <header className="text-center mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-blue-600 mb-4">
          Featured Speakers
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
      </header>

      {/* Speakers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-6 lg:gap-8">
        {speakers.map((speaker) => (
          <article
            key={speaker.id}
            className="group relative overflow-hidden rounded-xl shadow-lg bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 focus-within:shadow-2xl focus-within:-translate-y-2"
            tabIndex={0}
            role="button"
            aria-label={`Learn more about ${speaker.name}`}
          >
            {/* Speaker Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={speaker.image}
                alt={`Portrait of ${speaker.name}`}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110 group-focus-within:scale-110"
                width={300}
                height={400}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                priority={speaker.id <= 5} // Prioritize loading first 5 images
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kl5zj5A4tguANzI5dKpQO4Ov8kVIoV2Nsg6OPj1MhHLPVLWJRRQiWu5Fy4Aq5jKgfaHJCLvckVJAXZKgRzKbIoK4/9k="
              />

              {/* Gradient Overlay with Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="text-white font-semibold text-md text-center mb-1 leading-tight">
                    {speaker.name}
                  </h3>
                  <p className="text-white/90 text-xs text-center leading-snug line-clamp-2">
                    {speaker.title}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View All Speakers Button */}
      <div className="text-center mt-12 sm:mt-16">
        <button
          className="bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-700 text-white text-sm sm:text-base font-medium py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 transform hover:-translate-y-0.5 active:translate-y-0"
          aria-label="View all speakers"
        >
          View All Speakers
        </button>
      </div>
    </section>
  );
}
