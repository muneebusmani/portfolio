import { JSX } from "react";

const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="py-16 px-4 md:px-16 text-white">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform">
          <h3 className="text-xl font-semibold">CMS Platform</h3>
          <p className="mt-2 text-gray-300">
            Built a dynamic CMS using Laravel 12 and Inertia.js. Includes media uploads, polymorphic relationships, and role-based access.
          </p>
          <div className="flex gap-2 mt-3 text-sm text-gray-400">
            <span>Laravel</span><span>React</span><span>Inertia.js</span>
          </div>
          <div className="mt-4 flex gap-3">
            <a href="#" className="text-blue-400 underline">Live Demo</a>
            <a href="#" className="text-blue-400 underline">GitHub</a>
          </div>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform">
          <h3 className="text-xl font-semibold">Pet Adoption Platform</h3>
          <p className="mt-2 text-gray-300">
            A frontend-first app for pet listings using React, TypeScript, and Tailwind. Integrates with a backend API for data.
          </p>
          <div className="flex gap-2 mt-3 text-sm text-gray-400">
            <span>React</span><span>TypeScript</span><span>Tailwind</span>
          </div>
          <div className="mt-4 flex gap-3">
            <a href="#" className="text-blue-400 underline">Live Demo</a>
            <a href="#" className="text-blue-400 underline">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
