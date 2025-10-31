"use client";

import { useState, useEffect, useRef } from "react";
import { Heading } from "./common";
import HorizontalLine from "./HorizontalLine";
import { educations } from "./seeding";
import { Education } from "@/types";

const EducationSection: React.FC = () => {
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
      id="education"
      className={`w-full px-6 sm:px-10 py-12 flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Heading */}
      <Heading title="Education" />
      <HorizontalLine />

      {/* Cards Layout */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {educations.map((edu: Education, index: number) => (
          <EducationCard key={edu.id} edu={edu} index={index} />
        ))}
      </div>
    </section>
  );
};

interface EducationCardProps {
  edu: Education;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ edu, index }) => {
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
      {/* Accent bar */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-500 to-yellow-400 rounded-l-md transition-all group-hover:w-2"></div>

      {/* Content */}
      <div className="pl-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{edu.duration}</p>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {edu.title}
        </h2>
        <h3 className="text-md text-gray-600 dark:text-gray-300 mb-2">
          {edu.company}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {edu.description}
        </p>
      </div>

      {/* Subtle gradient hover effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr from-orange-400 via-yellow-400 to-transparent transition-opacity duration-500 rounded-2xl"></div>
    </div>
  );
};

export default EducationSection;
