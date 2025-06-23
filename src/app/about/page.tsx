import AboutComponent from "@/components/AboutComponent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
  return (
    <div>
      <Navbar variant="light" />
      <AboutComponent />
      <Footer />
    </div>
  );
};

export default About;
