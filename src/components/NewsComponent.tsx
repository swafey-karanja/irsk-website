/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { MessageSquare, ChevronRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

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

interface NewsComponentProps {
  forumsData: Forum[];
  heroImageSrc: string;
  heroTitle: React.ReactNode;
  heroSubtitle: React.ReactNode;
  emptyStateTitle?: string;
  emptyStateDescription?: string;
}

const NewsComponent: React.FC<NewsComponentProps> = ({
  forumsData,
  emptyStateTitle = "No forums found",
  emptyStateDescription = "Try adjusting your search terms.",
}) => {
  const [selectedForum, setSelectedForum] = useState<Forum | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredForums = forumsData.filter(
    (forum) =>
      forum.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      forum.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedForum) {
    return (
      <div className="h-auto bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={() => setSelectedForum(null)}
            className="flex items-center font-bold text-blue-600 hover:text-blue-700 mb-6 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Forums
          </button>

          {/* Forum Header */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h1 className="text-2xl font-bold text-gray-900 mr-3">
                    {selectedForum.title}
                  </h1>
                </div>
                <p className="text-gray-600 mb-4">
                  {selectedForum.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
