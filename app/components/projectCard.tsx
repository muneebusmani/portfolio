import { JSX, memo } from "react";

export interface Projects {
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink: string;
}

const ProjectCard: React.FC<Projects> = ({
  title,
  description,
  tech,
  liveLink,
  githubLink,
}) => (
  <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-300">{description}</p>
    <div className="flex gap-2 mt-3 text-sm text-gray-400">
      {tech.map(
        (t: string): JSX.Element => (
          <span key={t}>{t}</span>
        ),
      )}
    </div>
    <div className="mt-4 flex gap-3">
      {liveLink && (
        <a href={liveLink} className="text-blue-400 underline">
          Live Demo
        </a>
      )}
      <a href={githubLink} className="text-blue-400 underline">
        GitHub
      </a>
    </div>
  </div>
);

export default memo(ProjectCard);
