"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import * as s from "./ProjectsCard.css";
import { ProjectProps } from "../_types";

const fmt = (p?: ProjectProps["period"]) =>
  p ? `${p.start} – ${p.end ?? "현재"}` : undefined;

export default function Projects({ projects }: { projects: ProjectProps[] }) {
  return (
    <section className={clsx(s.section, s.cardWrap)} aria-label={"Projects"}>
      <header className={s.header}>
        <span className={s.headerIcon} aria-hidden>
          🗂
        </span>
        <h2 className={s.headerTitle}>프로젝트</h2>
      </header>

      <div className={s.grid}>
        {projects.map((prj) => (
          <article key={prj.id} className={s.card}>
            <div className={s.cover}>
              <Image
                src={prj.cover}
                alt={`${prj.title} cover`}
                width={800}
                height={480}
                className={s.coverImg}
                priority
              />
            </div>

            <div className={s.body}>
              <h3 className={s.title}>
                {prj.title}
                {prj.subtitle && (
                  <span className={s.subtitle}>· {prj.subtitle}</span>
                )}
              </h3>

              {prj.period && <p className={s.period}>{fmt(prj.period)}</p>}

              {prj.tags?.length ? (
                <div className={s.tags}>
                  {prj.tags.map((t) => (
                    <span key={t} className={s.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              {(prj.links?.github || prj.links?.demo) && (
                <div className={s.links}>
                  {prj.links.github && (
                    <Link
                      href={prj.links.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={s.link}
                    >
                      <LinkIcon /> github
                    </Link>
                  )}
                  {prj.links.demo && (
                    <Link
                      href={prj.links.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={s.link}
                    >
                      <ExternalIcon /> demo
                    </Link>
                  )}
                </div>
              )}

              {prj.badges?.length ? (
                <div className={s.badges}>
                  {prj.badges.map((b) => (
                    <span key={b} className={s.badge}>
                      {b}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* icons */
function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={s.icon}>
      <path
        d="M14 4h6v6M20 4l-9 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 12v7a1 1 0 0 0 1 1h7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={s.icon}>
      <path
        d="M7 17L17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
