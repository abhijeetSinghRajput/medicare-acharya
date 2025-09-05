import EmptyState from "@/components/emptyStates/EmptyState";
import { NotebookPen } from "lucide-react";
import React from "react";

const ApointmentPage = () => {
  return (
    <div className="flex items-center justify-center">
      <EmptyState
        Icon={NotebookPen}
        className={"mt-16"}
        heading={"No Apointments' Found"}
        description={"All your apointments will listed here"}
      />
    </div>
  );
};

export default ApointmentPage;
