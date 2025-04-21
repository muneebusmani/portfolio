import { NextResponse } from "next/server";

interface ExperienceInterface {
  role: string;
  company: string;
  duration: string;
  description: string;
}
export async function GET(): Promise<NextResponse<ExperienceInterface[]>> {
  const experiences: ExperienceInterface[] = [
    {
      role: "Laravel and React Developer",
      company: "Devcir Co.",
      duration: "Jan 2025 - Present",
      description:
        "Worked on scalable MERN stack and Laravel apps. Built reusable React components, integrated REST & GraphQL APIs, and optimized backend logic using Laravel and MySQL.",
    },
    {
      role: "PHP and Laravel Developer",
      company: "Increase Rev",
      duration: "Nov 2024 - Jan 2025",
      description:
        "Assisted in building admin dashboards with React and Laravel Blade. Maintained legacy code and migrated old APIs to Laravel 11.",
    },
  ];

  return NextResponse.json(experiences);
}
