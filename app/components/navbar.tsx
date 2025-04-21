import React, { JSX, ReactNode } from "react";

const commonNavLinkStyles =
  "relative group cursor-pointer text-sm text-white transition-all duration-300 hover:text-indigo-400 hover:scale-105";

type NavLinkProps = {
  children: ReactNode;
  link: string;
  animationDelay?: string;
};

const NavLink = React.memo(
  ({ children, link, animationDelay }: NavLinkProps): JSX.Element => (
    <li className={`${commonNavLinkStyles} ${animationDelay}`}>
      <a href={link}>
        <span className="relative">
          {children}
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </a>
    </li>
  ),
);
NavLink.displayName = "Nav link";

const Navbar = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-50 bg-[#1e293b] text-white px-6 py-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-tight hover:text-indigo-400 transform transition-all duration-300 hover:scale-105">
          Portfolio
        </h1>

        {/* Hamburger - Now using checkbox for state */}
        <input type="checkbox" id="mobile-menu" className="hidden peer" />
        <label
          htmlFor="mobile-menu"
          className="lg:hidden text-white cursor-pointer peer-checked:[&>svg]:stroke-indigo-400"
        >
          <svg
            className="w-6 h-6 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        {/* Navigation Links - Controlled by checkbox */}
        <div
          className="
          lg:flex lg:space-x-6 lg:items-center lg:static lg:bg-transparent 
          bg-[#1e293b] w-full lg:w-auto flex-col lg:flex-row absolute lg:relative 
          top-full left-0 px-6 py-4 space-y-4 lg:space-y-0 
          max-lg:opacity-0 max-lg:translate-y-4 max-lg:pointer-events-none
          peer-checked:max-lg:opacity-100 peer-checked:max-lg:translate-y-0 peer-checked:max-lg:pointer-events-auto
          transition-all duration-300
        "
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {["About", "Experience", "Projects", "Contact"].map(
              (item, index) => (
                <NavLink
                  key={item}
                  link={`#${item.toLowerCase()}`}
                  animationDelay={`max-lg:animate-fade-in-up max-lg:animation-delay-${index * 100}`}
                >
                  {item}
                </NavLink>
              ),
            )}
          </ul>
        </div>
      </nav>

      {/* Global styles moved here */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.4s ease-out forwards; }
        .animation-delay-0 { animation-delay: 0ms; }
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
      `}</style>
    </header>
  );
};

export default Navbar;
