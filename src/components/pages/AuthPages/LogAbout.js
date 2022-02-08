import React from "react";
import LogAboutHeroSection from "../../layout/AuthLayout/LogAboutHeroSection";
import { aboutObjFour } from "../../data/AboutData";
import LogMainNav from "../../layout/AuthLayout/LogMainNav";
import LogFooter from "../../layout/AuthLayout/LogFooter";

function LogAbout() {
  return (
    <div>
      <LogMainNav />
      <LogAboutHeroSection {...aboutObjFour} />
      <LogFooter />
    </div>
  );
}

export default LogAbout;