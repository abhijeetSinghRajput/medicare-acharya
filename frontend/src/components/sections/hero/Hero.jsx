import Particles from "@/components/Particles/Particles";
import ShinyText from "@/components/ShinyText/ShinyText";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import { UpcomingPodcast } from "@/components/UpcomingPodcast";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

// const nextPodcastDate = new Date();
// nextPodcastDate.setDate(nextPodcastDate.getDate() + 1); 
// nextPodcastDate.setHours(19, 30); 


const Hero = () => {
  return (
    <div id="home" className="relative h-svh overflow-hidden">
      {/* Gradient overlay container */}
      <div className="absolute inset-0 z-0">
        {/* Spline iframe */}
        <iframe
          src="https://my.spline.design/glowingplanetparticles-tOUVXQukTrvXNLJTTWPWpPj8/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full"
          allow="fullscreen"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #010915, transparent)",
          }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 opacity-50">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={60}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="max-w-lg lg:max-w-xl space-y-6 px-4">
          <h2 className="text-4xl font-medium md:text-5xl lg:text-6xl">
            Smart Tools for Smarter Healthcare
          </h2>
          <ShinyText
            text={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia doloribus architecto aspernatur delectus aliquid dolorem sunt iusto doloremque similique earum"
            }
            speed={3}
          />
          <Button className="rounded-xl">See our work</Button>
          {/* <UpcomingPodcast
            guestName="Dr Jitesh Manghwani"
            date={nextPodcastDate}
            description="Join us for a conversation about the future of web development"
            className="mx-auto"
          /> */}
          <div className="space-y-2">
            <h3 className="medium text-base">Our Stackholders</h3>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
