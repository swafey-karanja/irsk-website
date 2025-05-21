"use client"

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
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww" 
    },
    {
      id: 2,
      name: "MAKHTAR DIOP",
      title: "Managing Director, IFC",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"
    },
    {
      id: 3,
      name: "H.E. AZIZ AKHANNOUCH",
      title: "Head of Government, Morocco",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 4,
      name: "JEREMY AWORI",
      title: "Group CEO, Ecobank",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 5,
      name: "PHILIPPE LABONNE",
      title: "President, Africa Global Logistics",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 6,
      name: "CLARE AKAMANZI",
      title: "CEO, NBA Africa",
      image: "https://images.unsplash.com/photo-1536896407451-6e3dd976edd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxwZW9wbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 7,
      name: "AIGBOJE AIG-IMOUKHUEDE",
      title: "Access Holdings",
      image: "https://images.unsplash.com/photo-1531901599143-df5010ab9438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
    {
      id: 8,
      name: "TONNY BAO",
      title: "Vice President, Huawei",
      image: "https://images.unsplash.com/photo-1559172802-f5de3d1ed91d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
    {
      id: 9,
      name: "SOREN TOFT",
      title: "Chief Executive Officer, MSC MEDITERRANEAN SHIPPING COMPANY",
      image: "https://images.unsplash.com/photo-1566165335512-bb5ba58365b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
    {
      id: 10,
      name: "SAMAILA ZUBAIRU",
      title: "President and Chief Executive Officer, Africa Finance Corporation",
      image: "https://images.unsplash.com/photo-1581257856116-7cae1a9fee60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww"
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header with blue line accent */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
          Featured Speakers
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        <p className="mt-6 text-md text-black max-w-2xl mx-auto font-sans">
          Meet our distinguished speakers and industry leaders who will be sharing their insights and expertise.
        </p>
      </div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            {/* Speaker Image */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image 
                src={speaker.image} 
                alt={speaker.name} 
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                width={200}
                height={300}
              />
              {/* Dark Overlay with Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-white font-semibold text-md text-center">
                  {speaker.name}
                </h3>
                <p className="text-white/80 text-xs mt-1 text-center">
                  {speaker.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Speakers Button (Optional) */}
      <div className="text-center mt-12">
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center">
          View All Speakers
        </button>
      </div>
    </div>
  );
}