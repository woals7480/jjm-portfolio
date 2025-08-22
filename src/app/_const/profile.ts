import { ProfileIntroProps } from "@/app/_types";

export const PROFILE = {
  photoUrl: "/profile.png",
  nameKo: "정재민",
  nameEn: "Jeong Jae Min",
  title: "프론트엔드 개발자",
  statusBadge: "구직 중",
  phone: "01084407480",
  emails: ["woals7480@gmail.com"],
  location: "부산광역시 연제구 거제동",
  birth: "1995.02.13",
  nationality: "대한민국",
  hobbies: ["러닝", "볼링"],
  education: [{ school: "창원대학교", major: "의류학과" }],
  military: ["군필 (해군 병장 만기전역)"],
  links: {
    github: {
      href: "https://github.com/woals7480",
      label: "github.com/woals7480",
    },
  },
  footerNote: `안녕하세요. 프론트엔드 개발자 정재민입니다.
접근성과 성능을 기본으로 누구나 쓰기 쉬운 웹을 만듭니다.`,
} as const satisfies ProfileIntroProps;
