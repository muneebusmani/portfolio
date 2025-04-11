import { JSX } from "react";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 animate-fade-in-up">
        <p className="text-sm">&copy; {new Date().getFullYear()} Muneeb Usmani. All rights reserved.</p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-300 hover:scale-110"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-300 hover:scale-110"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-white transition-all duration-300 hover:scale-110"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

