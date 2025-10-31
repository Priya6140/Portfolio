import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Header from "@/components/header";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection";
import { links } from "@/components/seeding";
import SkillSection from "@/components/SkillSection";

const profileSection = {
  id: "profile",
  value: "Profile",
};

export default function Home() {
  const updatedSections = [profileSection, ...links];

  const renderSection = (section: string) => {
    switch (section) {
      case "Profile":
        return <ProfileSection />;

      case "Experience":
        return <ExperienceSection />;

      case "Education":
        return <EducationSection />;

      case "Skill":
        return <SkillSection />;

      case "Projects":
        return <ProjectsSection />;

      case "Expertise":
        return <ExpertiseSection />;

      case "Contact":
        return <ContactSection />;

      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {/* header */}
      <Header />

      {updatedSections.map((sec) => (
        <section id={sec.id} className="w-full min-h-64 my-2" key={sec.id}>
          {renderSection(sec.value)}
        </section>
      ))}
    </div>
  );
}
