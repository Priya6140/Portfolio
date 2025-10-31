"use client";
import { useState, useEffect, useRef } from "react";
import { Heading } from "./common";
import HorizontalLine from "./HorizontalLine";
import { skills } from "./seeding";
import { Skill } from "@/types";

const SkillSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="flex flex-col items-center justify-center w-full px-6 py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 transition-all duration-1000 ease-in-out"
    >
      {/* Heading */}
      <Heading title="Technical Skills" />
      <HorizontalLine />

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-10 max-w-7xl">
        {skills.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
        <skill.icon size={40} className={skill.className} />
      </div>

      {/* Skill Info */}
      <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-100 mb-1">
        {skill.name}
      </h3>
      <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-4">
        {skill.level}
      </p>

      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`absolute h-2 rounded-full transition-all duration-700 ${
            skill.level === "Beginner"
              ? "bg-red-500"
              : skill.level === "Intermediate"
              ? "bg-yellow-400"
              : "bg-green-500"
          }`}
          style={{ width: `${skill.levelPercentage}%` }}
        />
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-blue-500 dark:bg-blue-400 rounded-2xl blur-xl transition-all duration-500"></div>
    </div>
  );
};

export default SkillSection;
