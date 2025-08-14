import { Highlighter } from "@/components/magicui/highlighter";
import ShinyText from "@/components/ShinyText/ShinyText";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const doctors = [
  {
    name: "Dr. Vivek Srivastava",
    avatar: "/doctor.png",
    about: "Cardiologist with 15+ years experience in interventional procedures",
    specialization: "Cardiology",
    experience: "15 years"
  },
  {
    name: "Dr. Priya Sharma",
    avatar: "/doctor1.png",
    about: "Pediatric specialist focused on preventive child healthcare",
    specialization: "Pediatrics",
    experience: "10 years"
  },
  {
    name: "Dr. Arjun Patel",
    avatar: "/doctor2.png",
    about: "Orthopedic surgeon specializing in minimally invasive techniques",
    specialization: "Orthopedics",
    experience: "12 years"
  },
  {
    name: "Dr. Neha Gupta",
    avatar: "/doctor3.png",
    about: "Neurologist researching advanced treatments for Parkinson's",
    specialization: "Neurology",
    experience: "8 years"
  },
  {
    name: "Dr. Sanjay Mehta",
    avatar: "/doctor4.png",
    about: "Oncologist with expertise in precision cancer therapies",
    specialization: "Oncology",
    experience: "14 years"
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {doctors.map((doctor, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#a365ff]/30 transition-all group overflow-hidden hover:shadow-lg hover:shadow-[#a365ff]/10">
              <CardHeader className="items-center pt-8 pb-4">
                <div className="relative">
                  <Avatar className="w-24 h-24 border-2 border-white/20 group-hover:border-[#a365ff] transition-all">
                    <AvatarImage src={doctor.avatar} alt={doctor.name} />
                    <AvatarFallback className="bg-[#a365ff]/20 text-white">
                      {doctor.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#a365ff] hover:bg-[#a365ff]/90">
                    {doctor.specialization}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="text-center px-6 pb-2">
                <h4 className="text-xl font-semibold mb-1">{doctor.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{doctor.experience} experience</p>
                <p className="text-sm text-white/80 line-clamp-3">{doctor.about}</p>
              </CardContent>
              
              <CardFooter className="justify-center pb-6">
                <Button variant="outline" size="sm" className="rounded-full border-white/20 hover:bg-[#a365ff] hover:border-[#a365ff]">
                  View Profile
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="ghost" className="border border-white/20 hover:bg-[#a365ff]/10 hover:border-[#a365ff]/30 rounded-full px-8">
            Meet All Specialists
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurProfessionals;