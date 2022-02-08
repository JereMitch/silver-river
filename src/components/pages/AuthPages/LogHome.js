import React from "react";
import LogHeroSection from "../../layout/AuthLayout/LogHeroSection";
import { homeObjOne, homeObjTwo } from "../../data/HomeData";
import Video from "../../layout/Video";
import LogMainNav from "../../layout/AuthLayout/LogMainNav";
import LogFooter from "../../layout/AuthLayout/LogFooter";

function LogHome() {
  return (
    <>
      <LogMainNav />
      <Video />
      <LogHeroSection {...homeObjOne} />
      <LogHeroSection {...homeObjTwo} />
      <LogFooter />
    </>
  );
}

export default LogHome;
