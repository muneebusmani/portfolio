import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

export interface Socials {
  icon: IconDefinition;
  label: string;
  link: string;
}

export const socials: Socials[] = [
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
    link: "https://www.facebook.com/MuneebUsmani69/",
  },
  {
    icon: faInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/_mune_eb/",
  },
];
