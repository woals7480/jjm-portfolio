import { PortfolioData } from "@/app/portfolio/_types";

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: "정재민",
    title: "프론트엔드 개발자",
    subtitle: "접근성과 성능을 기본으로, 누구나 쓰기 쉬운 웹을 만듭니다.",
    photoUrl: "/profile.png",
    page: "Portfolio",
  },
  contact: {
    email: "woals7480@gmail.com",
    phone: "010-8440-7480",
    github: {
      href: "https://github.com/woals7480",
      label: "github.com/woals7480",
    },
  },
  career: [
    {
      role: "프론트엔드 개발자",
      org: "(주) 이음",
      period: "2023.07 – 2025.06",
      bullets: [
        "Vue3 기반 관리자페이지 프론트엔드 개발 및 유지보수",
        "- 하자접수, 예약일정 관리, 문서 출력, 엑셀 다운로드 등 기능 구현",
        "React Native 기반 입주민앱 프론트엔드 개발 및 유지보수",
        "- 하자접수, 예약일정 관리, 푸시알림 등 핵심 기능 구현",
      ],
    },
  ],
  skills: [
    {
      key: "lang",
      label: "Language / Markup",
      color: "#ef4444",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      key: "fe",
      label: "Frontend Framework",
      color: "#3b82f6",
      skills: ["React", "Next.js", "React Native", "Vue3"],
    },
    {
      key: "state",
      label: "State & Data",
      color: "#06b6d4",
      skills: ["React Query", "Redux", "Vuex", "Recoil", "Zustand"],
    },
    {
      key: "style",
      label: "Styling / UI",
      color: "#a855f7",
      skills: ["Emotion", "Vuetify", "vanilla-extract"],
    },
    //   {
    //     key: "backend",
    //     label: "Runtime / Backend",
    //     color: "#f59e0b",
    //     skills: ["Node.js"],
    //   },
    {
      key: "api",
      label: "API",
      color: "#fb7185",
      skills: ["REST API", "GraphQL", "Socket.IO"],
    },
  ],
  projects: [
    {
      id: "chaedle admin",
      title: "채들 어드민",
      cover: "/chaedle_admin3.jpg",
      period: { start: "2025/01", end: "2025/05" },
      tags: [
        "Vue3",
        "TypeScript",
        "Vuex",
        "Vuetify",
        "Socket.IO",
        "pdfmake",
        "Chart.js",
        "xlsx",
      ],
      badges: ["회사 프로젝트"],
    },
    {
      id: "chaedle",
      title: "채들",
      period: { start: "2023/08", end: "2024/03" },
      cover: "/chaedle.jpg",
      tags: ["React Native", "Typescript", "Redux", "SQLite", "Socket.IO"],
      badges: ["회사 프로젝트"],
    },
    {
      id: "zcom",
      title: "Zcom",
      cover: "/zcom.png",
      tags: [
        "Next.js",
        "TypeScript",
        "React Query",
        "Next Auth",
        "Socket.IO",
        "MSW",
        "Zustand",
      ],
      badges: ["개인 프로젝트"],
      links: {
        github: "https://github.com/woals7480/zcom-next",
      },
    },
    {
      id: "market",
      title: "딸키마켓",
      cover: "/market.png",
      tags: [
        "Next.js",
        "TypeScript",
        "Recoil",
        "GraphQL",
        "Apollo GraphQL",
        "Emotion",
      ],
      badges: ["개인 프로젝트"],
      links: {
        github: "https://github.com/woals7480/freeboard_frontend",
      },
    },
  ],
};
