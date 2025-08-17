import { Highlighter } from "@/components/magicui/highlighter";
import ShinyText from "@/components/ShinyText/ShinyText";
import { cn, nameToSlug } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Rajender Kumar",
    avatar: "https://res.cloudinary.com/dhtxrpqna/image/upload/1000096945-removebg-preview_pqnqvq.png",
    about:
      "Renowned Radiation Oncologist with over 25 years of experience treating prostate, breast, lung, and brain cancers. Known for pioneering advanced therapies across North Delhi.",
    specialization: "Radiation Oncology",
    experience: "25+ years",
    tags: [
      "RadiationOncology",
      "CancerSpecialist",
      "ProstateCancerCare",
      "BreastCancerTreatment",
      "LungCancerTherapy",
      "BrainTumorExpert",
    ],
  },
  {
    name: "Dr Jitesh Manghwani",
    avatar: "https://res.cloudinary.com/dhtxrpqna/image/upload/1000096908-removebg-preview_ekqngw.png",
    about:
      "Orthopaedic Spine Surgeon at Max Hospital, Shalimar Bagh. Featured on Health 360 with Sneha Mordani.",
    specialization: "Orthopaedic Spine Surgery",
    experience: "10 years",
    tags: [
      "SpineSurgeryExpert",
      "OrthopaedicCare",
      "MaxHospital",
      "BackPainRelief",
      "SurgicalSpecialist",
      "BoneHealth",
    ],
  },
  {
    name: "Dr. Arjun Patel",
    avatar: "/doctor2.png",
    about: "Orthopedic surgeon specializing in minimally invasive techniques",
    specialization: "Orthopedics",
    experience: "12 years",
    tags: [
      "MinimallyInvasive",
      "SportsInjuryExpert",
      "ArthroscopySpecialist",
      "BoneHealth",
      "FractureCare",
      "JointPainRelief",
      "SpineSpecialist",
      "OrthopedicSurgeon",
    ],
  },
  {
    name: "Dr. Clara Whitmore",
    avatar: "/doctor3.png",
    about: "Neurologist researching advanced treatments for Parkinson's",
    specialization: "Neurology",
    experience: "8 years",
    tags: [
      "ParkinsonsExpert",
      "BrainHealth",
      "NeurologyCare",
      "MigraineSpecialist",
      "StrokePrevention",
      "EpilepsyCare",
      "NeuroResearch",
      "MemoryDisorders",
      "NerveHealth",
    ],
  },
  {
    name: "Dr. Sanjay Mehta",
    avatar: "/doctor4.png",
    about: "Oncologist with expertise in precision cancer therapies",
    specialization: "Oncology",
    experience: "14 years",
    tags: [
      "CancerCare",
      "PrecisionOncology",
      "ChemotherapyExpert",
      "TumorSpecialist",
      "CancerResearch",
      "Immunotherapy",
      "RadiationTherapy",
      "HopeForCancer",
      "SurvivorCare",
    ],
  },
];

const OurProfessionals = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center mb-16">
          <h3 className={cn("text-4xl md:text-5xl font-medium mb-4")}>
            Meet Our{" "}
            <Highlighter action="underline" color="fff" strokeWidth={2}>
              <strong className="text-[#a365ff] font-medium">Trusted</strong>
            </Highlighter>{" "}
            Professionals
          </h3>

          <ShinyText
            className="text-base max-w-2xl"
            text="Our board-certified specialists bring decades of combined experience and cutting-edge expertise to your healthcare journey."
            speed={3}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {doctors.map((doctor, index) => (
            <ProfileCard doctor={doctor} />
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <Button
            variant="ghost"
            className="border border-white/20 hover:bg-[#a365ff]/10 hover:border-[#a365ff]/30 rounded-full px-8"
          >
            Meet All Specialists
          </Button>
        </div> */}
      </div>
    </section>
  );
};

const ProfileCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <Card className="rounded-2xl flex items-start flex-col sm:flex-row p-4 sm:p-6 gap-6 bg-muted/30">
      <div className="rounded-xl  w-full sm:max-w-72 overflow-hidden border relative aspect-square">
        <img
          className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-0"
          src="./gradient-bg.png"
          alt="background"
        />
        <img
          className="relative z-10 object-cover w-full h-full"
          src={doctor.avatar}
          alt="doctor"
        />
      </div>
      <div className="space-y-6 w-full">
        <div className="space-y-4">
          <div className="space-y-1 ">
            <h3 className="font-medium text-lg">{doctor.name}</h3>
            <p>
              Specialized in{" "}
              <strong className="text-[#a365ff] font-medium">
                {doctor.specialization}
              </strong>
            </p>
          </div>

          <div className="flex gap-1 whitespace-nowrap flex-wrap">
            {doctor.tags.map((tag) => (
              <Badge variant={"outline"}>{tag}</Badge>
            ))}
          </div>

          <p className="line-clamp-2">{doctor.about}</p>
          <Separator />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Button className="col-span-1 h-12">More</Button>
          <Button
            onClick={() => navigate(nameToSlug(doctor.name))}
            className="col-span-2 w-full h-12 py-3 px-6 bg-gradient-to-r from-[#a365ff] to-[#7630ba] text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#a365ff]/30"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default OurProfessionals;
