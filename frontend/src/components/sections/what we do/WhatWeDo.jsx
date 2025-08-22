"use client";

import { Highlighter } from "@/components/magicui/highlighter";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import { Check, CheckCircle } from "lucide-react";

const services = [
  {
    id: 1,
    color: "#a365ff",
    icon: "./clock.svg",
    title: "Skip the Queue",
    description:
      "Priority booking system that puts online patients ahead of walk-ins at partner hospitals.",
  },
  {
    id: 2,
    color: "#00c9a7",
    icon: "./plant.svg",
    title: "Verified Doctors",
    description:
      "Only certified and trusted doctors from reputed hospitals are listed on our platform.",
  },
  {
    id: 3,
    color: "#1e86ff",
    icon: "./notification.svg",
    title: "Live Status Tracking",
    description:
      "Track your appointment progress in real-time so you always know where you stand in the queue.",
  },
  {
    id: 4,
    color: "#f9a825",
    icon: "./team.svg",
    title: "Hospital Network Access",
    description:
      "Leverage our strong connections with multiple hospitals for faster access to quality care.",
  },
  {
    id: 5,
    color: "#ff6b6b",
    icon: "./lock.svg",
    title: "Safe & Transparent",
    description:
      "Seamless digital process with secure patient data handling and upfront clarity in services.",
  },
];


const WhatWeDo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleServices = useMemo(() => {
    const items = [];
    for (let i = 0; i < 2; i++) {
      const service = services[(currentIndex + i) % services.length];
      if (service) items.push(service);
    }
    return items;
  }, [currentIndex]);

  return (
    <section id="services" className="py-20 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center mb-16">
          <h3 className={cn("text-4xl md:text-5xl font-medium mb-2 p-2")}>
            What We{" "}
            <Highlighter action="underline" color="#fff" strokeWidth={2}>
              <strong className="text-[#a365ff] font-medium">Provide</strong>
            </Highlighter>
          </h3>

          <p className="text-muted-foreground max-w-2xl">
            We help patients skip long queues, connect with verified doctors,
            and get real-time updates on their appointments—making healthcare
            faster, smoother, and more transparent.
          </p>
        </div>

        <SpotlightCard
          className="relative max-w-screen-xl p-4 md:p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 bg-zinc-900/70"
          //   spotlightColor="rgba(163, 101, 255, 0.3)"
          spotlightColor="rgba(22, 163, 74, 0.5)"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 0% 0%, rgba(22, 163, 74, 0.3) 0%, transparent 70%)`,
            }}
          />

          {/* Left side - Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-medium mb-6">
              Empowering Healthcare Professionals
            </h3>
            <p className="text-muted-foreground mb-8">
              We transform medical practices with innovative technology
              solutions that simplify operations, enhance patient care, and
              boost revenue. Our platform is designed by doctors for doctors.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-green-500 size-5" />
                <span className="text-primary/70">
                  <strong className="text-primary">Reduce</strong>{" "}
                  administrative workload by 60%
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-green-500 size-5" />
                <span className="text-primary/70">
                  HIPAA-compliant{" "}
                  <strong className="text-primary">secure</strong> platform
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-green-500 size-5" />
                <span className="text-primary/70">
                  <strong className="text-primary">24/7</strong> dedicated
                  support team
                </span>
              </li>
            </ul>
          </div>

          {/* Right side - Animated cards */}
          <div className="relative min-h-[400px] w-full overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <AnimatePresence mode="popLayout">
                {visibleServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 50,
                      scale: 0.9,
                      filter: "blur(2px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: {
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: -50,
                      scale: 0.9,
                      filter: "blur(2px)",
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    className={cn(
                      "w-full",
                      index === 0 ? "z-30" : "z-20 opacity-90"
                    )}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-green-200/30 transition-all">
                      <CardHeader className="icon-card grid p-4 md:p-6">
                        <div className="aspect-square rounded-2xl flex items-center justify-center size-16">
                          <img
                            src={service.icon}
                            alt={service.title}
                            className="w-full h-full object-cover scale-150"
                          />
                        </div>

                        <h4 className="text-xl font-semibold">
                          {service.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default WhatWeDo;
