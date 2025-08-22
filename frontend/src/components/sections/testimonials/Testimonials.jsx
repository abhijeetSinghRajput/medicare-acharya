import { Highlighter } from "@/components/magicui/highlighter";
import ShinyText from "@/components/ShinyText/ShinyText";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { cn } from "@/lib/utils";
import React from "react";

const testimonials = [
  {
    quote:
      "Booking appointments has become effortless for my patients, and I can manage my schedule more efficiently than ever before.",
    name: "Dr. Sarah Chen",
    designation: "Cardiologist",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The platform has drastically reduced waiting times at our hospital. Patients appreciate the transparency and easy booking process.",
    name: "Dr. Michael Rodriguez",
    designation: "Orthopedic Surgeon",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "As a patient, I love how simple it is to find the right specialist and get confirmed appointments without any hassle.",
    name: "Emily Watson",
    designation: "Patient",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Managing multiple consultations is now stress-free. The reminders and patient updates are incredibly helpful for my practice.",
    name: "Dr. James Kim",
    designation: "Neurologist",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I no longer worry about long queues. Booking online saves me time and gives me peace of mind knowing my slot is secured.",
    name: "Lisa Thompson",
    designation: "Patient",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonials = () => {
  return (
    <div>
      <div className="text-center flex flex-col gap-2 max-w-lg mx-auto relative z-10">
        <h3 className={cn("font text-4xl font-medium")}>
          What{" "}
          <Highlighter action="underline" color="#fff" strokeWidth={2}>
            <strong className="text-[#a365ff] font-medium">
              Doctors & Patients
            </strong>
          </Highlighter>{" "}
          Say
        </h3>
        <ShinyText
          className="text-base"
          text={
            "From hospital managers to practicing doctors, our partners share how smarter technology is transforming care delivery and operations."
          }
          speed={3}
        />
      </div>

      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;
