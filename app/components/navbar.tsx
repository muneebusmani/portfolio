"use client"
import React, { JSX, ReactNode } from "react";

// Extract common hover, transition, and scale styles into a shared class
const commonNavLinkStyles = "hover:text-indigo-400 cursor-pointer transform transition-all duration-300 hover:scale-105";

type NavLinkProps = {
  children: ReactNode;
  link: string;
};

const NavLink = React.memo(({ children, link }: NavLinkProps): JSX.Element => {
  return <li className={commonNavLinkStyles} onClick={() => { window.location.href = link }}>{children}</li>;
});
NavLink.displayName = "Nav link"

const Navbar = (): JSX.Element => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-4 shadow-md">
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
