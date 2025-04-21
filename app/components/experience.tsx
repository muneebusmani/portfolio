import { JSX } from "react";
import ExperienceCard from "./experienceCard";
import { experiences, Experience } from "@/data/experience";

const Experiences = (): JSX.Element => {
  return (
    <section id="experience" className="py-16 px-4 md:px-16 text-white">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>
      <div className="space-y-6">
        {experiences.map(
          (exp: Experience, idx: number): JSX.Element => (
            <ExperienceCard key={idx} {...exp} />
          ),
        )}
      </div>
    </section>
  );
};

export default Experiences;
