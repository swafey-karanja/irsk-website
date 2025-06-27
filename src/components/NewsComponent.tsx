/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { MessageSquare, ChevronRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import ForumDetails from "./ForumDetails";

export interface Forum {
  id: number;
  title: string;
  description: string;
  posts: number;
  members: number;
  lastPost: string;
  moderator: string;
  date: string;
  image: string;
}

// Add these props
interface NewsComponentProps {
  forumsData: Forum[];
  selectedForum: Forum | null;
  setSelectedForum: (forum: Forum | null) => void;
  emptyStateTitle?: string;
  emptyStateDescription?: string;
  heroImageSrc?: string;
  heroTitle?: React.ReactNode;
  heroSubtitle?: React.ReactNode;
}

const NewsComponent: React.FC<NewsComponentProps> = ({
  forumsData,
  selectedForum,
  setSelectedForum,
  emptyStateTitle = "No forums found",
  emptyStateDescription = "Try adjusting your search terms.",
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredForums = forumsData.filter(
    (forum) =>
      forum.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      forum.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedForum) {
    return (
      <ForumDetails
        forum={selectedForum}
        onBack={() => setSelectedForum(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <div className="flex items-center space-x-8 text-sm text-gray-600">
            <span>Total Forums: {forumsData.length}</span>
          </div>
        </div>

        {/* Forums Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredForums.map((forum) => (
            <div
              key={forum.id}
              className="bg-white border-b border-gray-200 transition-all duration-300 cursor-pointer overflow-hidden group"
              onClick={() => setSelectedForum(forum)}
            >
              {/* Image Header */}
              <div className="relative h-65 bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
                <Image
                  src={forum.image}
                  alt={forum.title}
                  className="w-full h-full object-cover"
                  fill
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {forum.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {forum.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{forum.date}</span>
                  <ChevronRight className="w-4 h-4 text-blue-600/80 group-hover:text-orange-500 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredForums.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <MessageSquare className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {emptyStateTitle}
            </h3>
            <p className="text-gray-500">{emptyStateDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsComponent;
