import { cn } from "@/lib/utils";
import { Ghost } from "lucide-react";
import React from "react";

const EmptyState = ({ heading, description, className, Icon }) => {
  if (!heading) heading = "No Item found";
  if (!description) description = "";
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-lg flex-col items-center justify-center",
        className
      )}
    >
      <header className="relative mb-5"></header>
      <main className="z-10 flex w-full max-w-88 flex-col items-center justify-center mb-8 gap-2">
        <div className="rounded-full size-32 bg-accent flex items-center justify-center">
          {Icon ? (
            <Icon className="size-1/3 text-muted-foreground" />
          ) : (
            <Ghost className="size-1/3 text-muted-foreground" />
          )}
        </div>
        <h3 className="text-primary text-lg font-semibold">{heading}</h3>
        <p className="text-center text-sm text-muted-foreground w-[352px]">
          {description}
        </p>
      </main>
    </div>
  );
};

export default EmptyState;
