import { JSX } from 'react'

const Experience = (): JSX.Element => {
  return (
    <section id="experience" className="py-16 px-4 md:px-16 text-white">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>
      <div className="space-y-6">
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Fullstack Developer @ XYZ Tech</h3>
          <span className="text-sm text-gray-400">Jan 2023 - Present</span>
          <p className="mt-2 text-gray-300">
            Worked on scalable MERN stack and Laravel apps. Built reusable React components,
            integrated REST & GraphQL APIs, and optimized backend logic using Laravel and MySQL.
          </p>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Intern Developer @ ABC Solutions</h3>
          <span className="text-sm text-gray-400">Jun 2022 - Dec 2022</span>
          <p className="mt-2 text-gray-300">
            Assisted in building admin dashboards with React and Laravel Blade. Maintained legacy code and migrated old APIs to Laravel 9.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience;
