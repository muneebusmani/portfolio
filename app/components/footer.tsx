import { JSX } from "react";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center animate-fade-in-up">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Muneeb Usmani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
