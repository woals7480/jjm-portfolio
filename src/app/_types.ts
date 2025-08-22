type LinkItem = { href: string; label?: string };

export type ProfileIntroProps = {
  photoUrl?: string;
  nameKo?: string;
  nameEn?: string;
  title?: string;
  statusBadge?: string;
  phone?: string;
  emails?: string[];
  location?: string;
  birth?: string;
  nationality?: string;
  hobbies?: string[];
  education?: { school: string; major?: string }[];
  military?: string[];
  links?: {
    github?: LinkItem;
    linkedin?: LinkItem;
    velog?: LinkItem;
    website?: LinkItem;
  };
  footerNote?: string;
};
