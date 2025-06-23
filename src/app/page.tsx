import Hero from "@/components/Hero";
import Video from "@/components/Video";
import NewsComponent from "@/components/News";
// import About from "@/components/About";
// import Speakers from "@/components/Speakers";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersComponent";
import FAQSection from "@/components/FaqsComponent";

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <NewsComponent />
      {/* <About /> */}
      {/* <Speakers /> */}
      <PartnersSection />
      <FAQSection />
      <Footer />
    </>
  );
}
