import React, { useState, useEffect } from "react";
import GlassSurface from "./GlassSurface/GlassSurface";

const NavBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Trigger the change slightly before the top (factor 180 instead of 200)
      const progress = Math.min(scrollY / 180, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic glass size properties
  const dynamicWidth = 500 + (window.innerWidth - 500) * (1 - scrollProgress);
  const dynamicHeight = 56 + (56 - 56) * (1 - scrollProgress); // Always 56
  const dynamicBorderRadius = 50 * scrollProgress;
  const dynamicDisplace = 2 + 13 * scrollProgress;

  return (
    <div className="fixed top-2.5 left-0 right-0 z-50 flex justify-center">
      {/* Glass Navbar */}
      <div
        style={{
          opacity: scrollProgress,
          transition: "opacity 0.15s ease-out",
        }}
        className="absolute inset-0 flex justify-center"
      >
        <GlassSurface
          width={dynamicWidth}
          height={dynamicHeight}
          borderRadius={dynamicBorderRadius}
          displace={dynamicDisplace}
          backgroundOpacity={0.2}
          className="transition-all duration-150 ease-out"
          style={{
            width: `${dynamicWidth}px`,
            maxWidth: "calc(100% - 20px)",
          }}
        >
          <NavContent />
        </GlassSurface>
      </div>

      {/* Solid Navbar */}
      <div
        style={{
          opacity: 1 - scrollProgress,
          transition: "opacity 0.15s ease-out",
        }}
        className="absolute inset-0 flex justify-center"
      >
        <div
          style={{
            width: `${dynamicWidth}px`,
            maxWidth: "calc(100% - 20px)",
            height: dynamicHeight,
          }}
          className="rounded-lg flex items-center px-2"
        >
          <NavContent />
        </div>
      </div>
    </div>
  );
};

const NavContent = () => (
  <div className="flex gap-2 justify-evenly items-center w-full h-full">
    <div className="size-12 flex-shrink-0">
      <img src="./logo.png" alt="logo" className="w-full h-full" />
    </div>
    <ul className="flex gap-4 font-medium text-primary/80 flex-grow justify-center">
      <li>
        <a href="#home" className="hover:text-primary transition-colors">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-primary transition-colors">
          About Us
        </a>
      </li>
      <li>
        <a href="#services" className="hover:text-primary transition-colors">
          Services
        </a>
      </li>
      <li className="hidden sm:block">
        <a href="#faq" className="hover:text-primary transition-colors">
          FAQ
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-primary transition-colors">
          Contact
        </a>
      </li>
    </ul>
  </div>
);

export default NavBar;
