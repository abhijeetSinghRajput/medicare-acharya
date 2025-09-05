import { ChevronRight } from "lucide-react";

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
