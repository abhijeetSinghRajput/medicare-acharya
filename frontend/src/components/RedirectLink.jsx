import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function RedirectLink({ text, link }) {
  return (
    <a href={link} className="landing-button w-max mx-auto">
      <span>{text}</span>
      <div className="button-arrow-circle">
        <ChevronRight />
      </div>
    </a>
  );
}
