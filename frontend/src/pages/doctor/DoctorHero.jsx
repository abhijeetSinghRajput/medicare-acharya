import { Highlighter } from "@/components/magicui/highlighter";
import RotatingText from "@/components/RotatingText/RotatingText";
import ShinyText from "@/components/ShinyText/ShinyText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";

const doctor = {
  name: "Dr. Kuldeep Malik",
  avatar: "./doctors/rajender-2.jpg",
  about:
    "Orthopaedic specialist with 15+ years of experience in joint replacement and osteoarthritis care. Associate Director – Orthopaedics & Joint Replacement Surgery at Max Super Speciality Hospital, Shalimar Bagh.",
  specialization: ["Orthopaedics", "Joint Replacement"],
  experience: "15+ years",
  tags: [
    "OsteoarthritisExpert",
    "JointReplacementSurgeon",
    "MaxHealthcare",
    "OrthopaedicCare",
    "PainReliefSpecialist",
    "MaxExpert",
  ],
};
// https://storyshort.ai/
const DoctorHero = () => {
  const { doctorId } = useParams();
  return (
    <div className="relative">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 mix-blend-screen opacity-80 overflow-hidden">
        <div
          className="w-full  h-80 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000] to-transparent"
        ></div>
        <video
          autoPlay
          muted
          loop
          preload="auto"
          className="h-full w-full object-cover min-h-screen"
          poster="/screenshots/landing-page-background-cover.webp"
        >
          <source
            src="https://s3.amazonaws.com/cdn.jutsu.ai/videos/home/landing-page-background.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* DoctorHero Section */}
      <section className="p-4 sm:p-8 grid grid-col-1 sm:grid-cols-3 gap-4 sm:gap-8 md:gap-gap-12 max-w-screen-xl mx-auto">
        {/* Doctor Info */}
        <div className="col-span-2 space-y-6 my-auto">
          <div className="flex gap-2 items-center">
            <h3 className="text-lg font-semibold md:text-xl">{doctor.name}</h3>
            <Badge className="w-max gap-2 cursor-pointer relative z-10 hover:bg-black/90 border border-transparent text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] flex space-x-2 items-center bg-amber-400/10 border-none text-amber-400">
              <Stethoscope className="size-5" />
              {doctor.experience} experience
            </Badge>
          </div>
          <h1 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
            Expert in{" "}
            <RotatingText
              texts={doctor.specialization}
              mainClassName="text-[#a365ff]"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />
          </h1>

          <div className="max-w-lg">
            <ShinyText text={doctor.about} />
          </div>

          {/* CTA Button */}
          <Button className="col-span-2 rounded-full h-12 py-3 px-6 bg-gradient-to-r from-[#a365ff] to-[#7630ba] text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[#a365ff]/30">
            Book Appointment
          </Button>
        </div>

        {/* Doctor Image */}
        <div className="">
          <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="aspect-[3/4] h-full w-full object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorHero;
