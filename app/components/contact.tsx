import { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Socials, socials } from "@/data/contact";

const Contact = (): JSX.Element => {
  return (
    <section id="contact" className="py-16 px-4 md:px-16 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Connect With Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {socials.map(
          (social: Socials): JSX.Element => (
            <a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-[#1e293b] hover:bg-indigo-600 transition-all transform hover:scale-110 px-8 py-6 rounded-lg text-white shadow-lg group"
            >
              <FontAwesomeIcon
                icon={social.icon}
                className="text-3xl group-hover:scale-125 transition-all duration-300 drop-shadow-[0_0_0.3rem_#ffffff40] "
              />
              <span className="text-lg font-medium  transition-all duration-300 drop-shadow-[0_0_0.3rem_#ffffff40]">
                {social.label}
              </span>
            </a>
          ),
        )}
      </div>
    </section>
  );
};

export default Contact;
