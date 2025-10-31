"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "./seeding";
import { Heading } from "./common";
import HorizontalLine from "./HorizontalLine";
import { Project } from "@/types";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center w-full px-6 py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 transition-all duration-700"
    >
      {/* Heading */}
      <Heading title="Projects" />
      <HorizontalLine />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={project.id ?? index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
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
      className={`relative flex flex-col bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out hover:shadow-2xl hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Project Image */}
      <div className="relative w-full h-56 overflow-hidden group">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-700 ease-in-out"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        </div>
      </div>

      {/* Project Details */}
      <div className="flex flex-col flex-grow p-6">
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline hover:scale-105 transition-transform"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          ) : (
            <span className="text-gray-400 text-sm italic">No Live Link</span>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:underline hover:scale-105 transition-transform"
            >
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
