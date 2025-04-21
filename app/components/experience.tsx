"use client";

import { JSX, useEffect, useState } from "react";
import axios from "axios";
import ExperienceCard from "./experienceCard";

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const Experience = (): JSX.Element => {
  const [data, setData] = useState<Experience[]>([]);

  useEffect(() => {
    axios
      .get<Experience[]>("/api/experience")
      .then((res) => setData(res.data))
      .catch((err) =>
        console.error("Failed to fetch experience data:", err.message),
      );
  }, []);

  return (
    <section id="experience" className="py-16 px-4 md:px-16 text-white">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>
      <div className="space-y-6">
        {data.map(
          (exp: Experience, idx: number): JSX.Element => (
            <ExperienceCard key={idx} {...exp} />
          ),
        )}
      </div>
    </section>
  );
};

export default Experience;
