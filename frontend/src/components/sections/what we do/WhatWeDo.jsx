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
    icon: "./heart.svg",
    title: "Practice Management",
    description:
      "Comprehensive solutions for scheduling, billing, and patient records to streamline your clinic operations.",
  },
  {
    id: 2,
    color: "#00c9a7",
    icon: "./phone.svg",
    title: "Telemedicine Integration",
    description:
      "Seamless virtual care platform that connects you with patients anywhere, anytime.",
  },
  {
    id: 3,
    color: "#1e86ff",
    icon: "./team.svg",
    title: "Analytics Dashboard",
    description:
      "Real-time insights into your practice performance and patient trends.",
  },
  {
    id: 4,
    color: "#f9a825",
    icon: "./lock.svg",
    title: "HIPAA Compliance",
    description:
      "Secure patient data management that meets all healthcare regulations.",
  },
  {
    id: 5,
    color: "#00c9a7", // #ff6b6b
    icon: "./plant.svg",
    title: "Revenue Cycle Management",
    description:
      "Optimized billing and claims processing to maximize your reimbursements.",
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center mb-16">
          <h3 className={cn("text-4xl md:text-5xl font-medium mb-4")}>
            What We{" "}
            <Highlighter action="underline" color="#fff" strokeWidth={2}>
              <strong className="text-[#a365ff] font-medium">Do</strong>
            </Highlighter>
          </h3>

          <p className="text-muted-foreground max-w-2xl">
            Our comprehensive platform empowers healthcare providers with tools
            to optimize practice management and enhance patient care delivery.
          </p>
        </div>

        <SpotlightCard
          className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 bg-zinc-900/70"
          //   spotlightColor="rgba(163, 101, 255, 0.3)"
          spotlightColor="rgba(22, 163, 74, 0.5)"
        >
          {/* Left side - Content */}
          <div className="flex flex-col justify-center p-6 lg:p-10">
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
                <CheckCircle className="text-green-500 size-5"/>
                <span className="text-primary/70"><strong className="text-primary">Reduce</strong> administrative workload by 60%</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-green-500 size-5"/>
                <span className="text-primary/70">HIPAA-compliant <strong className="text-primary">secure</strong> platform</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-green-500 size-5"/>
                <span className="text-primary/70"><strong className="text-primary">24/7</strong> dedicated support team</span>
              </li>
            </ul>
          </div>

          {/* Right side - Animated cards */}
          <div className="relative min-h-[400px] w-full overflow-hidden rounded-xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6">
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
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#a365ff]/30 transition-all">
                      <CardHeader className="flex flex-row items-start gap-4 pb-4">
                        <div className="aspect-square rounded-2xl flex items-center justify-center size-16">
                          <img
                            src={service.icon}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold">
                            {service.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
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
