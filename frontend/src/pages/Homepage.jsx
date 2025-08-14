import NavBar from "@/components/NavBar";
import SectionHeading from "@/components/SectionHeading";
import ApointUs from "@/components/sections/contact/ApointUs";
import Hero from "@/components/sections/hero/Hero";
import OurProfessonals from "@/components/sections/our professonals/OurProfessonals";
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
        <WhatWeDo />
        <ApointUs />
        <Testimonials />
        <OurProfessonals />
        <Questions />
      </div>
    </div>
  );
};

export default Homepage;
