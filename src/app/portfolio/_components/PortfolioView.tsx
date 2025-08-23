import ProfileCard from "@/app/_components/ProfileCard";
import { PortfolioData } from "@/app/portfolio/_types";
import CareerCard from "@/app/_components/CareerCard";
import * as s from "./PortfolioView.css";
import SkillStackCard from "./SkillStackCard";
import ProjectsCard from "./ProjectsCard";

export default function PortfolioView({ data }: { data: PortfolioData }) {
  const { profile, contact, career, skills, projects } = data;

  return (
    <main className={s.page}>
      {/* 프로필 카드 */}
      <ProfileCard profile={profile} contact={contact} />

      {/* Career */}
      <CareerCard career={career} />

      {/* Skill Stack */}
      <SkillStackCard skills={skills} />

      {/* Projects */}
      <ProjectsCard projects={projects} />
    </main>
  );
}
