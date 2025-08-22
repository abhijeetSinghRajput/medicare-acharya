import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";

const TextField = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error = null,
  ...props
}) => {
  const errorClass = error
    ? "ring-destructive ring-1 text-destructive focus-visible:ring-destructive bg-destructive/5"
    : "";
  return (
    <div className="space-y-2 relative">
      <Label htmlFor={id} className="text-muted-foreground">
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "h-12 w-full bg-white/5 backdrop-blur-sm  border-white/10 rounded-lg focus-visible:ring-1 focus-visible:ring-[#a365ff] focus-visible:ring-offset-1 focus-visible:ring-offset-transparent",
          errorClass
        )}
        {...props}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default TextField;
