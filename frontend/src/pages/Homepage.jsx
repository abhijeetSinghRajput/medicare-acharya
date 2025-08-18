import NavBar from "@/components/NavBar";
import SectionHeading from "@/components/SectionHeading";
import ApointUs from "@/components/sections/contact/ApointUs";
import Hero from "@/components/sections/hero/Hero";
import OurProfessonals from "@/components/sections/our professonals/OurProfessonals";
import OurStory from "@/components/sections/our story/OurStory";
import Questions from "@/components/sections/Questions/Questions";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import WhatWeDo from "@/components/sections/what we do/WhatWeDo";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <NavBar/>
      <Hero />
      <div className="space-y-4 md:space-y-10">
        <OurStory/>
        <WhatWeDo />
        <OurProfessonals />
        <ApointUs />
        <Testimonials />
        <Questions />
      </div>
    </div>
  );
};

export default Homepage;
