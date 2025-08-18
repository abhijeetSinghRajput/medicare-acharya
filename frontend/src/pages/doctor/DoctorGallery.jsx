import MagicBento from "@/components/MagicBento/MagicBento";
import { Highlighter } from "@/components/magicui/highlighter";
import ShinyText from "@/components/ShinyText/ShinyText";
import React from "react";

const cardData = [
  {
    color: "#060010",
    title: "Cardiology",
    image: "https://img.freepik.com/premium-photo/person-holding-human-heart_81048-43547.jpg?uid=R80717593&ga=GA1.1.313964022.1744727695&w=740&q=80",
    description: "Advanced heart care specialists",
    label: "Heart Health",
  },
  {
    color: "#060010",
    title: "Neurology",
    image: "https://img.freepik.com/premium-photo/two-doctors-looking-brain-scan-screen_861143-145.jpg?uid=R80717593&ga=GA1.1.313964022.1744727695&semt=ais_hybrid&w=740&q=80",
    description: "Expert brain and nervous system care",
    label: "Neuroscience",
  },
  {
    color: "#060010",
    title: "Dermatology",
    image: "https://img.freepik.com/premium-photo/cinematic-shot-dermatologist-performing-laser-treatment-patient-s-face-camera-ang_891336-39135.jpg?uid=R80717593&ga=GA1.1.313964022.1744727695&semt=ais_hybrid&w=740&q=80",
    description: "Skin health and treatment experts",
    label: "Skin Care",
  },
  {
      color: "#060010",
    title: "Orthopedics",
    image: "https://img.freepik.com/premium-psd/human-body-joint-pain-points-arthritis-diagram-flowchart-blue-skeleton_496288-3920.jpg",
    description: "Bone and joint specialists",
    label: "Musculoskeletal",
  },
  {
    color: "#060010",
    title: "Pediatrics",
    image: "https://img.freepik.com/premium-photo/happy-female-doctor-giving-high-five_1124848-153455.jpg?uid=R80717593&ga=GA1.1.313964022.1744727695&semt=ais_hybrid&w=740&q=80",
    description: "Compassionate care for children",
    label: "Child Health",
  },
  {
      color: "#060010",
    title: "Oncology",
    image:"https://img.freepik.com/free-photo/surgeons-passing-scissors-each-other_329181-19635.jpg?uid=R80717593&ga=GA1.1.313964022.1744727695&semt=ais_hybrid&w=740&q=80",
    description: "Comprehensive cancer treatment",
    label: "Cancer Care",
  },
];


const DoctorGallery = () => {
  return (
    <section id="gallery" className="p-4 sm:p-8">
      <div className="text-center flex flex-col items-center mb-16">
        <h3 className="text-4xl md:text-5xl max-w-2xl font-medium mb-4">
          Exceptional Care From{" "}
          <Highlighter action="underline" color="#fff" strokeWidth={2}>
            <strong className="font-medium text-[#a365ff]">
              Board-Certified
            </strong>
          </Highlighter>{" "}
          Specialists
        </h3>

        <ShinyText
          className="text-base max-w-2xl"
          text="Our physician team combines advanced medical expertise with compassionate patient-centered care for optimal health outcomes."
          speed={3}
        />
      </div>

      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
        cardData={cardData}
      />
    </section>
  );
};

export default DoctorGallery;
