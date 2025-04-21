"use client";

import { JSX, useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import ProjectCard, { Projects as _Projects } from "./projectCard";

const Projects = (): JSX.Element => {
  const [projects, setProjects] = useState<_Projects[]>([]);

  useEffect((): void => {
    axios
      .get<_Projects[]>("/api/projects")
      .then((res: AxiosResponse<_Projects[]>): void => setProjects(res.data))
      .catch((err: AxiosError): void =>
        console.error("Failed to fetch projects:", err),
      );
  }, []);

  return (
    <section id="projects" className="py-16 px-4 md:px-16 text-white">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(
          (project: _Projects): JSX.Element => (
            <ProjectCard key={project.title} {...project} />
          ),
        )}
      </div>
    </section>
  );
};

export default Projects;
