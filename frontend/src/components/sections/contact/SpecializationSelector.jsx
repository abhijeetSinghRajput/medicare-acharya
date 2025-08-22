import DoctorList from "@/components/DoctorList";
import { Button } from "@/components/ui/button";
import { CommandDialog } from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";

const SpecializationSelector = ({
  specializations,
  onAdd,
  onRemove,
  isMultiple = true,
  placeholder = "Select specialization",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2">
      <Label htmlFor="specialization" className="text-muted-foreground">
        {isMultiple ? "Specializations" : "Doctor Type"}
      </Label>
      <div className="relative">
        <div className="flex gap-2 items-center flex-wrap">
          {(isMultiple || specializations.length === 0) && (
            <Button
              className="rounded-full"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
            >
              Add
              <Plus />
            </Button>
          )}

          {specializations.map((specialization, index) => (
            <div
              key={index}
              className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-full pr-8 overflow-hidden"
            >
              {specialization}
              {isMultiple && (
                <Button
                  variant="ghost"
                  className="rounded-none size-4 h-full absolute top-0 right-0 hover:bg-transparent text-muted-foreground hover:text-primary-foreground"
                  onClick={(e) => {
                    e.preventDefault();
                    onRemove(index);
                  }}
                >
                  <X />
                </Button>
              )}
            </div>
          ))}
        </div>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <DoctorList
            onSelect={(item) => {
              if (isMultiple) {
                onAdd(item.specialization);
              } else {
                // For single selection, replace any existing selection
                if (specializations.length > 0) {
                  onRemove(0);
                }
                onAdd(item.specialization);
              }
              setOpen(false);
            }}
          />
        </CommandDialog>
      </div>
    </div>
  );
};

export default SpecializationSelector;
