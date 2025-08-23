import { ProfileCardProps, CareerCardProps } from "@/app/_types";

export type ResumeData = ProfileCardProps & {
  introduce: string[];
  career: CareerCardProps;
  projects: {
    title: string;
    subtitle?: string;
    type?: "company" | "personal" | "freelance";
    meta?: string;
    bullets?: string[];
    tags?: string[];
    link?: string;
  }[];
  skills: string[];
  education: { school: string; major?: string; period?: string }[];
  certification: {
    name: string;
    issuer?: string;
    issueDate?: string;
  }[];
};
