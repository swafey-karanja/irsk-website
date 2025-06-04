"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header with blue line accent similar to the provided design */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
          About IRSK
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>

      {/* Who We Are Section - Two Column Layout */}
      <div className="flex flex-col lg:flex-row mb-24 items-center">
        {/* Left Column with Content and orange Circle Accent */}
        <div className="lg:w-1/2 relative mb-8 lg:mb-0">
          <h2 className="border-l-4 border-blue-500 pl-4 text-4xl font-bold text-blue-500 mb-8">
            Who we are
          </h2>
          <p className="text-md text-black max-w-lg font-sans">
            The International Relations Society of Kenya (IRSK) serves as a
            forum for exchanging ideas, networking and programmatic initiatives
            among those involved in the study, teaching and practice of
            international relations and diplomacy.In fulfilling our primary role
            as the hub for international relations and diplomacy professionals,
            we work to promote interest in the field, develop expertise and
            understanding of global issues, connect the IRSK community, and
            support our membership in fulfilling their ambitions.To this end,
            the Society is committed to nurturing new generations of
            global-minded leaders and supporting initiatives geared towards
            making the world a more peaceful, safe and prosperous place.
          </p>
        </div>

        {/* Right Column with Image and Blue Circle Accent */}
        <div className="lg:w-1/2 relative">
          <div className="absolute w-32 h-32 bg-orange-400 -bottom-6 -left-6 -z-10"></div>
          <div className="absolute w-32 h-32 bg-blue-500 -top-6 -right-6 -z-10"></div>
          <Image
            src="/images/image-10.jpg"
            alt="IRSK Building"
            className="w-full rounded-sm "
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Our Services Section - Two Column Layout in Reverse */}
      <div className="flex flex-col lg:flex-row-reverse mb-16 items-center">
        {/* Right Column with Content and blue Accent */}
        <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
          <div className="border-l-4 border-blue-500 pl-4 mb-6">
            <h2 className="text-4xl font-bold text-blue-500">Our Vission</h2>
          </div>
          <p className="text-md text-black font-sans">
            A vibrant professional body that is a trusted interlocutor on
            international relations and diplomacy issues in Kenya and beyond.
          </p>
        </div>

        {/* Left Column with Image and orange Accent */}
        <div className="lg:w-1/2 relative">
          <div className="absolute w-32 h-32 bg-orange-400 -bottom-6 -left-6 -z-10"></div>
          <div className="absolute w-32 h-32 bg-blue-500 -top-6 -right-6 -z-10"></div>
          <Image
            src="/images/image-7.jpg"
            alt="City Skyline"
            className="w-full rounded-sm "
            width={400}
            height={300}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mb-24 items-center">
        {/* Left Column with Content and orange Circle Accent */}
        <div className="lg:w-1/2 relative mb-8 lg:mb-0">
          <h2 className="border-l-4 border-blue-500 pl-4 text-4xl font-bold text-blue-500 mb-8">
            Our Mission
          </h2>
          <p className="text-md text-black max-w-lg font-sans">
            IRSK&apos;s mission is to serve as a policy-neutral platform through
            which a community of international relations and diplomacy
            practitioners, experts and scholars will be actively involved in
            continuous learning, engagement and knowledge sharing.
          </p>
        </div>

        {/* Right Column with Image and Blue Circle Accent */}
        <div className="lg:w-1/2 relative">
          <div className="absolute w-32 h-32 bg-orange-400 -bottom-6 -left-6 -z-10"></div>
          <div className="absolute w-32 h-32 bg-blue-500 -top-6 -right-6 -z-10"></div>
          <Image
            src="/images/image-8.jpg"
            alt="IRSK Building"
            className="w-full rounded-sm "
            width={400}
            height={300}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse mb-8 items-center">
        {/* Right Column with Content and blue Accent */}
        <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
          <div className="border-l-4 border-blue-500 pl-4 mb-6">
            <h2 className="text-4xl font-bold text-blue-500">
              Our core values
            </h2>
          </div>
          <p className="text-md font-sans text-black">
            <strong>Neutrality:</strong> Policy neutral, non-partisan approach
          </p>
          <p className="text-md font-sans text-black">
            <strong> Inclusiveness:</strong> Foster and promote broad and
            diverse membership.
          </p>
          <p className="text-md font-sans text-black">
            <strong>Professionalism:</strong> Promote professional excellence
            and competence
          </p>
          <p className="text-md font-sans text-black">
            <strong>Integrity:</strong> Uphold high standards of personal
            integrity
          </p>
        </div>

        {/* Left Column with Image and orange Accent */}
        <div className="lg:w-1/2 relative">
          <div className="absolute w-32 h-32 bg-orange-400 -bottom-6 -left-6 -z-10"></div>
          <div className="absolute w-32 h-32 bg-blue-500 -top-6 -right-6 -z-10"></div>
          <Image
            src="/images/image-9.jpg"
            alt="City Skyline"
            className="w-full rounded-sm"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
