"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchNews } from "@/store/newsSlice";

export default function News() {
  const dispatch = useAppDispatch();
  const {
    items: newsItems,
    status,
    error,
  } = useAppSelector((state) => state.news);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNews());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!newsItems || newsItems.length === 0) return <p>No news items found</p>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
          Latest Content
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left column - Main news */}
        <div className="lg:w-2/3">
          <a
            href={newsItems[0]?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white h-full flex flex-col rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-64 md:h-130 w-full relative flex-shrink-0">
              {newsItems[0]?.image_url && (
                <Image
                  src={newsItems[0].image_url}
                  alt={newsItems[0].title || "News image"}
                  fill
                  className="rounded-t-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              )}
            </div>
            <div className="px-1 py-6">
              <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">
                {newsItems[0]?.category?.join(", ") || "General"}
              </span>
              <h2 className="text-xl font-bold mt-2 mb-2 text-gray-900">
                {newsItems[0]?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {newsItems[0]?.description}
              </p>
            </div>
          </a>
        </div>

        {/* Right column - Secondary news */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          {/* First small card */}
          {newsItems[3] && (
            <a
              href={newsItems[3]?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-55 w-full relative">
                {newsItems[3]?.image_url && (
                  <Image
                    src={newsItems[3].image_url}
                    alt={newsItems[3].title || "News image"}
                    fill
                    className="rounded-t-lg object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </div>
              <div className="py-4 px-1">
                <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">
                  {newsItems[3]?.category?.join(", ") || "General"}
                </span>
                <h3 className="text-md font-bold mt-2 text-gray-900">
                  {newsItems[3]?.title?.split(" ").slice(0, 20).join(" ") +
                    (newsItems[3]?.title?.split(" ").length > 10 ? "..." : "")}
                </h3>
              </div>
            </a>
          )}

          {/* Second small card with alert */}
          {newsItems[2] && (
            <a
              href={newsItems[2]?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-55 w-full relative">
                {newsItems[2]?.image_url && (
                  <Image
                    src={newsItems[2].image_url}
                    alt={newsItems[2].title || "News image"}
                    fill
                    className="rounded-t-lg object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </div>
              <div className="py-4 px-1">
                <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">
                  {newsItems[2]?.category?.join(", ") || "General"}
                </span>
                <h3 className="text-md font-bold mt-2 text-gray-900">
                  {newsItems[2]?.title?.split(" ").slice(0, 20).join(" ") +
                    (newsItems[2]?.title?.split(" ").length > 10 ? "..." : "")}
                </h3>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
