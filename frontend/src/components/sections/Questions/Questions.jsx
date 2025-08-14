import { Highlighter } from "@/components/magicui/highlighter";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const questions = [
  {
    question: "What is a doctor management platform?",
    answer: "A doctor management platform is a digital solution that helps healthcare professionals manage appointments, patient records, billing, and communication—all in one place. It streamlines operations so doctors can focus more on patient care.",
  },
  {
    question: "How can doctors benefit from using a management agency?",
    answer: "Doctors save time, reduce administrative burden, and improve patient engagement. Agencies often provide tools for scheduling, telemedicine, analytics, and even marketing support to grow their practice.",
  },
  {
    question: "Is it secure to manage patient data online?",
    answer: "Yes—reputable platforms use encryption, secure servers, and comply with healthcare regulations like HIPAA or India's DISHA guidelines to protect sensitive patient information.",
  },
  {
    question: "Can I integrate my existing clinic software with this platform?",
    answer: "Most modern platforms offer API integrations or custom onboarding to sync with your current systems, including EMRs, payment gateways, and CRM tools.",
  },
  {
    question: "How do I get started with a doctor management agency?",
    answer: "You can sign up online, book a demo, or schedule a consultation. The agency will guide you through setup, data migration, and training so your practice runs smoothly from day one.",
  },
];

const Questions = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-2 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col gap-4 mb-12">
        <h3 className={cn("font text-4xl font-medium")}>
          Frequently Asked{" "}
          <Highlighter action="underline" color="#fff" strokeWidth={2}>
            <strong className="text-[#a365ff] font-medium">Questions</strong>
          </Highlighter>
        </h3>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about our doctor management platform
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {questions.map((item, index) => (
          <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10">
            <AccordionItem value={`item-${index}`} className="border-0">
              <AccordionTrigger className="p-4 md:p-6 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                <h4 className="text-lg font-medium text-white text-left">
                  {item.question}
                </h4>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};

export default Questions;