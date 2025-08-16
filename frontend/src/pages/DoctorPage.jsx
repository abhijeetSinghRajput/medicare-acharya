import { Highlighter } from "@/components/magicui/highlighter";
import ShinyText from "@/components/ShinyText/ShinyText";
import { Badge } from "@/components/ui/badge";
import { Stethoscope } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";

const doctor = {
  name: "Dr. Kuldeep Malik",
  avatar: "./doctors/rajender.jpg",
  about:
    "Orthopaedic specialist with 15+ years of experience in joint replacement and osteoarthritis care. Associate Director – Orthopaedics & Joint Replacement Surgery at Max Super Speciality Hospital, Shalimar Bagh.",
  specialization: "Orthopaedics & Joint Replacement",
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
const DoctorPage = () => {
  const { doctorId } = useParams();
  return (
    <div className="relative">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
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

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-16 sm:flex-row md:gap-16 md:py-24">
        {/* Doctor Image */}
        <div className="relative w-full max-w-md sm:w-1/2">
          <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="aspect-[3/4] h-full w-full object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Doctor Info */}
        <div className="w-full space-y-6 sm:w-1/2">
          <Badge className="w-max gap-2 cursor-pointer relative z-10 hover:bg-black/90 border border-transparent text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] flex space-x-2 items-center bg-amber-400/10 border-none text-amber-400">
            <Stethoscope className="size-5"/>
            {doctor.experience} experience
          </Badge>
          <h3 className="text-lg font-semibold md:text-xl">
            Meet {doctor.name}
          </h3>
          <h1 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
            Expert in{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              {doctor.specialization}
            </span>
          </h1>

          <div className="max-w-lg">
            <ShinyText text={doctor.about} />
          </div>

          {/* CTA Button */}
          <button className="mt-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Book Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default DoctorPage;
