import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";
const SelectField = ({
  label,
  id,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  error = null,
}) => {
  const errorClass = error ?
    "ring-destructive ring-1 text-destructive focus-visible:ring-destructive bg-destructive/5" : "";

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-muted-foreground">
        {label}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={cn(
            "h-12 w-full bg-white/5 backdrop-blur-sm border-white/10 rounded-lg focus:ring-1 focus:ring-[#a365ff]",
            errorClass
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-[#231e28]">
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="py-2.5 cursor-pointer"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default SelectField;
