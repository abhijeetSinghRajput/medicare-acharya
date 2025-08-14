import React from "react";
import { Highlighter } from "./magicui/highlighter";
import { cn } from "@/lib/utils";

const SectionHeading = ({ before, mid, after, className, highlightColor }) => {
  return (
    <h3 className={cn("font text-3xl font-medium", className)}>
      {before}{" "}
      <Highlighter
        action="underline"
        color="#fff"
        strokeWidth={2}
        multiline={true}
        padding={2}
      >
        <strong className="text-[#a365ff] font-medium">{mid}</strong>
      </Highlighter>{" "}
      {after}
    </h3>
  );
};

export default SectionHeading;
