export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink: string;
}

export const projects: Project[] = [
  // {
  //   title: "CMS Platform",
  //   description:
  //     "Built a dynamic CMS using Laravel 12 and Inertia.js. Includes media uploads, polymorphic relationships, and role-based access.",
  //   tech: ["Laravel", "React", "Inertia.js"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   title: "Pet Adoption Platform",
  //   description:
  //     "A frontend-first app for pet listings using React, TypeScript, and Tailwind. Integrates with a backend API for data.",
  //   tech: ["React", "TypeScript", "Tailwind"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  {
    title: "JusticiaLaw",
    description:
      "Developed a responsive multi-page website for a law firm using PHP, JavaScript, and CSS. Features included service listings, contact form, and firm details. Focused on clean UI, accessibility, and structured backend integration.",
    tech: ["PHP", "MYSQL"],
    liveLink: "https://justicialaw.muneebusmani.com",
    githubLink: "https://github.com/muneebusmani/Project",
  },

  // {
  //   title: "Nexus Communication Website",
  //   description:
  //     "The Nexus Communication System is a role-based enterprise application designed to streamline operations for a telecommunications company. Built using C# and ASP.NET MVC, it features a structured architecture with distinct panels tailored for customers, administrators, and accounts personnel.",
  //   tech: ["C#", "ASP.NET", "Bootstrap", "MSSQL", "EF Core"],
  //   githubLink: "https://github.com/muneebusmani/Nexus_Communication-eproject-",
  // },
  {
    title: "Learn Skills",
    description:
      "A Learning Management System, Written in Next.js(migrated from static html, css into fullstack application in nextjs)",
    tech: ["Next.JS", "Typescript", "Bootstrap"],
    liveLink: "https://learnskills.muneebusmani.com",
    githubLink: "https://github.com/muneebusmani/learnskills/tree/nextjs",
  },
  {
    title: "Learn Skills(Static)",
    description: "A Learning Management System, Static Website",
    tech: ["Html", "CSS", "JavaScript", "JQuery", "Bootstrap"],
    liveLink: "https://old-learnskills.netlify.app",
    githubLink: "https://github.com/muneebusmani/learnskills/tree/master",
  },

  {
    title: "Olink(Digital Agency Website)",
    description:
      "A Digital Agency website written in pure html, css and bootstrap. migration into Nextjs is in progress, Typescript for better performance",
    tech: ["Html", "css", "JQuery", "Bootstrap"],
    liveLink: "https://olink.muneebusmani.com",
    githubLink: "https://github.com/muneebusmani/olink",
  },
  {
    title: "Todo List",
    description: "A Todo App Built in Laravel blade with user based notes.",
    tech: ["Laravel", "Blade", "SQLite"],
    liveLink: "https://todolist.muneebusmani.com",
    githubLink: "https://github.com/muneebusmani/laravel-todolist",
  },
];
