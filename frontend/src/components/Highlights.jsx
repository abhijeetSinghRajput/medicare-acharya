import React from "react";
import { Highlighter } from "./magicui/highlighter";
import ShinyText from "./ShinyText/ShinyText";
import { CardCarousel } from "./ui/card-carousel";

const images = [
  {src: "./highlights/img (1).jpg", alt: "img1"},
  {src: "./highlights/img (2).jpg", alt: "img2"},
  {src: "./highlights/img (3).jpg", alt: "img3"},
  {src: "./highlights/img (4).jpg", alt: "img4"},
  {src: "./highlights/img (5).jpg", alt: "img5"},
  {src: "./highlights/img (6).jpg", alt: "img6"},
  {src: "./highlights/img (7).jpg", alt: "img7"},
  {src: "./highlights/img (8).jpg", alt: "img8"},
  {src: "./highlights/img (9).jpg", alt: "img9"},
  {src: "./highlights/img (10).jpg", alt: "img10"},
  {src: "./highlights/img (11).jpg", alt: "img11"},
  {src: "./highlights/img (12).jpg", alt: "img12"},
  {src: "./highlights/img (13).jpg", alt: "img13"},
  {src: "./highlights/img (14).jpg", alt: "img14"},
];

const Highlights = () => {
  return (
    <section id="highlights" className="">
      <div className="p-4 sm:p-8">
        <div className="text-center flex flex-col items-center mb-4">
          <h3 className="text-4xl md:text-5xl max-w-3xl font-medium mb-4">
            Celebrating Our{" "}
            <Highlighter action="underline" color="#fff" strokeWidth={2}>
              <strong className="font-medium text-[#a365ff]">
                Achievements & Impact
              </strong>
            </Highlighter>
          </h3>

          <ShinyText
            className="text-base max-w-2xl"
            text="From receiving national awards to distributing medical kits, hosting health camps, and supporting communities — our journey is built on service and compassion."
            speed={3}
          />
        </div>
      </div>
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={false}
        showNavigation={true}
      />
    </section>
  );
};

export default Highlights;
