"use client";

import React from "react";

interface Stat {
  icon: React.ReactNode;
  number: string;
  description: string;
}

interface StatsDisplayProps {
  stats: Stat[];
}

export default function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <div className="w-full flex justify-center py-12 bg-blue-600/40">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-[90%] max-w-7xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-full px-4 py-6 border shadow-lg rounded-lg bg-orange-400 flex flex-col items-center text-center"
          >
            <div className="mb-3 p-2 bg-gray-100 rounded-full">{stat.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {stat.number}
            </h3>
            <p className="text-xs sm:text-sm text-white">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
