"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export const AnimatedTestimonials = ({ testimonials, autoplay = false, className }) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className={cn("mx-auto max-w-sm p-4 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12", className)}>
      <div className="relative grid grid-cols-1 gap-4 md:gap-20 md:grid-cols-2">
        {/* Image Carousel */}
        <div className="relative h-80 w-full overflow-hidden rounded-3xl">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={active}
              custom={direction}
              initial={{ 
                opacity: 0, 
                x: direction > 0 ? 100 : -100,
                rotateY: direction > 0 ? 15 : -15,
                scale: 0.95
              }}
              animate={{ 
                opacity: 1, 
                x: 0,
                rotateY: 0,
                scale: 1,
                transition: { 
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1] 
                }
              }}
              exit={{ 
                opacity: 0, 
                x: direction > 0 ? -100 : 100,
                rotateY: direction > 0 ? -15 : 15,
                scale: 0.95,
                transition: { 
                  duration: 0.4,
                  ease: "easeIn" 
                }
              }}
              className="absolute inset-0"
            >
              <img
                src={testimonials[active].src}
                alt={testimonials[active].name}
                width={500}
                height={500}
                draggable={false}
                className="h-full w-full rounded-3xl object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { 
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.2
                }
              }}
              exit={{ 
                y: -20, 
                opacity: 0,
                transition: { 
                  duration: 0.3,
                  ease: "easeIn" 
                }
              }}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                {testimonials[active].designation}
              </p>
              <motion.p 
                className="mt-6 text-lg text-gray-500 dark:text-neutral-300"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 0.4 }
                }}
              >
                {testimonials[active].quote}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex gap-4 pt-8 md:pt-0">
            <Button 
              variant="ghost" 
              className="size-12 rounded-full aspect-square" 
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft />
            </Button>
            <Button 
              variant="ghost" 
              className="size-12 rounded-full aspect-square" 
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};