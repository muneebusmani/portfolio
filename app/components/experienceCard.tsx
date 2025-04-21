import { FC, memo } from "react";

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  role,
  company,
  duration,
  description,
}) => (
  <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
    <h3 className="text-xl font-semibold">
      {role} @ {company}
    </h3>
    <span className="text-sm text-gray-400">{duration}</span>
    <p className="mt-2 text-gray-300">{description}</p>
  </div>
);
export default memo(ExperienceCard);
