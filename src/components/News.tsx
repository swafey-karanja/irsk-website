"use client";

import { useEffect, useState } from "react";
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

  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNews());
    }

    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [dispatch, status]);

  if (status === "failed") {
    console.log(error, "error fetching news");
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1380px]">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
          Latest Content
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>
      {/* Conditionally show content based on status */}
      {(isPageLoading || status === "loading") && (
        <div className="container mx-auto px-4 py-8 max-w-[1380px]">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main news skeleton */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg animate-pulse">
                <div className="h-64 md:h-150 w-full bg-gray-300 rounded-t-lg"></div>
                <div className="px-1 py-6">
                  <div className="h-4 w-24 bg-gray-300 mb-2 rounded"></div>
                  <div className="h-6 w-3/4 bg-gray-300 mb-2 rounded"></div>
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-200 mt-2 rounded"></div>
                </div>
              </div>
            </div>

            {/* Side news skeletons */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {[1, 2].map((_, i) => (
                <div key={i} className="bg-white rounded-lg animate-pulse">
                  <div className="h-70 w-full bg-gray-300 rounded-t-lg"></div>
                  <div className="py-4 px-1">
                    <div className="h-4 w-20 bg-gray-300 mb-2 rounded"></div>
                    <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      ;
      {status === "failed" && (
        <div className="container mx-auto px-4 py-8 max-w-[1380px]">
          <p>Failed to fetch news. Please try again later!</p>
        </div>
      )}
      ;
      {!isPageLoading && status === "succeeded" && newsItems.length === 0 && (
        <div className="container mx-auto px-4 py-8 max-w-[1380px]">
          <p>No News to display</p>
        </div>
      )}
      {!isPageLoading && status === "succeeded" && newsItems.length > 0 && (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column - Main news */}
          <div className="lg:w-2/3">
            <a
              href={newsItems[0]?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white h-full flex flex-col rounded-lg "
            >
              <div className="h-64 md:h-150 w-full relative flex-shrink-0">
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
                <h2 className="text-xl font-bold mt-2 mb-2 text-gray-900 hover:text-orange-500">
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
                className="bg-white rounded-lg "
              >
                <div className="h-70 w-full relative">
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
                  <h3 className="text-md font-bold mt-2 text-gray-900 hover:text-orange-500">
                    {newsItems[3]?.title?.split(" ").slice(0, 20).join(" ") +
                      (newsItems[3]?.title?.split(" ").length > 10
                        ? "..."
                        : "")}
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
                className="bg-white rounded-lg "
              >
                <div className="h-70 w-full relative">
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
                  <h3 className="text-md font-bold mt-2 text-gray-900 hover:text-orange-500">
                    {newsItems[2]?.title?.split(" ").slice(0, 20).join(" ") +
                      (newsItems[2]?.title?.split(" ").length > 10
                        ? "..."
                        : "")}
                  </h3>
                </div>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
