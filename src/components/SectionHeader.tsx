"use client";

import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignmentClass = align === "center" ? "text-center" : "text-left";

  return (
    <header className={`${alignmentClass} mb-8 lg:mb-12`}>
      <h2 className="text-xl sm:text-3xl font-bold text-blue-600/80 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-gray-700 mb-2">{subtitle}</p>
      )}
      <div className="w-20 h-1 bg-blue-600/80 mx-auto rounded-full"></div>
    </header>
  );
}
