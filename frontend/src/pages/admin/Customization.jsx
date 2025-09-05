import EmptyState from "@/components/emptyStates/EmptyState";
import { Palette } from "lucide-react";
import React from "react";

const Customization = () => {
  return (
    <div className="flex items-center justify-center">
      <EmptyState
        Icon={Palette}
        className={"mt-16"}
        heading={"No Apointments' Found"}
        description={"All your apointments will listed here"}
      />
    </div>
  );
};

export default Customization;
