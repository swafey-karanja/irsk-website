"use client";

import { Globe, Building, Group, Camera, Play, Clock } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useCallback } from "react";

export default function Video() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<string>>(
    new Set()
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);

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

  const handleVideoSelect = useCallback(
    (index: number) => {
      if (index !== selectedVideo) {
        setIsVideoLoading(true);
        setSelectedVideo(index);

        // Reset loading state after iframe loads
        setTimeout(() => setIsVideoLoading(false), 1000);
      }
    },
    [selectedVideo]
  );

  const handleImageError = useCallback((videoId: string) => {
    setImageLoadErrors((prev) => new Set(prev).add(videoId));
  }, []);

  // Intersection Observer for stats animation

  return (
    <div
      className="pb-4 pt-8 min-h-screen"
      aria-labelledby="video-section-title"
    >
      <div className="w-full max-w-7xl mx-auto px-2 lg:px-4 py-2">
        {/* Title */}
        <header className="text-center mb-8 lg:mb-12">
          <h2
            id="video-section-title"
            className="text-xl sm:text-2xl lg:text-4xl font-bold text-blue-600 mb-4"
          >
            2024 IRSK Conference Highlights
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        {/* Video Layout Container */}
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 mb-8 lg:mb-12 px-3">
          {/* Main Video Section - Left Side */}
          <div className="flex-1 xl:w-2/3">
            <div className="rounded-xl overflow-hidden shadow-xl bg-black relative group">
              {isVideoLoading && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                </div>
              )}

              <div className="aspect-video">
                <iframe
                  ref={iframeRef}
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videos[selectedVideo].id}?rel=0&modestbranding=1`}
                  title={videos[selectedVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Video Title and Description */}
            <div className="mt-6 lg:mt-8">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 leading-tight">
                {videos[selectedVideo].title}
              </h3>
              <div className="prose prose-sm lg:prose-base text-gray-700 leading-relaxed text-sm">
                <p>
                  <strong className="text-blue-600">
                    The International Relations Society of Kenya (IRSK)
                  </strong>{" "}
                  held a three-day event in collaboration with the Common Market
                  for Eastern and Southern Africa (COMESA) and the African
                  Centre for the Constructive Resolution of Disputes (ACCORD)
                  based in South Africa. The conference brought together various
                  stakeholders including key government officials, diplomats,
                  scholars, policymakers, business leaders, media and members of
                  civil society to dissect the multiple crises and geopolitical
                  divides that are redefining international relations and
                  diplomacy in the COMESA region.
                </p>
              </div>
            </div>
          </div>

          {/* Video Playlist - Right Side */}
          <aside className="xl:w-1/3" aria-label="Video playlist">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Play size={20} />
                  Conference Videos
                </h4>
              </div>

              <div className="p-4">
                <div className="space-y-3 max-h-[500px] overflow-y-auto custom-scrollbar">
                  {videos.map((video, index) => (
                    <article
                      key={video.id}
                      onClick={() => handleVideoSelect(index)}
                      className={`flex cursor-pointer rounded-lg p-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 ${
                        selectedVideo === index
                          ? "bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-300 shadow-md"
                          : "bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 hover:shadow-md"
                      }`}
                      role="button"
                      tabIndex={0}
                      aria-label={`Play video: ${video.title}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleVideoSelect(index);
                        }
                      }}
                    >
                      <div className="relative flex-shrink-0 mr-4 group">
                        {!imageLoadErrors.has(video.id) ? (
                          <Image
                            src={video.thumbnail}
                            alt={`Thumbnail for ${video.title}`}
                            className="w-24 sm:w-28 h-16 sm:h-18 object-cover rounded-lg transition-transform group-hover:scale-105"
                            width={112}
                            height={72}
                            sizes="(max-width: 640px) 96px, 112px"
                            onError={() => handleImageError(video.id)}
                          />
                        ) : (
                          <div className="w-24 sm:w-28 h-16 sm:h-18 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                            <Play className="text-gray-500" size={20} />
                          </div>
                        )}

                        {/* Duration Badge */}
                        <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                          <Clock size={10} />
                          {video.duration}
                        </span>

                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                          <Play
                            className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            size={16}
                          />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h5
                          className={`text-sm font-medium line-clamp-2 leading-tight mb-1 ${
                            selectedVideo === index
                              ? "text-orange-700"
                              : "text-gray-800"
                          }`}
                        >
                          {video.title}
                        </h5>
                        <p className="text-xs text-gray-500 font-medium">
                          IRSK Conference
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full flex justify-center py-2">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-[90%] max-w-7xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full px-4 py-6 border shadow-lg rounded-lg bg-orange-400 flex flex-col items-center text-center"
            >
              <div className="mb-3 p-2 bg-gray-100 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {stat.number}
              </h3>
              <p className="text-xs sm:text-sm text-white">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>
  );
}
