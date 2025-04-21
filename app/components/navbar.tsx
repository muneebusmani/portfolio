"use client";
import React, { JSX, ReactNode, useState } from "react";

// Common styles for all nav links (hover + transition)
const commonNavLinkStyles =
  "relative group cursor-pointer text-sm text-white transition-all duration-300 hover:text-indigo-400 hover:scale-105";

type NavLinkProps = {
  children: ReactNode;
  link: string;
  index?: number;
  isMobile?: boolean;
};

const NavLink = React.memo(
  ({
    children,
    link,
    index = 0,
    isMobile = false,
  }: NavLinkProps): JSX.Element => {
    return (
      <li
        className={`${commonNavLinkStyles} ${
          isMobile
            ? `opacity-0 animate-fade-in-up animation-delay-${index * 100}`
            : ""
        }`}
      >
        <a href={link}>
          <span className="relative">
            {children}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </a>
      </li>
    );
  },
);
NavLink.displayName = "Nav link";

// Tailwind Custom Animation Classes
const animationStyles = `
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.4s ease-in-out forwards;
}
`;

const Navbar = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <style>{animationStyles}</style>
      <header className="sticky top-0 z-50 bg-[#1e293b] text-white px-6 py-4 shadow-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-xl font-bold tracking-tight hover:text-indigo-400 transform transition-all duration-300 hover:scale-105">
            Portfolio
          </h1>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Nav Links */}
          <ul
            className={`lg:flex lg:space-x-6 text-sm lg:items-center lg:static lg:bg-transparent bg-[#1e293b] w-full lg:w-auto flex-col lg:flex-row absolute lg:relative top-16 left-0 px-6 py-4 space-y-4 lg:space-y-0 ${
              isMobileMenuOpen ? "flex" : "hidden"
            }`}
          >
            {["About", "Experience", "Projects", "Contact"].map(
              (item, index) => (
                <NavLink
                  key={item}
                  link={`#${item.toLowerCase()}`}
                  index={index}
                  isMobile={!isMobileMenuOpen ? false : true}
                >
                  {item}
                </NavLink>
              ),
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
