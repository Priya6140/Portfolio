export interface Experience {
  id: number;
  duration: string;
  title: string;
  company: string;
  description: string;
}

export interface Education {
  id: number;
  duration: string;
  title: string;
  company: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  level: string;
  levelPercentage: number; // Represents percentage for the progress bar.
  icon: React.FC<{ size: number; className?: string }>; // For skill icons.
  className: string; // Custom class for styling the icon.
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  img: string;
  link: string;
  githubLink: string;
}

export interface ExpertiseItem {
  id: number;
  name: string;
  description: string;
  level: string;
  levelPercentage: number;
  icon: string;
}
