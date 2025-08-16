import { motion } from "framer-motion";
import { MicIcon, ClockIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function UpcomingPodcast({ guestName, date, className }) {
  // Calculate time remaining
  const now = new Date();
  const timeRemaining = date.getTime() - now.getTime();

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex w-max pointer-events-none items-center gap-4 px-4 py-3 bg-background border rounded-full shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      <div className="p-2 rounded-full bg-primary/10 text-primary">
        <MicIcon className="w-4 h-4" />
      </div>

      <div>
        <p className="text-sm font-medium truncate">Podcast with {guestName}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <ClockIcon className="w-3 h-3" />
          <span>
            {days > 0 ? `${days}d ` : ""}
            {Math.floor(hours)}h {minutes}m
          </span>
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="px-3 py-1 text-[#a365ff] text-xs font-medium rounded-full bg-violet-900/20"
      >
        Live soon
      </motion.div>
    </motion.div>
  );
}
