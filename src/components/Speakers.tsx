"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

export interface Speaker {
  id: number;
  name: string;
  title: string;
  image: string;
}

interface SpeakersProps {
  sectionTitle?: string;
  buttonLabel?: string;
  speakersData?: Speaker[];
}

export default function Speakers({
  sectionTitle = "Our Committee",
  buttonLabel = "View All Speakers",
  speakersData,
}: SpeakersProps) {
  const [speakers] = useState<Speaker[]>(
    speakersData || [
      {
        id: 1,
        name: "AMIR BEN YAHMED",
        title: "Chief Executive Officer, Jeune Afrique Media Group",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 2,
        name: "MAKHTAR DIOP",
        title: "Managing Director, IFC",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 3,
        name: "H.E. AZIZ AKHANNOUCH",
        title: "Head of Government, Morocco",
        image:
          "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 4,
        name: "JEREMY AWORI",
        title: "Group CEO, Ecobank",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 5,
        name: "PHILIPPE LABONNE",
        title: "President, Africa Global Logistics",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 6,
        name: "CLARE AKAMANZI",
        title: "CEO, NBA Africa",
        image:
          "https://images.unsplash.com/photo-1536896407451-6e3dd976edd1?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 7,
        name: "AIGBOJE AIG-IMOUKHUEDE",
        title: "Access Holdings",
        image:
          "https://images.unsplash.com/photo-1531901599143-df5010ab9438?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 8,
        name: "TONNY BAO",
        title: "Vice President, Huawei",
        image:
          "https://images.unsplash.com/photo-1559172802-f5de3d1ed91d?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 9,
        name: "SOREN TOFT",
        title: "CEO, MSC MEDITERRANEAN SHIPPING COMPANY",
        image:
          "https://images.unsplash.com/photo-1566165335512-bb5ba58365b4?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 10,
        name: "SAMAILA ZUBAIRU",
        title: "CEO, Africa Finance Corporation",
        image:
          "https://images.unsplash.com/photo-1581257856116-7cae1a9fee60?w=500&auto=format&fit=crop&q=60",
      },
    ]
  );

  return (
    <section className="container mx-auto px-4 pt-2 pb-12 max-w-7xl">
      <SectionHeader title={sectionTitle} />

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-6 lg:gap-8">
        {speakers.map((speaker) => (
          <article
            key={speaker.id}
            className="group relative overflow-hidden rounded-xl shadow-lg bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 focus-within:shadow-2xl focus-within:-translate-y-2"
            tabIndex={0}
            role="button"
            aria-label={`Learn more about ${speaker.name}`}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={speaker.image}
                alt={`Portrait of ${speaker.name}`}
                className="h-full w-full object-cover object-center"
                width={300}
                height={400}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                priority={speaker.id <= 5}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
              />

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

      {buttonLabel && (
        <div className="text-center mt-12 sm:mt-16">
          <button
            className="bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-700 text-white text-sm sm:text-base font-medium py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 transform hover:-translate-y-0.5 active:translate-y-0"
            aria-label={buttonLabel}
          >
            {buttonLabel}
          </button>
        </div>
      )}
    </section>
  );
}
