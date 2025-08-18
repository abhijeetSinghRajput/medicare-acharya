import { Highlighter } from "@/components/magicui/highlighter";
import ShinyText from "@/components/ShinyText/ShinyText";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Fallback } from "@radix-ui/react-avatar";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const socialIcons = {
  twitter: <Twitter size={20} />,
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  email: <Mail size={20} />,
  instagram: <Instagram size={20} />,
};

const doctor = {
  name: "Dr. Rajender Kumar",
  avatar: "./doctors/rajender-2.jpg",
  socialLinks: [
    { label: "twitter", link: "" },
    { label: "github", link: "" },
    { label: "linkedin", link: "" },
    { label: "email", link: "" },
    { label: "instagram", link: "" },
  ],
};

const DoctorContact = () => {
  return (
    <section id="contact" className="p-4 sm:p-8 max-w-7xl mx-auto">
      <div className="text-center flex flex-col items-center mb-16">
        <h3 className="text-4xl md:text-5xl max-w-2xl font-medium mb-4">
          Exceptional Care From{" "}
          <Highlighter action="underline" color="#fff" strokeWidth={2}>
            <strong className="font-medium text-[#a365ff]">
              Board-Certified
            </strong>
          </Highlighter>{" "}
          Specialists
        </h3>

        <ShinyText
          className="text-base max-w-2xl"
          text="Our physician team combines advanced medical expertise with compassionate patient-centered care for optimal health outcomes."
          speed={3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <div className="space-y-6">
            <div className="space-y-1">
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </Label>
              <Input
                className="h-11 rounded-xl focus-visible:ring-2 focus-visible:ring-[#a365ff]/50"
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </Label>
              <Input
                className="h-11 rounded-xl focus-visible:ring-2 focus-visible:ring-[#a365ff]/50"
                placeholder="Enter your phone number"
                type="tel"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </Label>
              <Textarea className="mt-2 rounded-lg focus-visible:ring-2 focus-visible:ring-[#a365ff]/50" />
            </div>
            <button className="w-full py-3 px-6 rounded-lg bg-[#a365ff] text-white font-medium hover:bg-[#8e4aff] transition-colors">
              Send Message
            </button>
          </div>
        </div>

        {/* Doctor Card */}
        <Card className="rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
          <CardHeader className="p-6">
            <Badge
              variant={"outline"}
              className="rounded-full mb-4 bg-green-800/20 border-none py-2.5 px-4 w-max gap-2"
            >
              <div className="relative">
                <div className="bg-[#b5ff6d] size-2 rounded-full aspect-square" />
                <div className="absolute inset-0 animate-ping bg-[#b5ff6d] size-2 rounded-full aspect-square" />
              </div>
              <p className="font-normal">Available for consultation</p>
            </Badge>
            <div className="flex items-center gap-6">
              <Avatar className="size-20 outline outline-offset-4 outline-[#a365ff]">
                <AvatarImage src={doctor.avatar} />
                <Fallback>DR</Fallback>
              </Avatar>
              <div>
                <h4 className="text-2xl font-semibold">{doctor.name}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Internal Medicine Specialist
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-muted-foreground">
              Committed to providing personalized care with a focus on
              preventive medicine and patient education.
            </p>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex gap-6">
            {doctor.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="cursor-pointer text-muted-foreground hover:text-primary transition-colors"
              >
                {socialIcons[link.label]}
              </a>
            ))}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default DoctorContact;
