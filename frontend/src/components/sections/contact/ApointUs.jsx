// > ApointUs.jsx

"use client";
import { Highlighter } from "@/components/magicui/highlighter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import { CheckCircle } from "lucide-react";
import { CommandDialog } from "@/components/ui/command";
import DoctorList from "@/components/DoctorList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DoctorForm from "./DoctorForm";
import PatientForm from "./PatientForm";

// Main component
const ApointUs = () => {
  const services = [
    <p><strong>Faster</strong> patient–doctor matching</p>,
    <p><strong>Verified</strong> doctors across hospital</p>,
    <p><strong>Skip</strong> long waiting queue</p>,
    <p><strong>24/7</strong> care & support</p>,
  ];

  return (
    <section id="contact" className="py-20 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center mb-16">
          <h3 className={cn("text-4xl md:text-5xl font-medium mb-2 p-2")}>
            Why Should You{" "}
            <Highlighter action="underline" color="#fff" strokeWidth={2}>
              <strong className="text-[#a365ff] font-medium">
                Appoint Us?
              </strong>
            </Highlighter>
          </h3>

          <p className="text-muted-foreground max-w-2xl">
            Our comprehensive platform empowers healthcare providers with tools
            to optimize practice management and enhances patient experience with
            seamless appointment booking.
          </p>
        </div>

        <SpotlightCard
          className="relative max-w-screen-xl p-4 md:p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-zinc-900/70"
          spotlightColor="rgba(163, 101, 255, 0.3)"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 0% 0%, rgba(163, 101, 255, 0.3) 0%, transparent 70%)`,
            }}
          />

          {/* Left side - Content */}
          <div className="flex flex-col justify-start lg:p-10">
            <h3 className="text-3xl md:text-4xl font-medium mb-6">
              Transforming Healthcare Experience
            </h3>
            <p className="text-muted-foreground mb-8">
              We revolutionize medical practices with cutting-edge technology
              solutions designed to streamline operations while maintaining the
              highest standards of patient care.
            </p>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[#a365ff] size-5" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Glossy Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative p-4 md:p-8 rounded-xl bg-gradient-to-br from-[#1e1b20] to-[#2a2438] border border-white/10"
          >
            <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#a365ff]/10 via-transparent to-transparent opacity-70"></div>

            <div className="relative z-10">
              <Tabs defaultValue="patient" className="w-full">
                <TabsList className="grid bg-purple-500/10 w-full grid-cols-2 mb-6 h-auto">
                  <TabsTrigger className="py-3" value="patient">
                    I'm a Patient
                  </TabsTrigger>
                  <TabsTrigger className="py-3" value="doctor">
                    I'm a Doctor
                  </TabsTrigger>
                </TabsList>

                {/* Patient Form */}
                <TabsContent value="patient">
                  <PatientForm />
                </TabsContent>

                {/* Doctor Form */}
                <TabsContent value="doctor">
                  <DoctorForm />
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default ApointUs;
