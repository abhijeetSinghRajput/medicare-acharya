import { Highlighter } from "@/components/magicui/highlighter";
import React from "react";

import ShinyText from "@/components/ShinyText/ShinyText";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "With a career rooted in healthcare management at leading institutions like Fortis Hospital and Fortis Memorial Research Institute, I’ve witnessed how innovation can truly impact lives. Every role has strengthened my belief that technology and dedication together can reshape patient care for the better.",
    name: "Abhishek Bhattacharya",
    designation: "Sr. Manager BD, Fortis Hospital Noida",
    src: "./partners/abhishek-bhatacharya.jpg",
  },
  {
    quote:
      "From an engineer with a B.Tech degree to a creator behind the lens and words, my journey blends technology with art. Photography, blogging, and content creation taught me to see the world differently—and that same vision drives me to build smarter, more human-centered solutions in healthcare.",
    name: "Vivek Srivastava",
    designation: "CEO at Medicare Acharya",
    src: "./partners/vivek.jpg",
  },
];

const OurStory = () => {
  return (
    <div className="space-y-6">
      <div className="text-center flex flex-col gap-2 max-w-lg mx-auto relative z-10">
        <h3 className={cn("font text-4xl font-medium")}>
          The{" "}
          <Highlighter action="underline" color="#fff" strokeWidth={2}>
            <strong className="text-[#a365ff] font-medium">{"Journey"}</strong>
          </Highlighter>{" "}
          Behind Us
        </h3>
        <ShinyText
          className="text-base"
          text={
            "Every great idea begins with a story. From engineering roots to leadership roles and creative passions, our journey is built on curiosity, resilience, and a vision to transform healthcare with smarter solutions."
          }
          speed={3}
        />
      </div>

      <AnimatedTestimonials
        className={"max-w-full"}
        testimonials={testimonials}
      />
    </div>
  );
};

export default OurStory;
