"use client";

import { JSX } from "react";
import ProjectCard from "./projectCard";
import { Project, projects } from "@/data/projects";

const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="py-16 px-4 md:px-16 text-white">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(
          (project: Project): JSX.Element => (
            <ProjectCard key={project.title} {...project} />
          ),
        )}
      </div>
    </section>
  );
};

export default Projects;
