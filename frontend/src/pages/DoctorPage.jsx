import { Highlighter } from "@/components/magicui/highlighter";
import ShinyText from "@/components/ShinyText/ShinyText";
import React from "react";
import { useParams } from "react-router-dom";

const doctor = {
  name: "Dr. Kuldeep Malik",
  avatar: "/doctors/kuldeep.png",
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
              src="./doctors/kuldeep.jpg"
              alt={doctor.name}
              className="aspect-[3/4] h-full w-full object-cover transition-all duration-500 hover:scale-105"
            />
            {/* Experience Badge */}
            <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-purple-900 backdrop-blur-sm">
              {doctor.experience} experience
            </div>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="w-full space-y-6 sm:w-1/2">
          <h3 className="text-lg font-semibold text-purple-600 md:text-xl">
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
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {doctor.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800"
              >
                {tag}
              </span>
            ))}
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