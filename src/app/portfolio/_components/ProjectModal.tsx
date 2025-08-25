"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import * as s from "./ProjectModal.css";
import { PROJECTS_DATA } from "@/app/portfolio/_const/data";
import { ProjectDetailProps } from "@/app/portfolio/_types";

export default function ProjectModal() {
  const router = useRouter();
  const { id: rawId } = useParams<{ id: string }>();
  const id = rawId ? decodeURIComponent(rawId) : null;
  const data = PROJECTS_DATA;

  const getDetailById = (id: string) => {
    return data.find((p) => p.id === id);
  };

  const fmt = (p?: ProjectDetailProps["period"]) =>
    p ? `${p.start} – ${p.end ?? "현재"}` : undefined;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && router.back();
    document.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [router]);

  if (!id) {
    router.back();
    return null;
  }

  const prj = getDetailById(id);

  if (!prj) {
    return (
      <div
        className={s.overlay}
        role="presentation"
        onClick={() => router.back()}
      >
        <section
          className={s.dialog}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={s.doc}>
            <div className={s.headerBar}>
              <button className={s.closeBtn} onClick={() => router.back()}>
                닫기
              </button>
            </div>

            <div className={s.section} aria-live="polite">
              <h1 id="project-modal-title" className={s.title}>
                프로젝트를 찾을 수 없어요
              </h1>
              <div className={s.meta}>
                요청한 ID: <code>{id}</code>
              </div>
              <div style={{ marginTop: 12 }}>
                <button className={s.closeBtn} onClick={() => router.back()}>
                  목록으로 돌아가기
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div
      className={s.overlay}
      role="presentation"
      onClick={() => router.back()}
    >
      <section
        className={s.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={s.doc}>
          <div className={s.headerBar}>
            <button className={s.closeBtn} onClick={() => router.back()}>
              닫기
            </button>
          </div>

          {/* 헤더 */}
          <div className={s.hero}>
            <div className={s.heroRow}>
              {/* 왼쪽: 타이틀 + 서브타이틀/기간 */}
              <div className={s.heroLeft}>
                <h1 id="project-modal-title" className={s.title}>
                  {prj.title}
                </h1>
                <div className={s.meta}>
                  {[prj.subtitle, fmt(prj.period)].filter(Boolean).join(" · ")}
                </div>
              </div>

              {/* 오른쪽: 프로젝트 종류 칩 + 참여 인원수 */}
              <div className={s.heroRight}>
                {/* 종류 칩 */}
                {(() => {
                  const t = prj.type as
                    | "company"
                    | "personal"
                    | "freelance"
                    | undefined;
                  if (t === "company")
                    return <span className={s.badgeCompany}>Company</span>;
                  if (t === "personal")
                    return <span className={s.badgePersonal}>Personal</span>;
                  if (t === "freelance")
                    return <span className={s.badgeFreelance}>Freelance</span>;
                  return null; // 혹은 <span className={s.badgeUnknown}>Project</span>
                })()}

                {/* 인원수 */}
                {(prj.members?.frontend ?? prj.members?.backend) !==
                  undefined && (
                  <div className={s.participants} aria-label="participants">
                    {typeof prj.members?.frontend === "number" && (
                      <span className={s.countPill}>
                        <span className={s.partLabel}>FE</span>
                        <span className={s.partNumber}>
                          {`${prj.members.frontend}명`}
                        </span>
                      </span>
                    )}
                    {typeof prj.members?.backend === "number" && (
                      <span className={s.countPill}>
                        <span className={s.partLabel}>BE</span>
                        <span className={s.partNumber}>
                          {`${prj.members.backend}명`}
                        </span>
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={s.hr} />

          {/* 이미지 갤러리 */}
          {prj.images?.length ? (
            <section className={s.section}>
              <div className={s.imageGrid}>
                {prj.images.map((img, i) => (
                  <div key={i} className={s.imageWrap}>
                    <Image
                      src={img.src}
                      alt={img.alt ?? `image-${i + 1}`}
                      width={1200}
                      height={675}
                      className={s.img}
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* 콜아웃 (선택) */}
          {prj.callout ? (
            <section className={s.section}>
              <div className={s.callout}>
                <div className={s.calloutIcon} aria-hidden>
                  📌
                </div>
                <div>{prj.callout}</div>
              </div>
            </section>
          ) : null}

          {/* 링크 (선택) */}
          {prj.links?.length ? (
            <section className={s.section}>
              <h2 className={s.h2}>링크</h2>
              <div className={s.linkList} onClick={(e) => e.stopPropagation()}>
                {prj.links.map((l, i) => (
                  <a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={s.link}
                  >
                    ↗ {l.label}
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {/* 사용한 기술 스택 (단일 리스트) */}
          {prj.stacks?.length ? (
            <section className={s.section}>
              <h2 className={s.h2}>사용한 기술 스택</h2>
              <div className={s.chips}>
                {prj.stacks.map((v, i) => (
                  <span key={i} className={s.chip}>
                    {v}
                  </span>
                ))}
              </div>
            </section>
          ) : null}

          {/* 상세 기능 */}
          {prj.features?.length ? (
            <section className={s.section}>
              <h2 className={s.h2}>상세 기능</h2>
              <ul className={s.list}>
                {prj.features.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </section>
    </div>
  );
}
