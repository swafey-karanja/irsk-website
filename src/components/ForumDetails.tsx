"use client";

// components/ForumDetails.tsx
import React, { useState } from "react";
import { ArrowLeft, Download, FileText, Share2 } from "lucide-react";
import { Forum } from "./NewsComponent";
import Video from "./Video";
import Speakers from "./Speakers";
import { Globe, Group, Camera, Building } from "lucide-react";
import StatsDisplay from "./StatsDisplay";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

interface ConferencePhoto {
  id: number;
  url: string;
  caption: string;
  category: string;
}

interface ConceptNote {
  id: number;
  title: string;
  description: string;
  downloadUrl: string;
  fileSize: string;
  type: string;
}

interface Speaker {
  id: number;
  name: string;
  title: string;
  organization: string;
  image: string;
  bio: string;
}

interface ForumDetailsProps {
  forum: Forum;
  onBack: () => void;
}

const ForumDetails: React.FC<ForumDetailsProps> = ({ forum, onBack }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<ConferencePhoto | null>(
    null
  );

  // Sample conference data
  const conferenceDetails = {
    startDate: "March 15, 2024",
    endDate: "March 17, 2024",
    location: "Nairobi International Convention Centre",
    address: "University Way, Nairobi, Kenya",
    attendees: 500,
    sessions: 12,
    speakers: 25,
    website: "https://conference2024.gov.ke",
    email: "info@conference2024.gov.ke",
    phone: "+254 20 123 4567",
    theme: "Building Sustainable Diplomatic Relations in the 21st Century",
  };

  const photos: ConferencePhoto[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      caption: "Opening ceremony with keynote speakers",
      category: "Opening Ceremony",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop",
      caption: "Panel discussion on sustainable development",
      category: "Panel Discussions",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
      caption: "Networking session during coffee break",
      category: "Networking",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      caption: "Interactive workshop on policy development",
      category: "Workshops",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
      caption: "Evening gala dinner and awards ceremony",
      category: "Gala Dinner",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
      caption: "Closing remarks and future commitments",
      category: "Closing Ceremony",
    },
  ];

  const conceptNotes: ConceptNote[] = [
    {
      id: 1,
      title: "Conference Overview & Strategic Objectives",
      description:
        "Comprehensive overview of conference goals, expected outcomes, strategic objectives, and the framework for achieving sustainable diplomatic relations in the modern era.",
      downloadUrl: "#",
      fileSize: "2.4 MB",
      type: "PDF",
    },
    {
      id: 2,
      title: "Sustainable Development Framework for Diplomacy",
      description:
        "Detailed policy framework outlining the integration of sustainable development principles into diplomatic practices and international relations protocols.",
      downloadUrl: "#",
      fileSize: "1.8 MB",
      type: "PDF",
    },
  ];

  const keynoteSpeakers: Speaker[] = [
    {
      id: 1,
      name: "Dr. Amina Hassan",
      title: "Director of International Relations",
      organization: "Ministry of Foreign Affairs, Kenya",
      image:
        "https://images.unsplash.com/photo-1566165335512-bb5ba58365b4?w=500&auto=format&fit=crop&q=60",
      bio: "Dr. Hassan is a leading expert in diplomatic relations with over 15 years of experience in international policy development. She has played key roles in major international negotiations and has authored several publications on sustainable diplomacy.",
    },
    {
      id: 2,
      name: "Prof. John Kimani",
      title: "Senior Policy Advisor",
      organization: "United Nations Development Programme",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60",
      bio: "Professor Kimani is a renowned policy advisor specializing in sustainable development and international cooperation frameworks. His work has influenced policy decisions at the highest levels of international governance.",
    },
    {
      id: 3,
      name: "Ms. Sarah Mwangi",
      title: "Regional Coordinator",
      organization: "African Union Commission",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60",
      bio: "Ms. Mwangi brings extensive expertise in regional integration and diplomatic cooperation across African nations. She has been instrumental in fostering partnerships and collaborative initiatives throughout the continent.",
    },
    {
      id: 4,
      name: "Ambassador Michael Chen",
      title: "Special Envoy for Climate Diplomacy",
      organization: "European Union External Action Service",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
      bio: "Ambassador Chen is a distinguished diplomat with expertise in climate change negotiations and environmental diplomacy. He has led numerous international climate initiatives and multilateral environmental agreements.",
    },
    {
      id: 5,
      name: "Dr. Fatima Al-Rashid",
      title: "Director of Sustainable Development",
      organization: "World Bank Group",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&auto=format&fit=crop&q=60",
      bio: "Dr. Al-Rashid leads global initiatives in sustainable development financing and policy implementation. Her work focuses on bridging the gap between diplomatic commitments and practical development outcomes.",
    },
    {
      id: 6,
      name: "Hon. Robert Ochieng",
      title: "Minister of Environment",
      organization: "Government of Kenya",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60",
      bio: "Minister Ochieng has been at the forefront of environmental policy and sustainable development initiatives in Kenya. His leadership has been crucial in implementing green diplomacy practices and environmental cooperation agreements.",
    },
  ];

  const statsForConference = [
    {
      icon: <Globe className="text-blue-500" size={24} />,
      number: "+10",
      description: "Countries represented",
    },
    {
      icon: <Group className="text-blue-500" size={24} />,
      number: "+1500",
      description: "Participants",
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
    <div className="min-h-screen bg-white w-full">
      <div className="w-full py-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto flex items-center justify-between mb-2">
          <button
            onClick={onBack}
            className="flex items-center font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Forums
          </button>
          <button className="flex items-center text-gray-600 hover:text-gray-700 transition-colors">
            <Share2 className="w-4 h-4 mr-2" />
            Share Conference
          </button>
        </div>

        {/* Conference Header */}
        <div className="mb-12 max-w-7xl mx-auto">
          <SectionHeader title={forum.title} />
          <p className="text-md text-gray-600 mb-6">{forum.description}</p>
          <div className="relative h-80 rounded-lg overflow-hidden mb-8">
            <img
              src={forum.image}
              alt={forum.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-2xl font-bold mb-2">
                  {conferenceDetails.theme}
                </h2>
                <p className="text-lg opacity-90">
                  A comprehensive gathering of diplomatic leaders and policy
                  experts
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conference Details */}
        <section className="mb-16">
          <Video />
          <StatsDisplay stats={statsForConference} />
        </section>

        {/* Photo Gallery */}
        <section className="mb-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Conference Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm font-medium">{photo.caption}</p>
                      <p className="text-xs opacity-80">{photo.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents & Resources */}
        <section className="mb-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Documents & Resources
          </h2>
          <div className="space-y-6">
            {conceptNotes.map((doc) => (
              <div
                key={doc.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <FileText className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="font-semibold text-xl">{doc.title}</h3>
                      <span className="ml-3 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {doc.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {doc.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        File size: {doc.fileSize}
                      </span>
                      <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Speakers */}
        <section className="max-w-7xl mx-auto">
          <Speakers
            sectionTitle="Meet Our The Speakers"
            buttonLabel="See All the Speakers"
            speakersData={keynoteSpeakers}
          />
        </section>

        {/* Photo Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 max-w-7xl mx-auto">
            <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{selectedPhoto.caption}</h3>
                    <p className="text-sm text-gray-600">
                      {selectedPhoto.category}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <Image
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="w-full max-h-96 object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForumDetails;
