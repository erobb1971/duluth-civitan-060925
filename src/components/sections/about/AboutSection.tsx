import React from "react";
import AboutHero from "./AboutHero";
import MissionVisionCards from "./MissionVisionCards";
import CoreValuesGrid from "./CoreValuesGrid";
import CivitanCreedPanel from "./CivitanCreedPanel";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white overflow-hidden">
      <AboutHero />
      <MissionVisionCards />
      <CoreValuesGrid />
      <CivitanCreedPanel />
    </section>
  );
};

export default AboutSection;
