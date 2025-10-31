"use client";

import { useState, useEffect, useRef } from "react";
import { Heading } from "./common";
import HorizontalLine from "./HorizontalLine";
import { experiences } from "./seeding";
import { Experience } from "@/types";
import { Briefcase } from "lucide-react"; // lightweight icon

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`w-full px-6 sm:px-10 py-12 flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Heading */}
      <Heading title="Experience" />
      <HorizontalLine />

      {/* Experience Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {experiences.map((exp: Experience, index: number) => (
          <ExperienceCard key={exp.id} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  exp: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden transform transition-all duration-700 hover:shadow-lg hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Gradient Bar */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-cyan-400 rounded-l-md transition-all group-hover:w-2"></div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-md">
          <Briefcase className="text-blue-500 w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {exp.title}
          </h2>
          <h3 className="text-md text-gray-600 dark:text-gray-300">
            {exp.company}
          </h3>
        </div>
      </div>

      {/* Duration */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.duration}</p>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {exp.description}
      </p>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr from-blue-500 via-cyan-400 to-transparent transition-opacity duration-500 rounded-2xl"></div>
    </div>
  );
};

export default ExperienceSection;
