import { Highlighter } from "@/components/magicui/highlighter";
import ShinyText from "@/components/ShinyText/ShinyText";
import { Badge } from "@/components/ui/badge";
import { CardCarousel } from "@/components/ui/card-carousel";
import { Sparkle } from "lucide-react";
import React from "react";

const DoctorTeam = () => {
  const images = [
    { src: "./doctor1.png", alt: "Doctor 1" },
    { src: "./doctor2.png", alt: "Doctor 2" },
    { src: "./doctor3.png", alt: "Doctor 3" },
    // {src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F1.png&w=640&q=75"},
    // {src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F2.png&w=640&q=75"},
    // {src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F3.png&w=640&q=75"},
  ];

  return (
    <section id="team" className="">
      <div className="p-4 sm:p-8">
        <div className="text-center flex flex-col items-center mb-16">
          <h3 className="text-4xl md:text-5xl max-w-2xl font-medium mb-4">
            Exceptional Care From{" "}
            <Highlighter action="underline" color="#fff" strokeWidth={2}>
              <strong className="font-medium text-[#a365ff]">Board-Certified</strong>
            </Highlighter>{" "}
            Specialists
          </h3>

          <ShinyText
            className="text-base max-w-2xl"
            text="Our physician team combines advanced medical expertise with compassionate patient-centered care for optimal health outcomes."
            speed={3}
          />
        </div>
      </div>
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </section>
  );
};

export default DoctorTeam;
