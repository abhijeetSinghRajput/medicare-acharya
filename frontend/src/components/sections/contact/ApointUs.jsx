"use client";

import { Highlighter } from "@/components/magicui/highlighter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import { CheckCircle } from "lucide-react";

const ApointUs = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center mb-16">
          <h3 className={cn("text-4xl md:text-5xl font-medium mb-4")}>
            Why Should You{" "}
            <Highlighter action="underline" color="#fff" strokeWidth={2}>
              <strong className="text-[#a365ff] font-medium">Appoint Us?</strong>
            </Highlighter>
          </h3>

          <p className="text-muted-foreground max-w-2xl">
            Our comprehensive platform empowers healthcare providers with tools
            to optimize practice management and enhance patient care delivery.
          </p>
        </div>

        <SpotlightCard
          className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-zinc-900/70"
          spotlightColor="rgba(163, 101, 255, 0.3)"
        >
          {/* Left side - Content */}
          <div className="flex flex-col justify-center p-6 lg:p-10">
            <h3 className="text-3xl md:text-4xl font-medium mb-6">
              Transforming Healthcare Management
            </h3>
            <p className="text-muted-foreground mb-8">
              We revolutionize medical practices with cutting-edge technology
              solutions designed to streamline operations while maintaining
              the highest standards of patient care.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#a365ff] size-5"/>
                <span className="text-primary/80"><strong className="text-primary">Reduce</strong> administrative workload by 60%</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#a365ff] size-5"/>
                <span className="text-primary/80">HIPAA-compliant <strong className="text-primary">secure</strong> platform</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#a365ff] size-5"/>
                <span className="text-primary/80"><strong className="text-primary">24/7</strong> dedicated support team</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#a365ff] size-5"/>
                <span className="text-primary/80"><strong className="text-primary">Proven</strong> to increase practice revenue</span>
              </li>
            </ul>
          </div>

          {/* Right side - Glossy Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative p-8 rounded-xl bg-gradient-to-br from-[#1e1b20] to-[#2a2438] border border-white/10"
          >
            <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#a365ff]/10 via-transparent to-transparent opacity-70"></div>
            
            <div className="relative z-10">
              <h4 className="text-2xl font-semibold mb-6 text-white">Schedule a Consultation</h4>
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-[#a365ff] focus:border-transparent text-white placeholder-white/50"
                    placeholder="Dr. John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-[#a365ff] focus:border-transparent text-white placeholder-white/50"
                    placeholder="john@yourclinic.com"
                  />
                </div>

                <div>
                  <label htmlFor="practice" className="block text-sm font-medium text-muted-foreground mb-2">
                    Practice Size
                  </label>
                  <select
                    id="practice"
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-[#a365ff] focus:border-transparent text-white"
                  >
                    <option value="">Select your practice size</option>
                    <option value="solo">Solo Practitioner</option>
                    <option value="small">Small Practice (2-5 providers)</option>
                    <option value="medium">Medium Practice (6-15 providers)</option>
                    <option value="large">Large Practice (16+ providers)</option>
                  </select>
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