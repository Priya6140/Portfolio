"use client";

import { useState, useEffect, useRef } from "react";
import { Heading } from "./common";
import HorizontalLine from "./HorizontalLine";
import { expertise } from "./seeding";
import { ExpertiseItem } from "@/types";
import { FaCode } from "react-icons/fa";

const ExpertiseSection = () => {
  return (
    <section
      id="expertise"
      className="flex flex-col items-center justify-center w-full px-6 sm:px-10 py-12"
    >
      {/* Heading */}
      <Heading title="Expertise" />
      <HorizontalLine />

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl w-full">
        {expertise.map((item, index) => (
          <ExpertiseCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

interface ExpertiseCardProps {
  item: ExpertiseItem;
  index: number;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ item, index }) => {
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
      className={`group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform transition-all duration-700 ease-in-out hover:-translate-y-2 overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Gradient accent bar */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-teal-400"></div>

      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-3">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <FaCode className="text-blue-600 dark:text-blue-400 text-xl" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {item.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
        {item.description}
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mb-2">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${
            item.level === "Beginner"
              ? "bg-red-500"
              : item.level === "Intermediate"
              ? "bg-yellow-400"
              : "bg-green-500"
          }`}
          style={{ width: `${item.levelPercentage}%` }}
        ></div>
      </div>

      {/* Level label */}
      <p className="text-right text-xs text-gray-500 dark:text-gray-400">
        {item.level}
      </p>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-blue-500 to-teal-400 transition-opacity duration-500 rounded-2xl"></div>
    </div>
  );
};

export default ExpertiseSection;
