import React, { JSX, ReactNode } from "react";

// Extract common hover, transition, and scale styles into a shared class
const commonNavLinkStyles =
  "relative group cursor-pointer text-sm text-white transition-all duration-300 hover:text-indigo-400 hover:scale-105";

type NavLinkProps = {
  children: ReactNode;
  link: string;
};

const NavLink = React.memo(({ children, link }: NavLinkProps): JSX.Element => {
  return (
    <li className={commonNavLinkStyles}>
      <a href={link}>
        <span className="relative">
          {children}
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </a>
    </li>
  );
});
NavLink.displayName = "Nav link";

const Navbar = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-50 bg-[#1e293b] text-white px-6 py-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold tracking-tight hover:text-indigo-400 transform transition-all duration-300 hover:scale-105">
          Portfolio
        </h1>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-sm">
          <NavLink link="#about">About</NavLink>
          <NavLink link="#experience">Experience</NavLink>
          <NavLink link="#projects">Projects</NavLink>
          <NavLink link="#contact">Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
