import Hero from "@/components/Hero";
import Video from "@/components/Video";
import NewsComponent from "@/components/News";
import PartnersSection from "@/components/PartnersComponent";
import FAQSection from "@/components/FaqsComponent";

export default function Home() {
  return (
    <>
      <Hero imageSrc="/images/image-1.jpg" />
      <Video />
      <NewsComponent />
      <PartnersSection />
      <FAQSection />
    </>
  );
}
