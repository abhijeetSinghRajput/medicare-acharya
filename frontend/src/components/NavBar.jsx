import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from '@/components/ui/resizable-navbar';
import React from 'react'

import { useState } from "react";
 
const NavBar = () => {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Team",
      link: "#team",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <div className="w-full sticky top-0 z-50 ">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className={"min-h-14"}>
            <NavbarLogo />
          <NavItems items={navItems} />
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav className={"rounded-full"}>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default NavBar
