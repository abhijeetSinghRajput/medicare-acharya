import { Highlighter } from "@/components/magicui/highlighter";
import React from "react";

import ShinyText from "@/components/ShinyText/ShinyText";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { cn } from "@/lib/utils";

const keywordsClass = "font-medium text-purple-400";
const testimonials = [
  {
    quote: (
      <p>
        With a career rooted in healthcare management at leading institutions
        like Fortis Hospital and Fortis Memorial Research Institute, I’ve
        witnessed how innovation can truly impact lives. Every role has
        strengthened my belief that technology and dedication together can
        reshape patient care for the better.
      </p>
    ),
    name: "Abhishek Bhattacharya",
    designation: "Sr. Manager BD, Fortis Hospital Noida",
    src: "./partners/abhishek-bhatacharya.jpg",
  },
];

const OurStory = () => {
  return (
    <div className="space-y-6">
      <div className="text-center flex flex-col gap-2 max-w-lg mx-auto relative z-10">
        <h3 className={cn("font text-4xl font-medium p-2")}>
          The{" "}
          <Highlighter action="underline" color="#fff" strokeWidth={2}>
            <strong className="text-[#a365ff] font-medium">{"Journey"}</strong>
          </Highlighter>{" "}
          Behind Us
        </h3>
        <ShinyText
          className="text-base"
          text={
            "It started with one question: why do patients still spend hours waiting when doctors are ready inside? With strong hospital connections and first-hand experience in healthcare, we set out to solve this—by building a platform that reduces waiting times, ensures verified doctors, and makes patient care seamless across hospitals."
          }
          speed={3}
        />
      </div>

      <AnimatedTestimonials
        className={"md:max-w-5xl"}
        testimonials={testimonials}
      />
    </div>
  );
};

export default OurStory;
