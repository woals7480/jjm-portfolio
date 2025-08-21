import ProfileIntro from "@/app/_components/ProfileIntro";
import IntroLinks from "@/app/_components/IntroLinks";

export default function Home() {
  return (
    <>
      <ProfileIntro />
      <IntroLinks resumeHref="/resume" portfolioHref="/portfolio" />
    </>
  );
}
