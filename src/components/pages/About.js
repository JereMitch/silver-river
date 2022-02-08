import React from "react";
import AboutHeroSection from "../layout/AboutHeroSection";
import { aboutObjFour } from "../data/AboutData";
import MainNav from "../layout/MainNav";
import Footer from "../layout/Footer";

function About() {
  return (
    <div>
      <MainNav />
      <AboutHeroSection {...aboutObjFour} />
      <Footer />
    </div>
  );
}

export default About;
