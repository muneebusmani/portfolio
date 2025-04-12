import { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

// Social Links Data
const socials = [
  {
    icon: faGithub,
    label: "GitHub",
    link: "https://github.com/muneebusmani",
  },
  {
    icon: faLinkedin,
    label: "LinkedIn",
    link: "https://linkedin.com/in/muneebusmani",
  },
  {
    icon: faTwitter,
    label: "Twitter",
    link: "https://x.com/Muneeb8355",
  },
  {
    icon: faEnvelope,
    label: "Email",
    link: "mailto:muneebusmani8355@gmail.com",
  },
  {
    icon: faFacebook,
    label: "Facebook",
    link: "https://facebook.com/muneebusmani",
  },
  {
    icon: faInstagram,
    label: "Instagram",
    link: "https://instagram.com/muneebusmani",
  },
];

const Contact = (): JSX.Element => {
  return (
    <section id="contact" className="py-16 px-4 md:px-16 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Connect With Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {socials.map(({ icon, label, link }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-[#1e293b] hover:bg-indigo-600 transition-all transform hover:scale-110 px-8 py-6 rounded-lg text-white shadow-lg group hover:shadow-xl hover:shadow-indigo-500/50"
          >
            <FontAwesomeIcon
              icon={icon}
              className="text-3xl group-hover:scale-125 group-hover:text-indigo-200 transition-all duration-300 drop-shadow-[0_0_0.3rem_#ffffff40] group-hover:drop-shadow-[0_0_0.5rem_#ffffff80]"
            />
            <span className="text-lg font-medium group-hover:text-indigo-200 transition-all duration-300 drop-shadow-[0_0_0.3rem_#ffffff40] group-hover:drop-shadow-[0_0_0.5rem_#ffffff80]">
              {label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
