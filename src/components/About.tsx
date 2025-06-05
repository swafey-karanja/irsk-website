"use client";

import Image from "next/image";
import { memo } from "react";

// Memoized section components for better performance
const SectionHeader = memo(({ title }: { title: string }) => (
  <h2 className="border-l-4 border-blue-500 pl-4 text-lg sm:text-xl lg:text-2xl font-bold text-blue-500 mb-6 lg:mb-8 transition-colors duration-200 hover:text-blue-600">
    {title}
  </h2>
));
SectionHeader.displayName = "SectionHeader";

const DecorativeImage = memo(
  ({
    src,
    alt,
    priority = false,
  }: {
    src: string;
    alt: string;
    priority?: boolean;
  }) => (
    <div className="relative group">
      {/* Decorative background elements with improved positioning */}
      <div className="absolute w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-orange-400 -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 -z-10  rounded-sm"></div>
      <div className="absolute w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-blue-500 -top-4 -right-4 sm:-top-6 sm:-right-6 -z-10  rounded-sm"></div>

      {/* Main image with optimized loading */}
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
          width={500}
          height={375}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          priority={priority}
          quality={85}
        />
      </div>
    </div>
  )
);
DecorativeImage.displayName = "DecorativeImage";

const CoreValue = memo(
  ({ title, description }: { title: string; description: string }) => (
    <div className="rounded-lg">
      <p className="text-sm sm:text-sm text-gray-800 leading-relaxed">
        <strong className="text-blue-600 font-semibold">{title}:</strong>{" "}
        <span className="text-gray-700">{description}</span>
      </p>
    </div>
  )
);
CoreValue.displayName = "CoreValue";

export default function About() {
  return (
    <main className="min-h-screen" id="about-section">
      <div className="container mx-auto px-4 py-2 max-w-7xl">
        {/* Header with improved spacing and animation */}
        <header className="text-center mb-8">
          <h2
            id="about-section-title"
            className="text-xl sm:text-2xl lg:text-4xl font-bold text-blue-600 mb-4"
          >
            About IRSK
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </header>

        {/* Who We Are Section */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:w-1/2 space-y-6">
              <SectionHeader title="Who we are" />
              <div className="prose prose-gray max-w-none">
                <p className="text-sm  lg:text-sm text-gray-700 leading-relaxed font-sans">
                  The International Relations Society of Kenya (IRSK) serves as
                  a forum for exchanging ideas, networking and programmatic
                  initiatives among those involved in the study, teaching and
                  practice of international relations and diplomacy. In
                  fulfilling our primary role as the hub for international
                  relations and diplomacy professionals, we work to promote
                  interest in the field, develop expertise and understanding of
                  global issues, connect the IRSK community, and support our
                  membership in fulfilling their ambitions. To this end, the
                  Society is committed to nurturing new generations of
                  global-minded leaders and supporting initiatives geared
                  towards making the world a more peaceful, safe and prosperous
                  place.
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:w-1/2 px-3">
              <DecorativeImage
                src="/images/image-10.jpg"
                alt="IRSK Building - Professional meeting space"
                priority={true}
              />
            </div>
          </div>
        </section>

        {/* Our Vision Section - Reversed Layout */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:w-1/2 space-y-6">
              <SectionHeader title="Our Vision" />
              <div className="prose prose-gray max-w-none">
                <p className="text-sm  lg:text-sm text-gray-700 leading-relaxed font-sans">
                  A vibrant professional body that is a trusted interlocutor on
                  international relations and diplomacy issues in Kenya and
                  beyond.
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:w-1/2 px-3">
              <DecorativeImage
                src="/images/image-7.jpg"
                alt="City Skyline - Vision for international relations"
              />
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:w-1/2 space-y-6">
              <SectionHeader title="Our Mission" />
              <div className="prose prose-gray max-w-none">
                <p className="text-sm  lg:text-sm text-gray-700 leading-relaxed font-sans">
                  IRSK&apos;s mission is to serve as a policy-neutral platform
                  through which a community of international relations and
                  diplomacy practitioners, experts and scholars will be actively
                  involved in continuous learning, engagement and knowledge
                  sharing.
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:w-1/2 px-3">
              <DecorativeImage
                src="/images/image-8.jpg"
                alt="IRSK Mission - Professional collaboration and learning"
              />
            </div>
          </div>
        </section>

        {/* Our Core Values Section - Reversed Layout */}
        <section className="mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:w-1/2 space-y-6">
              <SectionHeader title="Our core values" />
              <div className="space-y-3">
                <CoreValue
                  title="Neutrality"
                  description="Policy neutral, non-partisan approach"
                />
                <CoreValue
                  title="Inclusiveness"
                  description="Foster and promote broad and diverse membership"
                />
                <CoreValue
                  title="Professionalism"
                  description="Promote professional excellence and competence"
                />
                <CoreValue
                  title="Integrity"
                  description="Uphold high standards of personal integrity"
                />
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:w-1/2 px-3">
              <DecorativeImage
                src="/images/image-9.jpg"
                alt="Core Values - Professional integrity and excellence"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
