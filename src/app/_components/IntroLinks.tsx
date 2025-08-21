"use client";

import Link from "next/link";
import * as s from "./IntroLinks.css";

type IntroLinksProps = {
  resumeHref?: string;
  portfolioHref?: string;
};

export default function IntroLinks({
  resumeHref = "/resume",
  portfolioHref = "/portfolio",
}: IntroLinksProps) {
  const year = new Date().getFullYear();

  return (
    <section className={s.wrap} aria-label="링크 안내">
      {/* 상단 카드 2개 */}
      <div className={s.tiles}>
        <Link
          href={resumeHref}
          className={s.tileResume}
          aria-label="Resume로 이동"
        >
          <span className={s.emoji} aria-hidden>
            📝
          </span>
          <span className={s.tileTitle}>Resume</span>
        </Link>

        <Link
          href={portfolioHref}
          className={s.tilePortfolio}
          aria-label="Portfolio로 이동"
        >
          <span className={s.emoji} aria-hidden>
            💼
          </span>
          <span className={s.tileTitle}>Portfolio</span>
        </Link>
      </div>

      {/* 카드 하단 간단 안내 */}
      <div className={s.captions}>
        <p>
          이력서를 보려면 <span className={s.hlResume}>Resume</span>를
          클릭해주세요.
        </p>
        <p>
          포트폴리오를 보려면 <span className={s.hlPortfolio}>Portfolio</span>를
          클릭해주세요.
        </p>
      </div>
      <footer className={s.footer}>
        © {year}. Jeong Jae Min, All Rights Reserved.
      </footer>
    </section>
  );
}
