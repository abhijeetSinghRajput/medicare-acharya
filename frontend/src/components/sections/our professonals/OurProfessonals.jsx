import { Highlighter } from "@/components/magicui/highlighter";
import ShinyText from "@/components/ShinyText/ShinyText";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const doctors = [
  {
    name: "Dr. Vivek Srivastava",
    avatar: "/doctor.png",
    about:
      "Cardiologist with 15+ years experience in interventional procedures",
    specialization: "Cardiology",
    experience: "15 years",
  },
  {
    name: "Dr. Priya Sharma",
    avatar: "/doctor1.png",
    about: "Pediatric specialist focused on preventive child healthcare",
    specialization: "Pediatrics",
    experience: "10 years",
  },
  {
    name: "Dr. Arjun Patel",
    avatar: "/doctor2.png",
    about: "Orthopedic surgeon specializing in minimally invasive techniques",
    specialization: "Orthopedics",
    experience: "12 years",
  },
  {
    name: "Dr. Neha Gupta",
    avatar: "/doctor3.png",
    about: "Neurologist researching advanced treatments for Parkinson's",
    specialization: "Neurology",
    experience: "8 years",
  },
  {
    name: "Dr. Sanjay Mehta",
    avatar: "/doctor4.png",
    about: "Oncologist with expertise in precision cancer therapies",
    specialization: "Oncology",
    experience: "14 years",
  },
];

const OurProfessionals = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center mb-16">
          <h3 className={cn("text-4xl md:text-5xl font-medium mb-4")}>
            Meet Our{" "}
            <Highlighter action="underline" color="#fff" strokeWidth={2}>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-6">
          {doctors.map((doctor, index) => (
            <ProfileCard doctor={doctor} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="ghost"
            className="border border-white/20 hover:bg-[#a365ff]/10 hover:border-[#a365ff]/30 rounded-full px-8"
          >
            Meet All Specialists
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProfileCard = ({ doctor }) => {
  return (
    <Card className="rounded-2xl flex flex-col sm:flex-row p-6 gap-6 bg-muted/30">
      <div className="rounded-xl overflow-hidden borde">
        <img
          className="w-full h-full object-contain"
          src={doctor.avatar}
          alt="doctor"
        />
      </div>
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <div className="space-y-1 ">
            <h3 className="font-medium text-lg">Dr Vivek Sriwastava</h3>
            <p>
              Specialized in{" "}
              <strong className="text-[#a365ff] font-medium">
                {doctor.specialization}
              </strong>
            </p>
          </div>

          <div className="flex gap-1 ">
            <Badge variant={"outline"}>UI/UX</Badge>
            <Badge variant={"outline"}>Product Design</Badge>
            <Badge variant={"outline"}>Copy writing</Badge>
          </div>

          <p className="">{doctor.about}</p>
          <Separator />
        </div>

        <div className="flex gap-3">
          <Button>More</Button>
          <Button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-[#a365ff] to-[#7630ba] text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#a365ff]/30"
          >
            Book an appointment
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default OurProfessionals;
