"use client";

import { Globe, Building, Group, Camera } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Video() {
  const [selectedVideo, setSelectedVideo] = useState(0);

  const videos = [
    {
      id: "zu4YbFjDEpU",
      title: "IRSK 2024 Conference Highlights",
      duration: "12:45",
      thumbnail: "https://img.youtube.com/vi/zu4YbFjDEpU/mqdefault.jpg",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Opening Ceremony - COMESA Partnership",
      duration: "8:23",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    },
    {
      id: "9bZkp7q19f0",
      title: "Panel Discussion: Geopolitical Divides",
      duration: "45:12",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/mqdefault.jpg",
    },
    {
      id: "ScMzIvxBSi4",
      title: "Women Leaders Summit Session",
      duration: "32:18",
      thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/mqdefault.jpg",
    },
    {
      id: "kffacxfA7G4",
      title: "Diplomatic Relations Workshop",
      duration: "28:56",
      thumbnail: "https://img.youtube.com/vi/kffacxfA7G4/mqdefault.jpg",
    },
    {
      id: "hFZFjoX2cGg",
      title: "ACCORD Collaboration Presentation",
      duration: "15:34",
      thumbnail: "https://img.youtube.com/vi/hFZFjoX2cGg/mqdefault.jpg",
    },
  ];

  const stats = [
    {
      icon: <Globe className="text-blue-500" size={24} />,
      number: "+10 ",
      description: "Countries represented",
    },
    {
      icon: <Group className="text-blue-500" size={24} />,
      number: "+1500 ",
      description: "Participants ",
    },
    {
      icon: <Camera className="text-blue-500" size={24} />,
      number: "+70",
      description: "Journalists",
    },
    {
      icon: <Building className="text-blue-500" size={24} />,
      number: "+200",
      description: "Government participants",
    },
    {
      icon: <Group className="text-blue-500" size={24} />,
      number: "+500",
      description: "Women leaders",
    },
  ];

  return (
    <div className="pb-16 pt-8 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 py-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
            2024 IRSK Conference Highlights
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Video Layout Container */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Main Video Section - Left Side */}
          <div className="flex-1 lg:w-2/3">
            <div className="rounded-lg overflow-hidden shadow-lg bg-black">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videos[selectedVideo].id}`}
                  title={videos[selectedVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video Title and Description */}
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {videos[selectedVideo].title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>
                  The International Relations Society of Kenya (IRSK)
                </strong>{" "}
                held a three-day event in collaboration with the Common Market
                for Eastern and Southern Africa (COMESA) and the African Centre
                for the Constructive Resolution of Disputes (ACCORD) based in
                South Africa. The conference brought together various
                stakeholders including key government officials, diplomats,
                scholars, policymakers, business leaders, media and members of
                civil society to dissect the multiple crises and geopolitical
                divides that are redefining international relations and
                diplomacy in the COMESA region.
              </p>
            </div>
          </div>

          {/* Video Playlist - Right Side */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-lg px-4">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">
                Conference Videos
              </h4>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(index)}
                    className={`flex cursor-pointer rounded-lg p-2 transition-colors duration-200 ${
                      selectedVideo === index
                        ? "bg-orange-100 border-2 border-orange-300"
                        : "bg-white hover:bg-orange-100 border border-gray-200"
                    }`}
                  >
                    <div className="relative flex-shrink-0 mr-3">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-24 h-16 object-cover rounded"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                      <span className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 rounded">
                        {video.duration}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5
                        className={`text-sm font-medium line-clamp-2 leading-tight ${
                          selectedVideo === index
                            ? "text-orange-700"
                            : "text-gray-800"
                        }`}
                      >
                        {video.title}
                      </h5>
                      <p className="text-xs text-gray-500 mt-1">
                        IRSK Conference
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 w-[90%]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full p-6 border shadow-lg rounded-lg bg-orange-400 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-gray-100 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-sm text-white">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
