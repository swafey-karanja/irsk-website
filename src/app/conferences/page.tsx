"use client";

import React from "react";
import Hero from "@/components/Hero";
import NewsComponent from "@/components/NewsComponent";

interface Conference {
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

const ConferencePage = () => {
  // Sample forum data for a government institution
  const conferenceData: Conference[] = [
    {
      id: 1,
      title: "Public Services Announcements",
      description:
        "Official announcements regarding public services, policy changes, and important updates from government departments.",
      posts: 342,
      members: 1250,
      lastPost: "2 hours ago",
      moderator: "Admin Team",
      date: "2/24/2025",
      image:
        "https://images.unsplash.com/photo-1649949480665-a2ba4b37ed5b?q=80&w=1509&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Citizen Feedback & Suggestions",
      description:
        "Share your feedback, suggestions, and ideas to help us improve public services and community programs.",
      posts: 567,
      members: 890,
      lastPost: "1 hour ago",
      moderator: "Community Manager",
      date: "2/24/2025",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Technical Support",
      description:
        "Get help with government online services, digital platforms, and technical issues related to public service portals.",
      posts: 289,
      members: 456,
      lastPost: "30 minutes ago",
      moderator: "Tech Support Team",
      date: "2/24/2025",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "Policy Discussions",
      description:
        "Moderated discussions about current policies, proposed changes, and their impact on the community.",
      posts: 134,
      members: 321,
      lastPost: "4 hours ago",
      moderator: "Policy Team",
      date: "2/24/2025",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop&crop=center",
    },
    {
      id: 5,
      title: "Emergency Notifications",
      description:
        "Critical emergency information, alerts, and safety instructions for the community.",
      posts: 45,
      members: 2100,
      lastPost: "1 week ago",
      moderator: "Emergency Team",
      date: "2/24/2025",
      image:
        "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&h=400&fit=crop&crop=center",
    },
    {
      id: 6,
      title: "Community Events & Programs",
      description:
        "Information about upcoming community events, workshops, and local government programs.",
      posts: 178,
      members: 672,
      lastPost: "3 hours ago",
      moderator: "Events Team",
      date: "2/24/2025",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=400&fit=crop&crop=center",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero
        imageSrc="/images/image-1.jpg"
        heightClass="h-[45vh]"
        showContent={false}
        customTitle={
          <>
            <span className="text-blue-400/80 font-bold">Conferences</span>
            <br />
            <span className="text-white">Building diplomatic bridges</span>
          </>
        }
      />

      <NewsComponent
        forumsData={conferenceData}
        heroImageSrc="/images/image-1.jpg"
        heroTitle={
          <span className="text-blue-400/80 font-bold">Conferences</span>
        }
        heroSubtitle={
          <span className="text-white">Building diplomatic bridges</span>
        }
        emptyStateTitle="No forums found"
        emptyStateDescription="Try adjusting your search terms."
      />
    </div>
  );
};

export default ConferencePage;
