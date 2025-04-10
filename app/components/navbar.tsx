import React, { JSX, ReactNode } from "react";

// Extract common hover, transition, and scale styles into a shared class
const commonNavLinkStyles = "hover:text-indigo-400 cursor-pointer transform transition-all duration-300 hover:scale-105";

type NavLinkProps = {
  children: ReactNode;
};

const NavLink = React.memo(({ children }: NavLinkProps): JSX.Element => {
  return <li className={commonNavLinkStyles}>{children}</li>;
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
          <NavLink>About</NavLink>
          <NavLink>Experience</NavLink>
          <NavLink>Projects</NavLink>
          <NavLink>Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
