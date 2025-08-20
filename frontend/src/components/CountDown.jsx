"Use client"

import React from "react"
import { Puzzle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import AnimatedNumberCountdown from "./ui/animated-number-countdown"


const CountDown = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Badge
        variant="outline"
        className=" rounded-[14px] border-purple-400 bg-purple-600/20 md:left-6"
      >
        <span className="text-lg">🧩</span>
        CountDown component
      </Badge>
      <AnimatedNumberCountdown
        endDate={new Date("2025-12-31")}
        className="my-4"
      />
    </div>
  )
}

export default CountDown

