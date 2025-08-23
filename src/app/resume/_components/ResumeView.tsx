import * as s from "./ResumeView.css";
import type { ResumeData } from "@/app/resume/_types";
import ProfileCard from "@/app/_components/ProfileCard";
import CareerCard from "@/app/_components/CareerCard";

export default function ResumeView({ data }: { data: ResumeData }) {
  const {
    profile,
    contact,
    introduce,
    career,
    projects,
    skills,
    education,
    certification,
  } = data;

  function LinkIcon() {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={s.linkIcon}>
        <path
          d="M10.5 13.5l3-3m-7.5 6a4.5 4.5 0 010-9h3m6 0a4.5 4.5 0 010 9h-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <main className={s.page}>
      {/* 프로필 카드 */}
      <ProfileCard profile={profile} contact={contact} />

      {/* Introduce */}
      <section className={s.card}>
        <h2 className={s.h2}>Introduce</h2>
        <div className={s.body}>
          {introduce.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Career */}
      <CareerCard career={career} />

      {/* Projects */}
      <section className={s.card}>
        <h2 className={s.h2}>Projects</h2>
        <div className={s.projectsStack}>
          {projects.map((p, i) => (
            <article key={i} className={s.item}>
              <header className={s.itemHeader}>
                <div className={s.titleRow}>
                  <h3 className={s.itemTitle}>{p.title}</h3>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={s.titleLink}
                      aria-label={`${p.title} 링크(새 창)`}
                      title="새 창에서 열기"
                    >
                      <LinkIcon />
                    </a>
                  )}
                </div>
                <div>
                  {p.type && (
                    <span
                      className={
                        p.type === "company"
                          ? s.badgeCompany
                          : p.type === "freelance"
                          ? s.badgeFreelance
                          : s.badgePersonal
                      }
                    >
                      {p.type}
                    </span>
                  )}
                  {p.meta && <span className={s.period}>{p.meta}</span>}
                </div>
              </header>
              {p.subtitle && <h4 className={s.itemSubtitle}>{p.subtitle}</h4>}
              {p.bullets && (
                <ul className={s.list}>
                  {p.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              )}
              {p.tags && (
                <div className={s.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={s.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className={s.card}>
        <h2 className={s.h2}>Skills</h2>
        <div className={s.tags}>
          {skills.map((t) => (
            <span key={t} className={s.tag}>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className={s.card}>
        <h2 className={s.h2}>Education</h2>
        <div className={s.stack}>
          {education.map((e, i) => (
            <div key={i} className={s.edu}>
              <div>
                <p className={s.eduSchool}>{e.school}</p>
                {e.major && <p className={s.eduMajor}>{e.major}</p>}
              </div>
              {e.period && <span className={s.period}>{e.period}</span>}
            </div>
          ))}
        </div>
      </section>

      <section className={s.card}>
        <h2 className={s.h2}>Certification</h2>
        <div className={s.stack}>
          {certification.map((c, i) => (
            <div key={i} className={s.edu}>
              <div>
                <p className={s.eduSchool}>{c.name}</p>
                {c.issuer && <p className={s.eduMajor}>{c.issuer}</p>}
              </div>
              {c.issueDate && <span className={s.period}>{c.issueDate}</span>}
            </div>
          ))}
        </div>
      </section>

      {/* <footer className={s.bottom}>
        Last updated · {new Date().toLocaleDateString()}
      </footer> */}
    </main>
  );
}
