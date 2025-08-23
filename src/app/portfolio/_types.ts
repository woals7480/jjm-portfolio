import { ProfileCardProps, CareerCardProps } from "@/app/_types";

export type SkillProps = {
  key: string;
  label: string;
  color: string;
  skills: string[];
};

export type ProjectProps = {
  id: string;
  title: string;
  subtitle?: string;
  cover: string;
  period?: { start: string; end?: string };
  tags?: string[];
  links?: { github?: string; demo?: string };
  badges?: string[];
};

export type PortfolioData = ProfileCardProps & {
  career: CareerCardProps;
  skills: SkillProps[];
  projects: ProjectProps[];
};
