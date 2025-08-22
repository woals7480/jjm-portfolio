export type ResumeData = {
  profile: { name: string; title: string; subtitle?: string; photoUrl: string };
  contact: {
    email: string;
    phone: string;
    github?: { href: string; label?: string };
  };
  introduce: string[];
  career: { role: string; org?: string; period?: string; bullets?: string[] }[];
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
