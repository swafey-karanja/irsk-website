/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

interface NewsComponentProps {
  newsItems?: NewsItem[];
  onViewAll?: () => void;
}

const defaultNewsItems: NewsItem[] = [
  {
    id: "1",
    date: "March 26, 2025",
    title: "Community Safety Initiative Launches to Reduce Crime",
    description:
      "The police department has launched a new community safety initiative aimed at reducing crime through increased patrols and neighborhood collaboration.",
    imageUrl:
      "https://images.unsplash.com/photo-1726762524157-4625a4b394a8?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "community-safety-initiative",
  },
  {
    id: "2",
    date: "March 26, 2025",
    title: "New Emergency Response System Improves 911 Call",
    description:
      "The new system allows for faster dispatching, better tracking of emergencies, and real-time communication with first responders.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669244777314-682992ab3619?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "emergency-response-system",
  },
  {
    id: "3",
    date: "March 26, 2025",
    title: "New Emergency Response System Improves 911 Call",
    description:
      "The new system allows for faster dispatching, better tracking of emergencies, and real-time communication with first responders.",
    imageUrl:
      "https://images.unsplash.com/photo-1649949480665-a2ba4b37ed5b?q=80&w=1509&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "emergency-response-system",
  },
  // {
  //   id: "4",
  //   date: "March 26, 2025",
  //   title: "New Emergency Response System Improves 911 Call",
  //   description:
  //     "The new system allows for faster dispatching, better tracking of emergencies, and real-time communication with first responders.",
  //   imageUrl:
  //     "https://unsplash.com/photos/a-close-up-of-a-world-map-on-a-blue-background-rBAAz3ReUuo",
  //   slug: "emergency-response-system",
  // },
];

const NewsComponent: React.FC<NewsComponentProps> = ({
  newsItems = defaultNewsItems,
  onViewAll,
}) => {
  return (
    <div className="w-full py-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <SectionHeader title="Latest News & Updates" />
          <button
            onClick={onViewAll}
            className="inline-flex items-center px-8 py-3 transition-all duration-300 bg-orange-400 border-orange-400 hover:bg-orange-500 hover:text-white hover:shadow-orange-400/25 focus:outline-none focus:ring-4 focus:ring-orange-400/50 focus:bg-orange-400 focus:text-white active:scale-95 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 backdrop-blur-sm"
          >
            View All Updates
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className="group bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 border border-white/20"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                    <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-sm" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="py-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {item.description}
                </p>

                {/* Read More Button */}
                <button className="inline-flex items-center px-6 py-2.5 bg-slate-900 text-white font-medium text-sm rounded-full transition-all duration-300 hover:shadow-md group-hover:bg-orange-500">
                  <span>Read More</span>
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
