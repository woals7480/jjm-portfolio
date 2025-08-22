import Image from "next/image";
import * as s from "./ProfileIntro.css";
import clsx from "clsx";
import { PROFILE } from "@/app/_const/profile";
import { ProfileIntroProps } from "@/app/_types";

export default function ProfileIntro() {
  const { links: _links, ...rest } = PROFILE;
  const links: ProfileIntroProps["links"] = _links;

  const {
    photoUrl,
    nameKo,
    nameEn,
    title,
    statusBadge,
    phone,
    emails,
    location,
    birth,
    nationality,
    hobbies,
    education,
    military,
    footerNote,
  } = rest;

  return (
    <section className={s.card} aria-label="소개">
      {/* 헤더 */}
      <div className={s.headerRow}>
        <div className={s.profileArea}>
          <div className={s.photoWrap} aria-hidden>
            <Image
              src={photoUrl}
              alt=""
              width={84}
              height={84}
              className={s.photo}
              priority
            />
          </div>
          <div>
            <h1 className={s.name}>
              {nameKo}
              {nameEn && (
                <span className={s.nameSub}>
                  {" "}
                  ({[nameEn].filter(Boolean).join(", ")})
                </span>
              )}
            </h1>
            <p className={s.title}>{title}</p>
            <div className={s.contactRow}>
              {phone && (
                <a
                  href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                  className={s.contactLink}
                >
                  <PhoneIcon />
                  <span>{phone}</span>
                </a>
              )}
              {emails[0] && (
                <a href={`mailto:${emails[0]}`} className={s.contactLink}>
                  <MailIcon />
                  <span>{emails[0]}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {statusBadge && <span className={s.badge}>{statusBadge}</span>}
      </div>

      {/* 구분선 */}
      <hr className={s.sep} />

      {/* 본문 그리드 */}
      <div className={s.grid}>
        {/* 기본 정보 */}
        <section className={s.section}>
          <h2 className={s.sectionTitle}>기본 정보</h2>
          <dl className={s.dl}>
            {birth && (
              <>
                <dt>생년월일</dt>
                <dd>{birth}</dd>
              </>
            )}
            {(location || nationality) && (
              <>
                <dt>거주지</dt>
                <dd>{location}</dd>
                <dt>국적</dt>
                <dd>{nationality}</dd>
              </>
            )}
            {hobbies.length > 0 && (
              <>
                <dt>취미</dt>
                <dd>{hobbies.join(", ")}</dd>
              </>
            )}
          </dl>
        </section>

        {/* 학력 및 병역 */}
        <section className={s.section}>
          <h2 className={s.sectionTitle}>학력 및 병역</h2>
          <dl className={clsx(s.dl, s.tight)}>
            {education.map((e, i) => (
              <div key={`edu-${i}`} className={s.row}>
                <dt>학력</dt>
                <dd>
                  {e.school}
                  {e.major ? `, ${e.major}` : ""}
                </dd>
              </div>
            ))}
            {military.map((m, i) => (
              <div key={`mil-${i}`} className={s.row}>
                <dt>병역</dt>
                <dd>{m}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 연락처 및 링크 */}
        <section className={s.section}>
          <h2 className={s.sectionTitle}>연락처 및 링크</h2>
          <ul className={s.linkList}>
            {emails.map((em) => (
              <li key={em}>
                <a href={`mailto:${em}`} className={s.linkA}>
                  <MailIcon />
                  {em}
                </a>
              </li>
            ))}
            {links.github?.href && (
              <li>
                <a
                  href={links.github.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={s.linkA}
                >
                  <GithubIcon />
                  {links.github.label ?? links.github.href}
                </a>
              </li>
            )}
            {links.linkedin?.href && (
              <li>
                <a
                  href={links.linkedin.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={s.linkA}
                >
                  <LinkedInIcon />
                  {links.linkedin.label ?? links.linkedin.href}
                </a>
              </li>
            )}
            {links.velog?.href && (
              <li>
                <a
                  href={links.velog.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={s.linkA}
                >
                  <VelogIcon />
                  {links.velog.label ?? links.velog.href}
                </a>
              </li>
            )}
          </ul>
        </section>
      </div>

      <hr className={s.sep} />

      {/* 연락처 및 링크 */}
      <div>{footerNote && <p className={s.noteInCard}>{footerNote}</p>}</div>
    </section>
  );
}

/* ====== icons (inline SVG) ====== */
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2A19 19 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.4 2.3a2 2 0 0 1-.6 1.8L8.7 10a16 16 0 0 0 4.9 4.9l1.2-1.1a2 2 0 0 1 1.8-.6l2.3.4A2 2 0 0 1 22 16.9z"
        fill="currentColor"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2 8 5 8-5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6a3.1 3.1 0 0 0-1.3-1.7c-1-.7.1-.7.1-.7a2.5 2.5 0 0 1 1.8 1.2 2.6 2.6 0 0 0 3.5 1 2.6 2.6 0 0 1 .8-1.6C7 18.6 4.3 17.6 4.3 12.8a4.7 4.7 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.1s1-.3 3.2 1.2a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2a4.3 4.3 0 0 1 .1 3.1 4.7 4.7 0 0 1 1.2 3.2c0 4.8-2.7 5.8-5.2 6.1a2.9 2.9 0 0 1 .8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"
        fill="currentColor"
      />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1C12 8.9 13.6 8 15.8 8c4 0 4.7 2.6 4.7 6V24h-4v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V24h-4L7.5 8z"
        fill="currentColor"
      />
    </svg>
  );
}
function VelogIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" aria-hidden>
      <path d="M47 64h43l38 84 38-84h43l-81 164h-38z" fill="currentColor" />
    </svg>
  );
}
