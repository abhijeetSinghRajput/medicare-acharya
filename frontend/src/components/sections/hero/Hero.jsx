import Particles from "@/components/Particles/Particles";
import ShinyText from "@/components/ShinyText/ShinyText";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import { UpcomingPodcast } from "@/components/UpcomingPodcast";

const people = [
  {
    id: 1,
    name: "Abhishek Bhattacharya",
    designation: "Co Founder",
    image: "./partners/abhishek-bhatacharya.jpg"
  }
];


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
              "We build innovative digital solutions to make healthcare more efficient, accessible, and patient-focused"
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
            <h3 className="medium text-base">Our Patners</h3>
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
