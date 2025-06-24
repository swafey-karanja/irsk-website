import AboutComponent from "@/components/AboutComponent";
import Hero from "@/components/Hero";
import React from "react";

const About = () => {
  return (
    <div>
      <Hero
        imageSrc="/images/image-1.jpg"
        heightClass="h-[45vh]"
        showContent={false}
        customTitle={
          <>
            <span className="text-blue-400/80 font-bold">About</span>
            <br />
            <span className="text-white">
              International Relations Society of Kenya
            </span>
          </>
        }
      />
      <AboutComponent />
    </div>
  );
};

export default About;
