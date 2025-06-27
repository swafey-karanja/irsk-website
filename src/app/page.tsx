import Hero from "@/components/Hero";
import Video from "@/components/Video";
import NewsComponent from "@/components/News";
import PartnersSection from "@/components/PartnersComponent";
import FAQSection from "@/components/FaqsComponent";
import { Globe, Group, Camera, Building } from "lucide-react";
import StatsDisplay from "@/components/StatsDisplay";

export default function Home() {
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
    <>
      <Hero imageSrc="/images/image-1.jpg" />
      <Video />
      <StatsDisplay stats={statsForConference} />
      <NewsComponent />
      <PartnersSection />
      <FAQSection />
    </>
  );
}
