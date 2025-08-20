import { motion } from "framer-motion";
import { MicIcon, ClockIcon, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function RedirectLink({ title, description, label, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex w-max max-w-md items-center gap-4 px-4 py-3 bg-background border rounded-full shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      <div className="p-2 rounded-full aspect-square w-10 h-10 bg-primary/10">
        🔗
      </div>

      <div className="text-left min-w-0">
        <p className="text-sm font-medium truncate w-full">{title}</p>

        <div className="text-xs text-muted-foreground truncate w-full">
          {description}
        </div>
      </div>

      <Button variant="ghost" className="text-[#81ff65] hover:bg-green-900/20">
        <ExternalLink />
      </Button>
    </motion.div>
  );
}
