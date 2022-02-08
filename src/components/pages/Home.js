import React from "react";
import HeroSection from "../layout/HeroSection";
import { homeObjOne, homeObjTwo } from "../data/HomeData";
import Video from "../layout/Video";
import MainNav from "../layout/MainNav";
import Footer from "../layout/Footer";

function Home() {
  return (
    <>
      <MainNav />
      <Video />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <Footer />
    </>
  );
}

export default Home;
