"use client";

import { Highlighter } from "@/components/magicui/highlighter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import { CheckCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const ApointUs = () => {
  return (
    <section className="py-20 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center mb-16">
          <h3 className={cn("text-4xl md:text-5xl font-medium mb-4")}>
            Why Should You{" "}
            <Highlighter action="underline" color="#fff" strokeWidth={2}>
              <strong className="text-[#a365ff] font-medium">
                Appoint Us?
              </strong>
            </Highlighter>
          </h3>

          <p className="text-muted-foreground max-w-2xl">
            Our comprehensive platform empowers healthcare providers with tools
            to optimize practice management and enhance patient care delivery.
          </p>
        </div>

        <SpotlightCard
          className="max-w-screen-xl p-4 md:p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-zinc-900/70"
          spotlightColor="rgba(163, 101, 255, 0.3)"
        >
          {/* Left side - Content */}
          <div className="flex flex-col justify-center lg:p-10">
            <h3 className="text-3xl md:text-4xl font-medium mb-6">
              Transforming Healthcare Management
            </h3>
            <p className="text-muted-foreground mb-8">
              We revolutionize medical practices with cutting-edge technology
              solutions designed to streamline operations while maintaining the
              highest standards of patient care.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#a365ff] size-5" />
                <span className="text-primary/80">
                  <strong className="text-primary">Reduce</strong>{" "}
                  administrative workload by 60%
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#a365ff] size-5" />
                <span className="text-primary/80">
                  HIPAA-compliant{" "}
                  <strong className="text-primary">secure</strong> platform
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#a365ff] size-5" />
                <span className="text-primary/80">
                  <strong className="text-primary">24/7</strong> dedicated
                  support team
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#a365ff] size-5" />
                <span className="text-primary/80">
                  <strong className="text-primary">Proven</strong> to increase
                  practice revenue
                </span>
              </li>
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
              <h4 className="text-2xl font-semibold mb-6 text-white">
                Schedule a Consultation
              </h4>

              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-muted-foreground">
                    Your Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    className="h-12 w-full bg-white/5 backdrop-blur-sm border-white/10 rounded-lg focus:ring-2 focus:ring-[#a365ff]"
                    placeholder="Dr. John Smith"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-muted-foreground">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="john@yourclinic.com"
                    className="h-12 w-full bg-white/5 backdrop-blur-sm border-white/10 rounded-lg focus:ring-2 focus:ring-[#a365ff]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="practice" className="text-muted-foreground">
                    Practice Size
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="practice"
                      className="h-12 w-full bg-white/5 backdrop-blur-sm border-white/10 rounded-lg focus:ring-2 focus:ring-[#a365ff]"
                    >
                      <SelectValue placeholder="Select your practice size" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1e1b20] border border-white/10 text-white">
                      <SelectItem className="p-2.5 px-4" value="solo">Solo Practitioner</SelectItem>
                      <SelectItem className="p-2.5 px-4" value="small">
                        Small Practice (2-5 providers)
                      </SelectItem>
                      <SelectItem className="p-2.5 px-4" value="medium">
                        Medium Practice (6-15 providers)
                      </SelectItem>
                      <SelectItem className="p-2.5 px-4" value="large">
                        Large Practice (16+ providers)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-[#a365ff] to-[#7630ba] text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#a365ff]/30"
                >
                  Request Demo
                </button>
              </form>

              <p className="text-xs text-white/50 mt-4">
                We'll contact you within 24 hours to schedule your consultation.
              </p>
            </div>
          </motion.div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default ApointUs;
